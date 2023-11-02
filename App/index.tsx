import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows'
import Home from './screens/Home'
import { COLORS } from './assets/constants'

export default function App() {
  return (
    <>
        <StatusBar backgroundColor={COLORS.BACKGROUND} />
        <Home />
    </>
  )
}
