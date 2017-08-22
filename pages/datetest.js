import React from 'react'
import moment from 'moment'
import DatePicker from '../components/DatePicker'

export default () => <DatePicker onChange={d => alert(moment(d).calendar())} />
