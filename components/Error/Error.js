import React from 'react'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
	position: fixed;
	bottom: 32px;
	right: 32px;
	min-width: 20vw;
	padding: 16px;
	background: #484848;
	color: white;
	text-align: center;
	border-radius: 4px;
`

export default function Error({ message }) {
	return (
		<ErrorWrapper>
			{message}
		</ErrorWrapper>
	)
}
