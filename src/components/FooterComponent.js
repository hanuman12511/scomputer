import React from 'react'
import {Text,View,Image,StyleSheet,Dimensions} from 'react-native'
const W= Dimensions.get('window').width
const H= Dimensions.get('window').height
export default function FooterComponent(){
    return(
        <>
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        width:W,
        height:H*.07,
        backgroundColor:'red',
        position:'absolute',
        left:0,
        right:0,
        bottom:0
    }
})