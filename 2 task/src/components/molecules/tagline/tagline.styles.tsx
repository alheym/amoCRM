import styled from "styled-components"

import { gradientCompany } from "../../../constants"

export const Wrapper = styled.div`
  margin-top: 0.625rem;
  width: 22.6875rem;

  @media (max-width: 320px) {
    margin-top: 0;
    width: 100%;
  }
`
export const Company = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  background: ${gradientCompany};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 320px) {
    font-size: 2.25rem;
    padding-left: 0.0625rem;
  }
`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;

  @media (max-width: 320px) {
    font-size: 2.25rem;
  }
`
export const Description = styled.p`
  margin-top: 1.875rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  white-space: pre-line;

  @media (max-width: 320px) {
    margin-top: 0.9375rem;
  }
`
