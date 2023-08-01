import React,{useState} from 'react'
import {Text,TextInput,StyleSheet,Dimensions,View} from 'react-native'
const W = Dimensions.get('window').width
const H = Dimensions.get('window').height
export default function Input(props){
    const[data,setData] = useState('')
    return(
        <View style={styles.container}>
            <TextInput placeholder={props.placeholder} value={data} onChangeText={d=>setData(d)} onChange={props.onchange(data)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor:'white',
        margin:10,
        borderRadius:20
    }
})