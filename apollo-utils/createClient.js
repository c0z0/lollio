import { ApolloClient, createNetworkInterface } from 'react-apollo'

let client = new ApolloClient({
	networkInterface: createNetworkInterface({
          uri: 'https://api.lollio.tech/graphql' // Server URL (must be absolute)
	})
})

// if (global.client) client = global.client
// else global.client = client

export default client
