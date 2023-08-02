import styled from "styled-components"
import { lighten } from 'polished'
import { NavLink } from 'react-router-dom'

import { colorText, colorHover } from '../../../constants'

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 34.4375rem;
  margin-right: 8.5625rem;
  margin-left: 1.6875rem;
  padding-top: 0.125rem;

  @media (max-width: 320px) {
    padding: 1.25rem 1rem;
    background: #0E1014;
    height: 3.4375rem;
    align-items: center;
    width: 20rem;
    margin: 0;
  }
`
export const Text = styled(NavLink)`
  color: ${colorText};

  &:hover {
    color: ${lighten(0.05, colorHover)};
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`
