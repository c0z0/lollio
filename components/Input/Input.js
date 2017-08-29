import styled from 'styled-components'

export default styled.input`
  display: block;
  border: none;
  border-bottom: 2px #ddd solid;
  outline: none;
  padding: 10px;
  margin: 16px 0;
  display: block;
  transition: all 0.2s ease-out;
  &:focus {
    border-color: #ec1d4d;
  }
`
