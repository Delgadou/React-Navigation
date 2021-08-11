import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => {
  return(
    <View style={{flex: 1,}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.back
                ? <Button 
                    title='Voltar'
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                    />
                : false
            }
            {props.next
                ? <Button 
                    title='Avançar'
                    onPress={() => {
                        props.navigation.push(props.next)}}/>
                : false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}

        </View>
    </View>
)}