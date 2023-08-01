import React, { useEffect, useState } from 'react'
import {Text,View,StyleSheet,Dimensions,Button} from 'react-native'
import Input from '../components/Input'
import PageLoader from '../components/PageLoader'
const W=Dimensions.get('window').width
const H=Dimensions.get('window').height
export default function Login(){
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[loader,setloader] = useState(false)
    useEffect(()=>{
        setloader(false)
    },[])

    function userName(data){
         setName(data)
    }
    
    function userEmail(data){
        setEmail(data)
}
function loginuser(){

    console.log(name);
    console.log(email);
    setloader(true)
}
    return(
        <>
        { loader?
        <PageLoader/>        
        :
        <View style={styles.container}>
            <Input placeholder="enter username" onchange = {d=>userName(d)}/>
            <Input placeholder="enter useremail" onchange = {d=>userEmail(d)}/>
            <Button  onPress={loginuser} title='login'/>
        </View>
    }
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        width:W,
        height:H,
        backgroundColor:'yellow'
    }
})