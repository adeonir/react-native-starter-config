import '~/config/ReactotronConfig'
import '~/config/DevToolsConfig'

import React from 'react'
import { StyleSheet, View } from 'react-native'

import Hello from '~/components/Hello'

const bgColor = '#f5fcff'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

const App = () => (
  <View style={styles.container}>
    <Hello style={styles.welcome} text='Welcome to React Native!' />
  </View>
)

export default App
