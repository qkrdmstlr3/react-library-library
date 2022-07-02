import fs from 'fs';
import path from 'path'

const hasElement = (arr) => !!arr.length;
const getUrl = (text) => text.match(/(?<=\()([^\~]*)(?=\))/)[0]
const removeBlank = (text) => text.replace(/\s+/g,"");
const splitAndRemoveFirst = (text, splitLetter) => text.split(splitLetter).splice(1)

const parseLib = (lib) => {
  const [name, _, github, npm, docs] = splitAndRemoveFirst(removeBlank(lib), '|')
  return {
    name,
    github: getUrl(github),
    npm: npm ? getUrl(npm) : '',
    docs: getUrl(docs),
  }
}

const parseList = (json, category) => {
  const [title, _, __, ___, ...libs] = category.split('\n');
  json[title] = libs.filter(hasElement).map(parseLib);
  return json;
}

(() => {
  const readme = fs.readFileSync(path.join('./README.md'),  { encoding: 'utf-8' });
  const libraryList = splitAndRemoveFirst(readme, '### ')
  const reliliJSON = libraryList.reduce(parseList, {});
  
  const JSON_NAME = 'relili.json';
  fs.writeFile(JSON_NAME, JSON.stringify(reliliJSON), () => {});
})()
