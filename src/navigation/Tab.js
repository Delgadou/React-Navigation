import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Screen0 from '../views/Screen0'
import Screen1 from '../views/Screen1'
import Screen2 from '../views/Screen2'

const Tab = createBottomTabNavigator()

export default props => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue',
            tabBarLabelStyle: { fontSize: 30 }
        }}>
            <Tab.Screen name="Screen0" component={Screen0}/>
            <Tab.Screen name="Screen1" component={Screen1}/>
            <Tab.Screen name="Screen2" component={Screen2}/>
        </Tab.Navigator>
)}