import React from 'react'
import styled, { keyframes } from 'styled-components'

const shineAnimation = keyframes`
0%{
	background-position: -468px 0
}
100%{
	background-position: 468px 0
}
`

const Card = styled.div`
	background: white;
	width: 25vw;
	border: 1px #ddd solid;
	border-radius: 4px;
	box-shadow: 2px 2px 30px -8px rgba(0, 0, 0, 0.2);
	padding: 16px;
	margin: 16px;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90vw;
	}
`
const Title = styled.h2`
	user-select: none;
	color: rgba(0, 0, 0, 0);
	background: #ed174c;
	display: inline-block;
	opacity: .2;
	border-radius: 2px;
	cursor: default;
	animation-duration: 1.5s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-name: ${shineAnimation};
	animation-timing-function: linear;
	background: #ed174c;
	background: linear-gradient(to right, #ed174c 8%, #f27695 18%, #ed174c 33%);
	background-size: 800px 104px;
	position: relative;
`
const Detail = styled.p`
	user-select: none;
	color: rgba(0, 0, 0, 0);
	background: #efefef;
	display: inline-block;
	border-radius: 2px;
	cursor: default;
	animation-duration: 1.5s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-name: ${shineAnimation};
	animation-timing-function: linear;
	background: #ed174c;
	background: linear-gradient(to right, #efefef 8%, #f5f5f5 18%, #efefef 33%);
	background-size: 800px 104px;
	position: relative;
`

const s = '1234512345'

export default function LoadingEventCard() {
	return (
		<Card>
			<Title>
				{s}
			</Title>
			<div />
			<Detail>
				{s.repeat(2)}
			</Detail>
			<div />
			<Detail>
				{s.repeat(2).slice(0, s.length + s.length / 3)}
			</Detail>
			<div />
			<Detail>
				{s.repeat(2).slice(0, s.length + s.length / 2)}
			</Detail>
			<div />
			<Detail>
				{s.repeat(2).slice(0, s.length + s.length / 2)}
			</Detail>
		</Card>
	)
}
