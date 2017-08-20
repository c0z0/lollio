import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px #ddd solid;
	background: white;
	align-items: center;
`
const Title = styled.h3`
	color: #ed174c;
	padding-left: 24px;
	padding-bottom: 0px;
`

const Img = styled.img`height: 96px;`

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
			<Img src="https://rtfm.lolacloud.com/download/attachments/3055373/lola-tech-standard.png?api=v2" />
			<Menu>
				<MenuItem>
					<Link href="/">My events</Link>
				</MenuItem>
				<MenuItem>Find events</MenuItem>
			</Menu>
		</Wrapper>
	)
}
