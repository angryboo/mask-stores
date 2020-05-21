import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sgisapi.kostat.go.kr/OpenAPI3/transformation',
});

const key = '36dca025-b14b-4b96-9706-e14b91428cc4';
// eslint-disable-next-line import/prefer-default-export
export const transcoord = {
  // eslint-disable-next-line object-curly-newline
  getTranscoord: ({ entX, entY }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    api.get(
      `/transcoord.json?accessToken=${key}&src=EPSG:5179&dst=EPSG:4326&posX=${entX}&posY=${entY}`,
    ),
};
