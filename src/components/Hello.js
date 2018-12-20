import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const Hello = ({ text }) => <Text>{text}</Text>

Hello.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Hello
