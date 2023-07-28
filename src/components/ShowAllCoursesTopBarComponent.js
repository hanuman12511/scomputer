
import React from 'react'
import {Text, View,StyleSheet} from 'react-native'

export default function ShowAllCoursesTopBarComponent(){
    function coursestitle(){
        return<>
        <View style={styles.container}>
        {
            Array.from({length:5}).map(d=>(
                <View style={styles.course1}>
                <View style={styles.course}>
               
                </View>
                 <Text>Top Couesr</Text>
                 </View>
            ))
        }
        </View>
        </>
    }
    return(
        <>
        {coursestitle()}
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
       
    },
    course1:{
        width:60,
        marginLeft:10,
       justifyContent:'center',
       alignItems:'center'
    },
    course:{
        width:50,
        height:50,
        backgroundColor:'gray',
        borderRadius:50,
        margin:8,
    }
})