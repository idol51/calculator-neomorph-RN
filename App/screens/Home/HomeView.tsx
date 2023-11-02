import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Button } from '../../components/button'
import Keypad from '../../components/keypad'
import Display from '../../components/display'
import { handleKeypadPress } from './utils'

export default function HomeView() {
    const gap = 16;

    const [ operands, setOperands ] = useState<any>([0]);

    useEffect(() => {
        console.log(operands[0]);
    }, [operands])

  return (
    <View style={[styles.body, { gap, padding: gap }]}>
        <Display gap={gap} value={operands[0]} />
        <Keypad gap={gap} onPress={(key) => handleKeypadPress(key, operands, setOperands)} />
    </View>
  )
}
