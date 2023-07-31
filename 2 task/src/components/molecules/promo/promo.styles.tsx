import styled from "styled-components"

import {
  orangeRedGradient,
  yellowOrangeGradient
} from "../../../constants"

export const Wrapper = styled.div`
  margin-top: 1.25rem;
  width: 18.1875rem;

  @media (max-width: 320px) {
    margin-top: 2.8125rem;
  }
`
export const WhiteText = styled.p`
  text-align: right;
  font-size: 1.125rem;

  @media (max-width: 320px) {
    text-align: left;
  }
`
export const GradientTextFree = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  background: ${orangeRedGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const GradientTextConsult = styled(GradientTextFree)`
  background: ${yellowOrangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
