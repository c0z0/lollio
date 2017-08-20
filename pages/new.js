import React from 'react'

import EventEditor from '../components/EventEditor'
import withData from '../apollo-utils/withData.js'

function New() {
	return <EventEditor page />
}

export default withData(New)
