# react-native-testid
A convenient way to set test id for React-Native components

## Usage
```js
import React from 'react'
import { View, Text } from 'react-native'
import testID from 'react-native-testid'

function SuperComponent({ testId }) {
  return (
    <View {...testID(testId)}>
      <Text>My Super Component</Text>
    </View>
  )
}
```
