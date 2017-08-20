import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
	background: white;
	width: 25vw;
	border: 1px #ddd solid;
	border-radius: 4px;
	margin: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	user-select: none;
	flex-direction: column;
	color: #ddd;
	transition: .2s all;
	&:hover {
		color: #ed174c !important;
	}
`

const Icon = styled.div`font-size: 6em;`

export default function CreateEventCard() {
	return (
		<Card>
			<Icon>+</Icon>
			<p>Create an event</p>
		</Card>
	)
}
