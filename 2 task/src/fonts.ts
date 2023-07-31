import { css } from 'styled-components'

import InterBlack from './assets/fonts/Inter-Black.ttf'
import InterBold from './assets/fonts/Inter-Bold.ttf'
import InterMedium from './assets/fonts/Inter-Medium.ttf'
import InterRegular from './assets/fonts/Inter-Regular.ttf'

import MontserratMedium from './assets/fonts/Montserrat-Medium.ttf'
import MontserratRegular from './assets/fonts/Montserrat-Regular.ttf'

export const Fonts = css`
  @font-face {
    font-family: 'Inter';
    src: url(${InterBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url(${InterBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url(${InterMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`
