import styled from "styled-components"
import { NavLink } from 'react-router-dom'

import { colorText } from '../../../constants'

export const Text = styled(NavLink)`
  color: ${colorText};
`
export const Contact = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
  object-position: center;
`
export const Wrapper = styled.div`
  display: flex;
  width: 19.375rem;
  padding-top: 0.125rem;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 320px) {
    width: 18.0625rem;
  }
`
export const WrapperContacts = styled(Wrapper)`
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 320px) {
    align-items: flex-start;
    height: 2.5rem;
  }
`
export const Icons = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 1.3125rem;
  margin-bottom: 1.1875rem;

  @media (max-width: 320px) {
    margin-top: 0.5rem;
    margin-bottom: 0.625rem;
  }
`
export const TextAdress = styled(Text)`
  font-weight: 400;

  @media (max-width: 320px) {
    font-size: 0.875rem;
  }
`
