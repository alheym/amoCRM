import styled from "styled-components"

import { gradientLine } from '../../../constants'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: end;
  gap: 1.875rem;

  @media (max-width: 320px) {
    gap: 0.625rem;
    margin-top: 1.25rem;
  }
`
export const Present = styled.div`
  text-align: right;
  width: 8.9375rem;

  @media (max-width: 320px) {
    text-align: left;
  }
`
export const Title = styled.p`
  font-size: 1.125rem;
  letter-spacing: 0.9px;
  text-transform: uppercase;

  @media (max-width: 320px) {
    font-size: 0.8125rem;
    letter-spacing: 0.65px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`
export const Line = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: flex;
    width: 10px;
    height: 1px;
    margin-top: 8px;
    margin-right: 5px;
    background: ${gradientLine};
  }
`
export const Description = styled.p`
  margin-top: 0.375rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  white-space: pre-line;
`
export const WrapperText = styled.div`
  display: flex;
`
