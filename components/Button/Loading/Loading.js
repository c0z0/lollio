import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  outline: none !important;
  border: 2px #ed174c solid;
  position: relative;
  color: white;
  background: #ed174c;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  padding: 12px 32px;
  // &:hover {
  // 	transform: translate(-2px, -2px);
  // 	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, .1);
  // }
  ${props => props.secondary && `color: #ed174c; background: white;`};
  ${props =>
    props.disabled && 'cursor: default; background: #ddd; border-color: #ddd;'};
`

const InButton = styled.div`
  transform: translateY(0);
  transition: all 0.2s;

  ${props =>
    props.loading &&
    `
	transform: translateY(-100px);
`};
`
const InButtonIndicator = styled.div`
  position: absolute;
  top: 50%;
  transition: all 0.2s;
  left: 50%;
  transform: translate(-50%, 100px);
  ${props =>
    props.loading &&
    `
	transform: translate(-50%, -50%);
`};
`

export default function Loading(props) {
  const { loading, text, disabled } = props
  return (
    <Button disabled={disabled} {...props}>
      <InButton loading={loading}>{text}</InButton>
      <InButtonIndicator loading={loading}>
        <div className="loader" />
      </InButtonIndicator>
    </Button>
  )
}
