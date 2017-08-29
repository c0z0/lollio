import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Router from 'next/router'
import DateTime from 'react-datetime'
import moment from 'moment'
import { gql, graphql } from 'react-apollo'

import { QuerySchema } from '../../pages/index.schemas.js'

import Checkbox from '../Checkbox'
import Button from '../Button'

const LabelDetail = styled.span`color: #aaa;`

const slideIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(50%);
	}
	to {
		opacity: 1;
		transform: translateY(0)
	}
`

const fadeIn = keyframes`
from {
	opacity: 0;
}
to {
	opacity: 1;
}
`

const Input = styled.input`
  display: block;
  border: none;
  outline: none;
  padding: 12px;
  transition: all 0.2s ease-out;
  flex: 1;
  mergin-left: -8px;
`

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 8px;
  border: 1px #aaa solid;
  padding: 1px;
  border-radius: 4px;
  align-items: center;
  padding-left: 12px;
`

const Wrapper = styled.div`
  position: fixed;
  top: 64px;
  left: 128px;
  right: 128px;
  background: white;
  border: 1px #ddd solid;
  z-index: 30;
  border-radius: 4px;
  animation: placeholder 0.2s ease-out;
  animation-name: ${slideIn};

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  ${props =>
    props.page &&
    `
		animation: none;
		position: static;
		box-shadow: 2px 2px 30px -8px rgba(0, 0, 0, 0.2);

		@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
			margin: 0;
		}
		
`};
`

const Actions = styled.div`
  padding: 32px;
  border-top: 1px solid #ddd;
  text-align: right;
`

const Inner = styled.div`position: relative;`

const Blackout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
  animation: placeholder 0.2s linear;
  animation-name: ${fadeIn};
`

const Content = styled.div`padding: 32px;`

const Title = styled.h1`color: #ed174c;`

const Close = styled.span`
  position: absolute;
  top: 32px;
  color: #484848;
  transition: all 0.2s;
  cursor: pointer;
  right: 32px;
  font-size: 1.5em;

  &:hover {
    color: #ed174c;
  }
`

const Label = styled.label`
  font-size: 1.1em;
  color: #484848;
`

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`

class EventEditor extends Component {
  state = { private: false, title: '', location: '', time: '' }
  async create() {
    const { private: isPrivate, time, title, location } = this.state
    if (!title || !time || !location) return false
    this.setState({ loading: true })
    this.props.mutate({
      variables: {
        private: isPrivate,
        time,
        title,
        location,
      },
      update: (store, { data: { createEvent } }) => {
        const data = store.readQuery({
          query: QuerySchema,
        })
        console.log(data)
        if (!data) return false
        data.user.events.unshift(createEvent)
        store.writeQuery({ query: QuerySchema, data })
      },
      optimisticResponse: {
        createEvent: {
          __typename: 'Event',
          title,
          location,
          time,
          id: 'optimistic',
          private: isPrivate,
          details: [],
          managingUser: {
            __typename: 'User',
            username: '',
          },
          registeredUsers: [],
        },
      },
    })
    this.setState({ loading: false })

    Router.replace('/')
    if (!this.props.page) this.props.close()
  }

  render() {
    const { page, close } = this.props
    const { private: isPrivate, time, title, location, loading } = this.state
    return (
      <div>
        {!page ? <Blackout /> : null}
        <Wrapper page={page}>
          <Inner>
            <Close
              className="lnr lnr-cross"
              onClick={() => {
                Router.replace('/')
                if (!page) close()
              }}
            />
            <Content>
              <Title>
                {!isPrivate ? 'Create an event' : 'Create a private event'}
              </Title>
              <form>
                <CheckBoxWrapper>
                  <Checkbox
                    checked={isPrivate}
                    onChange={c => this.setState({ private: c })}
                  />
                  <Label htmlFor="location">
                    {isPrivate ? 'Private ' : 'Public '}
                    <LabelDetail>
                      {isPrivate ? (
                        'this event is only visible with invite'
                      ) : (
                        'this event is visible to everyone'
                      )}
                    </LabelDetail>
                  </Label>
                </CheckBoxWrapper>
                <Label htmlFor="title">Title</Label>
                <InputWrapper>
                  <span className="lnr no-padding lnr-text-format" />
                  <Input
                    type="text"
                    placeholder="Event title..."
                    id="title"
                    value={title}
                    onChange={({ target: { value } }) =>
                      this.setState({ title: value })}
                  />
                </InputWrapper>
                <Label htmlFor="location">Location</Label>
                <InputWrapper>
                  <span className="lnr no-padding lnr-location" />
                  <Input
                    type="text"
                    placeholder="Event location..."
                    id="location"
                    value={location}
                    onChange={({ target: { value } }) =>
                      this.setState({ location: value })}
                  />
                </InputWrapper>
                <Label htmlFor="location">
                  <span className="lnr lnr-clock" />Date and time
                </Label>
                <DateTime
                  value={moment(time)}
                  onChange={v => {
                    if (typeof v === 'string') return false
                    this.setState({ time: v.toISOString() })
                  }}
                />
              </form>
            </Content>
            <Actions>
              <Button
                secondary
                onClick={() => {
                  Router.replace('/')
                  if (!page) close()
                }}
              >
                Cancel
              </Button>
              <Button.Loading
                loading={loading}
                text={'Create'}
                disabled={!title || !time || !location}
                onClick={this.create.bind(this)}
              />
            </Actions>
          </Inner>
        </Wrapper>
      </div>
    )
  }
}

const CreateEvent = gql`
  mutation createEvent(
    $time: String!
    $location: String!
    $title: String!
    $private: Boolean!
  ) {
    createEvent(
      time: $time
      location: $location
      title: $title
      private: $private
    ) {
      id
      title
      location
      time
      details {
        title
        content
      }
      private
      registeredUsers {
        username
      }
      managingUser {
        username
      }
    }
  }
`

export default graphql(CreateEvent)(EventEditor)
