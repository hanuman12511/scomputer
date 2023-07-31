import React, { useState } from 'react'
import {Text,View,StyleSheet,Dimensions} from 'react-native'
import Input from '../components/Input'
const W=Dimensions.get('window').width
const H=Dimensions.get('window').height
export default function Login(){
    const[name,setName] = useState('')

    function onchange(data){
            console.log("data login=",data.value);
    }
    return(
        <View style={styles.container}>
            <Input placeholder="enter username" onchange = {d=>onchange(d)}/>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:W,
        height:H,
        backgroundColor:'yellow'
    }
})