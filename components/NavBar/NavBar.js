import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Cookie from 'js-cookie'
import Router from 'next/router'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px #ddd solid;
	background: white;
	align-items: center;
	padding: 16px 32px;
	box-shadow: 2px 2px 30px -8px rgba(0, 0, 0, 0.2);
`
const Title = styled.h1`
	color: #ed174c;
	padding-left: 24px;
	padding-bottom: 0px;
	display: inline-block;
`

const Img = styled.img`
	height: 48px;
	transition: all 0.2s ease-out;
`

const Menu = styled.div``

const MenuItem = styled.a`
	color: #ed174c !important;
	margin: 16px !important;
	cursor: pointer !important;
	&:hover {
		text-decoration: underline !important;
	}
`

export default function NavBar({ activePage }) {
	return (
		<Wrapper>
			<Link to="/">
				<Img src="/static/logo.svg" />
			</Link>
			<Menu>
				<Link href="/">
					<MenuItem>My events</MenuItem>
				</Link>
				<MenuItem>Find events</MenuItem>
				<MenuItem
					onClick={() => {
						Cookie.remove('session')
						Router.replace('/login')
					}}
				>
					Signout
				</MenuItem>
			</Menu>
		</Wrapper>
	)
}
