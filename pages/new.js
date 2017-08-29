import React from 'react'
import styled from 'styled-components'

import EventEditor from '../components/EventEditor'
import withData from '../apollo-utils/withData.js'

const Wrapper = styled.div`padding: 64px 128px;`

function New() {
  return (
    <Wrapper>
      <EventEditor page />
    </Wrapper>
  )
}

export default withData(New)
