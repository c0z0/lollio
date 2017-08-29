import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

import Button from '../Button'
import Loading from './Loading'
import CreateEventCard from './CreateEventCard'

const Card = styled.div`
  background: white;
  box-shadow: 2px 2px 30px -8px rgba(0, 0, 0, 0.2);
  width: 25vw;
  border: 1px #ddd solid;
  border-radius: 4px;
  margin: 16px;
  position: relative;
  z-index: 2;
  & h2 span.edit {
    opacity: 0;
  }
  &:hover h2 span.edit {
    opacity: 1;
  }
  ${props => props.optimistic && `opacity: .5;`};
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90vw;
  }
`

const Details = styled.div`
  padding: 16px;
  padding-top: 0;
`

const Actions = styled.div`
  padding: 16px;
  border-top: 1px #ddd solid;
  text-align: right;
`

const PlaceHolder = styled.div`
  background: white;
  width: 25vw;
  border: 1px #ddd solid;
  border-radius: 4px;
  margin: 16px;
  opacity: 0;
`

const Bold = styled.span`
  font-weight: bold;
  color: #111;
`

const Title = styled.h2`
  color: #ed174c;
  padding: 16px;
  padding-bottom: 0px;
  ${props => props.optimistic && `color: #ccc !important;`};
`
const Edit = styled.span`
  color: #ccc;
  transition: all 0.2s;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    color: #ed174c;
  }
`

const Detail = styled.p`
  color: #484848;
  ${props => props.pink && 'color: #ed174c;'};
`

export default class EventCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }

  static Loading = Loading
  static PlaceHolder = PlaceHolder
  static CreateEventCard = CreateEventCard

  renderRegisteredUsers(users) {
    if (users.length === 0) return 'No users registered'
    if (users.length === 1) return users[0].username
    if (users.length === 2) return `${users[0].username} and 1 other`
    return `${users[0].username} and ${users.length - 1} others`
  }

  render() {
    const {
      title,
      location,
      time,
      details,
      registeredUsers,
      private: isPrivate,
      managingUser,
      manager,
      id,
    } = this.props
    if (id === 'optimistic')
      return (
        <Card optimistic>
          <style jsx>{`
            .loader {
              position: absolute;
              right: 16px;
              bottom: 16px;
            }
          `}</style>
          <Title optimistic>{title}</Title>
          <Details>
            <Detail>
              <span className="lnr lnr-clock" />
              {moment('2017-08-24T14:14:15+00:00').calendar()}
            </Detail>
            <Detail>
              <span className="lnr lnr-location" /> {location}
            </Detail>
            <Detail>
              <span className="lnr lnr-users" />{' '}
              {this.renderRegisteredUsers(registeredUsers)}
            </Detail>
            {details.map((d, i) => (
              <Detail key={i}>
                <Bold>{d.title}</Bold>: {d.content}
              </Detail>
            ))}
          </Details>
          <div className="loader pink" />
        </Card>
      )
    return (
      <Card>
        <Title>
          {isPrivate ? (
            <span
              title="This is a private event."
              className="lnr lnr-lock"
              style={{ color: '#ccc', float: 'right' }}
            />
          ) : null}
          {title}
          {manager ? <Edit className="edit lnr lnr-pencil" /> : null}
        </Title>
        <Details>
          <Detail pink={manager}>
            <span className="lnr lnr-user" /> by {managingUser.username}
          </Detail>
          <Detail>
            <span className="lnr lnr-clock" />
            {moment(time).calendar()}
          </Detail>
          <Detail>
            <span className="lnr lnr-location" /> {location}
          </Detail>
          <Detail>
            <span className="lnr lnr-users" />{' '}
            {this.renderRegisteredUsers(registeredUsers)}
          </Detail>
          {details.map((d, i) => (
            <Detail key={i}>
              <Bold>{d.title}</Bold>: {d.content}
            </Detail>
          ))}
        </Details>
        <Actions>
          <Button>Join</Button>
        </Actions>
      </Card>
    )
  }
}
