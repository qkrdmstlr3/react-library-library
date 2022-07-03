const getDataFromS3 = (res, rej) => {
  fetch('https://relili.s3.ap-northeast-2.amazonaws.com/relili.json')
    .then((response) => res(response.json()))
    .catch((error) => rej(error));
};

export const getData = () => new Promise(getDataFromS3);
