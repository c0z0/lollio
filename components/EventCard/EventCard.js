import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

import Button from '../Button'
import Loading from './Loading'
import CreateEventCard from './CreateEventCard'

const Card = styled.div`
	background: white;
	width: 25vw;
	border: 1px #ddd solid;
	border-radius: 4px;
	margin: 16px;
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
	padding: 16px;
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
	padding-left: 24px;
	padding-bottom: 0px;
`

const Detail = styled.p`color: #484848;`

export default class EventCard extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		time: PropTypes.string.isRequired
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
			isPrivate
		} = this.props
		return (
			<Card>
				<Title>
					{isPrivate
						? <span
								title="This is a private event."
								className="lnr lnr-lock"
								style={{ color: '#ccc', float: 'right' }}
							/>
						: null}
					{title}
				</Title>
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
					{details.map((d, i) =>
						<Detail key={i}>
							<Bold>{d.title}</Bold>: {d.content}
						</Detail>
					)}
				</Details>
				<Actions>
					<Button>Join</Button>
				</Actions>
			</Card>
		)
	}
}
