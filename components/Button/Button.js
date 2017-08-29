import styled from 'styled-components'

import Loading from './Loading'

const Button = styled.button`
  outline: none !important;
  border: 2px #ed174c solid;
  color: white;
  background: #ed174c;
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
  padding: 12px 32px;
  margin: 8px;
  transition: all 0.2s;
  // &:hover {
  // 	transform: translate(-2px, -2px);
  // 	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, .1);
  // }
  ${props =>
    props.secondary &&
    `color: #484848; border-color: #ccc; background: white; &: hover{
      color: #ed174c;
      border-color: #ed174c;
    }`};
  ${props =>
    props.disabled && 'cursor: default; background: #ddd; border-color: #ddd;'};
`

Button.Loading = Loading

export default Button
