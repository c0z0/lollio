import React, { Component } from 'react'
import { graphql, gql, ApolloProvider } from 'react-apollo'
import styled from 'styled-components'

import withData from '../apollo-utils/withData.js'
import client from '../apollo-utils/createClient.js'
import EventCard from '../components/EventCard'
import NavBar from '../components/NavBar'

import { QuerySchema } from './index.schemas.js'

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

class Index extends Component {
	render() {
		const { data } = this.props
		if (data.loading)
			return (
				<div>
					<NavBar />
					<Wrapper onDoubleClick={() => this.setState({ loading: false })}>
						{' '}{Array(3).fill(1).map((_, i) => <EventCard.Loading key={i} />)}
					</Wrapper>
				</div>
			)
		const eventsPlaceholder = [<EventCard.CreateEventCard key={-1} />]
		while ((data.user.events.length + eventsPlaceholder.length) % 3 !== 0) {
			eventsPlaceholder.push(
				<EventCard.PlaceHolder key={eventsPlaceholder.length} />
			)
		}
		return (
			<div>
				<NavBar />
				<Wrapper>
					{data.user.events.map((e, i) => <EventCard key={i} {...e} />)}
					{eventsPlaceholder}
				</Wrapper>
			</div>
		)
	}
}

export default withData(graphql(QuerySchema)(Index))
