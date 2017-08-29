import { gql } from 'react-apollo'

export const QuerySchema = gql`
  {
    user {
      email
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
          email
        }
        managingUser {
          email
        }
      }
    }
  }
`
