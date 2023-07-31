import styled from "styled-components"
import { lighten } from 'polished'

import { colorTextGrey, colorHover } from '../../../constants'

export const Component = styled.div`
  width: 100%;
`

export const Wrapper = styled.div`
  height: 15.75rem;
  width: 100%;
  margin-top: 4.3125rem;
  padding-top: 3.4375rem;
  display: flex;
  gap: 2.875rem;

  @media (max-width: 320px) {
    height: 18.0625rem;
    margin: 0;
    padding-top: 2.5625rem;
    flex-direction: column;  
  }
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 320px) {
    padding-left: 0.875rem;
    height: 4.9375rem;      
  }
`
export const Items = styled.div`
  height: 9.375rem;
  display: flex;
  flex-direction: column;  
  flex-wrap: wrap;
  margin-right: 3.25rem;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    flex-shrink: 1;
  }

  @media (max-width: 320px) {
    height: 10.375rem;
    &::after {
      display: none;
    }
  }
`
export const LastSection = styled(Section)`
  margin-left: auto; 
  align-items: flex-end;

  @media (max-width: 320px) {
    align-items: flex-start;
    margin-top: 4.875rem;
    margin-bottom: 3.125rem;
    margin-right: auto;
    margin-left: unset; 
    width: 100%;
  }
`
export const Title = styled.p`
  color: ${colorTextGrey};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.25rem;

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`
export const Item = styled.p`
  font-weight: 400;
  padding-bottom: 0.625rem;
  margin-right: 3.25rem;

  &:hover {
    color: ${lighten(0.05, colorHover)};
  }

  @media (max-width: 320px) {
    font-size: 0.875rem;
    width: 7.6875rem;
    margin-right: 0;
  }
`
export const Rights = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  align-items: flex-end;

  @media (max-width: 320px) {
    position: absolute;
    top: 65rem;
    left: 1rem;
    align-items: flex-start;
  }
`
export const Company = styled.p`
  margin-bottom: 0.3125rem;

`
export const Policy = styled.p`
  text-decoration-line: underline;
  margin-bottom: 1.25rem;
`
