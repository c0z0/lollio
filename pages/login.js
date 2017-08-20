import React, { Component } from 'react'
import styled from 'styled-components'
import Cookie from 'js-cookie'
import Router from 'next/router'
import { gql, graphql } from 'react-apollo'

import withData from '../apollo-utils/withData.js'
import Button from '../components/Button'
import Error from '../components/Error'

const WideButton = Button.extend`
	width: 100%;
	position: relative;
	${props =>
		props.disabled && 'cursor: default; background: #ddd; border-color: #ddd;'};
`

const Card = styled.div`
	box-shadow: 2px 2px 30px -8px rgba(0, 0, 0, 0.2);
	background: white;
	width: 40vw;
	border: 1px #ddd solid;
	border-radius: 4px;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90vw;
	}
`

const InButton = styled.div`
	transform: translateY(0);
	transition: all .2s;

	${props =>
		props.loading &&
		`
		transform: translateY(-100px);
	`};
`
const InButtonIndicator = styled.div`
	position: absolute;
	top: 50%;
	transition: all .2s;
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

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Content = styled.div`
	padding: 16px;
	padding-top: 0;
`

const Form = styled.form`text-align: center;`

const Actions = styled.div`
	padding: 16px;
	border-top: 1px #ddd solid;
	text-align: right;
`

const Input = styled.input`
	display: block;
	border: 1px #ddd solid;
	outline: none;
	background: #f8f8f8;
	border-radius: 4px;
	padding: 10px;
	width: 95%;
	margin: 16px 0;
`

class Login extends Component {
	state = { username: '', password: '' }

	async login(e) {
		e.preventDefault()
		const { username, password } = this.state
		this.setState({ loading: true, error: false })
		if (!username || !password) return false
		const { data: { signinUser: { token } } } = await this.props.mutate({
			variables: {
				username,
				password
			}
		})
		if (!token)
			return this.setState({
				error: 'Invalid username or password.',
				loading: false
			})
		Cookie.set('session', token)
		Router.replace('/')
	}

	render() {
		const { username, password, error, loading } = this.state

		return (
			<Wrapper>
				<Card>
					<Content>
						<Title>Login</Title>
						<Form onSubmit={this.login.bind(this)}>
							<Input
								placeholder="IPA username..."
								type="text"
								autoFocus
								value={username}
								onChange={({ target: { value } }) =>
									this.setState({ username: value })}
							/>
							<Input
								placeholder="IPA password..."
								type="password"
								value={password}
								onChange={({ target: { value } }) =>
									this.setState({ password: value })}
							/>
							<input type="submit" style={{ display: 'none' }} />
						</Form>
					</Content>
					<Actions>
						<WideButton
							onClick={this.login.bind(this)}
							disabled={!username || !password}
						>
							<InButton loading={loading}>Login</InButton>
							<InButtonIndicator loading={loading}>
								<div className="loader" />
							</InButtonIndicator>
						</WideButton>
					</Actions>
				</Card>
				{error ? <Error message={error}> </Error> : null}
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
