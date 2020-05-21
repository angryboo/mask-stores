import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.juso.go.kr/addrlink/',
});

const key = 'devU01TX0FVVEgyMDIwMDUyMTE1MDkyMzEwOTc4NTA=';
// eslint-disable-next-line import/prefer-default-export
export const address = {
  getAddress: (keyword) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    api.get(
      `addrLinkApi.do?confmKey=${key}&resultType=json&keyword=${keyword}`,
    ),
};
