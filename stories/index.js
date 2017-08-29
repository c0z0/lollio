import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from '../components/Input'

storiesOf('Input', module).add('simple', () => <Input type="text" />)
