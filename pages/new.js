import React from 'react'
import styled from 'styled-components'

import EventEditor from '../components/EventEditor'
import withData from '../apollo-utils/withData.js'

const Wrapper = styled.div`
	background: url('/static/login-background.svg');
	background-repeat: no-repeat;
	background-position: 30vw -30vh;
	padding: 64px 128px;
`

function New() {
	return (
		<Wrapper>
			<EventEditor page />
		</Wrapper>
	)
}

export default withData(New)
