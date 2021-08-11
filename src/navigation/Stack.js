import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Screen0 from '../views/Screen0'
import Screen1 from '../views/Screen1'
import Screen2 from '../views/Screen2'
import StepStack from '../components/StepStack'

const Stack = createStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="Tela0">
        <Stack.Screen name="Tela0" options={{title: 'Informações iniciais' }}>
            {props => (
                <StepStack {...props} next="Screen1">
                    <Screen0/>
                </StepStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="Screen1" >
            {props => (
                <StepStack {...props} back next="Screen2">
                    <Screen1/>
                </StepStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="Screen2">
            {props => (
                <StepStack {...props} back next="Screen2">
                    <Screen2/>
                </StepStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)