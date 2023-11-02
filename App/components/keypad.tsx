import React from 'react'
import { Button } from './button'
import { COLORS } from '../assets/constants'
import { Dimensions, Text, View } from 'react-native'
import { styles } from './styles';

const windowWidth = Dimensions.get("window").width;

export interface IKeypadProps {
    gap: number,
    onPress: ([any]: string) => any
}

export default function Keypad({ gap, onPress }: IKeypadProps) {
  return (
    <View style={{ gap }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.PRIMARY}>
                AC
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.PRIMARY}>
                C
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.PRIMARY}>
                %
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.PRIMARY}>
                x
            </Button>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                7
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                8
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                9
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.PRIMARY}>
                /
            </Button>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                4
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                5
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                6
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.PRIMARY}>
                -
            </Button>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                1
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                2
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                3
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.PRIMARY}>
                +
            </Button>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Button onPress={onPress} width={(windowWidth/2) - gap*3/2} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                0
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.BACKGROUND}>
                .
            </Button>
            <Button onPress={onPress} width={(windowWidth/4) - gap*5/4} height={(windowWidth/4) - gap*5/4} color={COLORS.PRIMARY}>
                =
            </Button>
        </View>
    </View>
  )
}
