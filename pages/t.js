import React from 'react'
import Link from 'next/link'

import withData from '../apollo-utils/withData.js'

export default withData(() => <Link href="/">home</Link>)
