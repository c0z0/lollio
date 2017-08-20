import { gql } from 'react-apollo'

export const QuerySchema = gql`
	{
		user {
			username
			events: eventsManaged {
				title
				id
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
	}
`
