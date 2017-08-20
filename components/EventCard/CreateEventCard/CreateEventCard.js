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
	box-shadow: 2px 2px 30px -8px rgba(0, 0, 0, 0.2);
	flex-direction: column;
	color: #ddd;
	transition: .2s all;
	&:hover {
		color: #ed174c !important;
	}
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90vw;
	}
`

const Icon = styled.div`font-size: 6em;`

export default function CreateEventCard(props) {
	return (
		<Card {...props}>
			<Icon>+</Icon>
			<p>Create an event</p>
		</Card>
	)
}
