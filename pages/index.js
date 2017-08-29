import React, { Component } from 'react'
import { graphql, gql, ApolloProvider } from 'react-apollo'
import styled from 'styled-components'
import Router from 'next/router'

import withData from '../apollo-utils/withData.js'
import client from '../apollo-utils/createClient.js'
import EventCard from '../components/EventCard'
import EventEditor from '../components/EventEditor'
import NavBar from '../components/NavBar'

import { QuerySchema } from './index.schemas.js'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class Index extends Component {
  state = { editorOpen: false }
  render() {
    const { data } = this.props
    const { editorOpen } = this.state
    if (data.loading)
      return (
        <div>
          <NavBar />
          <Wrapper onDoubleClick={() => this.setState({ loading: false })}>
            {' '}
            {Array(3)
              .fill(1)
              .map((_, i) => <EventCard.Loading key={i} />)}
          </Wrapper>
        </div>
      )
    const eventsPlaceholder = []
    while ((data.user.events.length + eventsPlaceholder.length + 1) % 3 !== 0) {
      eventsPlaceholder.push(
        <EventCard.PlaceHolder key={eventsPlaceholder.length} />,
      )
    }
    return (
      <div>
        <NavBar />
        {editorOpen ? (
          <EventEditor close={() => this.setState({ editorOpen: false })} />
        ) : null}
        <Wrapper>
          <EventCard.CreateEventCard
            onClick={() => {
              this.setState({ editorOpen: true })
              Router.push('/', '/new')
            }}
          />
          {data.user.events.map((e, i) => (
            <EventCard
              manager={e.managingUser.email === data.user.email}
              key={i}
              {...e}
            />
          ))}
          {eventsPlaceholder}
        </Wrapper>
      </div>
    )
  }
}

export default withData(graphql(QuerySchema)(Index))
