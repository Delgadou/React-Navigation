import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Screen0 from '../views/Screen0'
import Screen1 from '../views/Screen1'
import Screen2 from '../views/Screen2'

const Stack = createStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="Tela0">
        <Stack.Screen name="Tela0" options={{title: 'Informações iniciais' }}component={Screen0}/>
        <Stack.Screen name="Tela1" component={Screen1}/>
        <Stack.Screen name="Tela2" component={Screen2}/>
    </Stack.Navigator>
)