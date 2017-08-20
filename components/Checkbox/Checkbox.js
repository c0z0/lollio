import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: inline-block;
	background: #ddd;
	width: 40px;
	padding: 2px;
	border-radius: 11px;
	transition: all .2s ease-out;
	cursor: pointer;
	margin: 0 8px;
	transition: all .2s ease-out;
	${props => props.checked && `background: #ed174c;`};
`

const Knob = styled.div`
	border-radius: 100%;
	width: 20px;
	height: 20px;
	background: white;
	transition: all .2s ease-out;
	${props =>
		props.checked &&
		` 
margin-left: 20px;`};
`

export default function Checkbox({ checked, onChange }) {
	return (
		<Wrapper onClick={() => onChange(!checked)} checked={checked}>
			<Knob checked={checked} />
		</Wrapper>
	)
}
