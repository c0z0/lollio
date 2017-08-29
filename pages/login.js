import React, { Component } from 'react'
import styled from 'styled-components'
import Cookie from 'js-cookie'
import Router from 'next/router'
import { gql, graphql } from 'react-apollo'

import withData from '../apollo-utils/withData.js'
import Button from '../components/Button'
import Error from '../components/Error'

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const WideButton = Button.extend`
  position: relative;
  overflow: hidden;
  padding: 12px 32px;
  ${props =>
    props.disabled && 'cursor: default; background: #ddd; border-color: #ddd;'};
`

const Card = styled.div`
  box-shadow: 2px 2px 30px -8px rgba(0, 0, 0, 0.2);
  background: white;
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 500px;
  overflow: hidden;
  border: 1px #ddd solid;
  border-radius: 4px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
    height: 100vh;
  }
`

const InButton = styled.div`
  transform: translateY(0);
  transition: all 0.2s;

  ${props =>
    props.loading &&
    `
		transform: translateY(-100px);
	`};
`
const InButtonIndicator = styled.div`
  position: absolute;
  top: 50%;
  transition: all 0.2s;
  left: 50%;
  transform: translate(-50%, 100px);
  ${props =>
    props.loading &&
    `
		transform: translate(-50%, -50%);
	`};
`

const Title = styled.h1`
  color: #ed174c;
  padding: 16px;
  padding-left: 24px;
  padding-bottom: 0px;
`
const Err = styled.p`color: #ed174c;`

const Wrapper = styled.div`
  background: url('/static/login-background.svg');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 0;
`

const Form = styled.form``

const Actions = styled.div`
  padding: 16px;
  // border-top: 1px #ddd solid;
  text-align: right;
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
  transition: all 0.2s ease-out;
  & span {
    color: #aaa;
    transition: all 0.2s ease-out;
  }
  ${props =>
    props.focused &&
    `
      & span {
        color: #ed174c;
      }
    `};
`

const Label = styled.label`
  font-size: 1.1em;
  color: #484848;
`

class Login extends Component {
  state = { email: '', form: true }

  async login(e) {
    e.preventDefault()
    const { username, password } = this.state
    this.setState({ loading: true, error: false })
    if (!username || !password) return false
    const { data: { signinUser: { token } } } = await this.props.mutate({
      variables: {
        username,
        password,
      },
    })
    if (!token)
      return this.setState({
        error: 'Invalid username or password.',
        loading: false,
      })
    Cookie.set('session', token)
    Router.replace('/')
  }

  render() {
    const { email, error, loading, emailFocused } = this.state

    return (
      <Wrapper>
        <style jsx>{`
          span.started {
            color: #aaa;
            font-weight: 500;
          }
        `}</style>
        <Card>
          <Content>
            <Title>
              Login <span className="started">to get started.</span>
            </Title>

            <Form onSubmit={this.login.bind(this)}>
              <InputWrapper focused={emailFocused}>
                <span className="lnr lnr-envelope no-padding" />
                <Input
                  placeholder="Email..."
                  type="email"
                  autoFocus
                  onFocus={() => this.setState({ emailFocused: true })}
                  onBlur={() => this.setState({ emailFocused: false })}
                  value={email}
                  onChange={({ target: { value } }) =>
                    this.setState({ email: value })}
                />
              </InputWrapper>
              {error && <Err>{error}</Err>}
              <input type="submit" style={{ display: 'none' }} />
            </Form>
          </Content>
          <Actions>
            <WideButton
              onClick={this.login.bind(this)}
              disabled={!validateEmail(email)}
            >
              <InButton loading={loading}>Continue</InButton>
              <InButtonIndicator loading={loading}>
                <div className="loader" />
              </InButtonIndicator>
            </WideButton>
          </Actions>
        </Card>
      </Wrapper>
    )
  }
}

const SigninMutation = gql`
  mutation login($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`

export default withData(graphql(SigninMutation)(Login))
