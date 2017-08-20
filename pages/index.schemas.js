import { gql } from 'react-apollo'

export const QuerySchema = gql`
	{
		user {
			events {
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
			}
		}
	}
`
