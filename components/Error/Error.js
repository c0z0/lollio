import React from 'react'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 16px;
	background: #484848;
	color: white;
	text-align: center;
`

export default function Error({ message }) {
	return (
		<ErrorWrapper>
			{message}
		</ErrorWrapper>
	)
}
