import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Screen0 from '../views/Screen0'
import Screen1 from '../views/Screen1'
import Screen2 from '../views/Screen2'
import Screen3 from '../views/Screen3'

const Drawer = createDrawerNavigator()

export default props => {
    return(
        <Drawer.Navigator initialRouteName="Screen3">
            <Drawer.Screen name="Screen0" component={Screen0}/>
            <Drawer.Screen name="Screen1" component={Screen1}/>
            <Drawer.Screen name="Screen2" component={Screen2}/>
            <Drawer.Screen name="Screen3" component={Screen3}/>
        </Drawer.Navigator>
)}