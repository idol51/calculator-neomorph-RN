import React from 'react'
import { COLORS } from '../assets/constants'
import { NeomorphFlex } from 'react-native-neomorph-shadows'
import { Dimensions, Text } from 'react-native'
import { styles } from './styles';

const windowWidth = Dimensions.get("window").width;

export default function Display({ gap, value }: { gap: number, value: any }) {
  return (
    <NeomorphFlex
        inner
        style={{
            shadowRadius: 10,
            borderRadius: 25,
            backgroundColor: COLORS.BACKGROUND,
            width: windowWidth - 2*gap,
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: 24
        }}
    >
        <Text style={{ fontSize: 48, fontFamily: "Orbitron-Medium" }}>{value}</Text>
    </NeomorphFlex>
  )
}
