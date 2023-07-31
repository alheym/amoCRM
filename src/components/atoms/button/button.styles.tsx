import styled from 'styled-components'
import { lighten } from 'polished'

import { ButtonProps } from './button.types'

export const Button = styled.button<ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5625rem;
  transition: 0.3s ease-in-out;
  text-align: center;
  padding: 0;
  width: 16.375rem;
  height: 3.8125rem; 
  color: #E4E5EA;
  border: none;
  background-color: ${({ color }) => color};
  
  &:hover {
    background-color: ${({ color }) => lighten(0.05, color)};
  }
`
