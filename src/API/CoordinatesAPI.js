import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.juso.go.kr/addrlink/',
});

const key = 'devU01TX0FVVEgyMDIwMDUyMTE1NDExMjEwOTc4NTI=';
// eslint-disable-next-line import/prefer-default-export
export const coordinates = {
  // eslint-disable-next-line object-curly-newline
  getCoordinates: ({ admCd, rnMgtSn, udrtYn, buldMnnm, buldSlno }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    api.get(
      `addrCoordApi.do?confmKey=${key}&resultType=json&admCd=${admCd}&rnMgtSn=${rnMgtSn}&udrtYn=${udrtYn}&buldMnnm=${buldMnnm}&buldSlno=${buldSlno}`,
    ),
};
