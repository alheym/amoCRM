import styled from "styled-components"

import { Button } from '../../atoms'
import mobile from '../../../assets/mobile.png'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 24.1875rem;
  margin-top: 5.625rem;

  @media (max-width: 320px) {
    height: 27.8125rem;
    flex-direction: column;
    margin-top: 0;
    padding-top: 2.5rem;
    padding-bottom: 3.6875rem;
    padding-left: 0.875rem;
    position: relative;

    background: url(${mobile});
    background-repeat: no-repeat;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 320px) {
    align-items: flex-start;
  }
`
export const ConsulttationButton = styled(Button)`
  margin-top: 3.8125rem;
`
