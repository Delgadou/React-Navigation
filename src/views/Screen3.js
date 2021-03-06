import React from 'react'
import CentralText from '../components/CentralText'
import { View, Button } from 'react-native'

export default props =>{
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button
                    title='Abrir'
                    onPress={() => { 
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                        }, 3000)
                }}
                />
            </View>
            <View style={{flex:1}}>
                <CentralText backgroundColor='#33fa72' textColor='#000'>
                    Tela 3
                </CentralText>
            </View>
        </View>
        
)}