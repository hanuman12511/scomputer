
import React from 'react'
import {Text, View,StyleSheet,Image, ScrollView} from 'react-native'

export default function ShowAllCoursesTopBarComponent(){
    function coursestitle(){
        return<>
        <View >
            <ScrollView style={styles.container}  horizontal={true}>
        {
            Array.from({length:8}).map((d,index)=>(
                <View style={styles.courseView}>
                <View style={styles.course}>
                    <Image  source={require('../images/icons/bestsales.png')} style={styles.image}/>
                </View>
                 <Text>Top Couesr{index}</Text>
                 </View>

            ))
        }
        </ScrollView>
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
    courseView:{
        width:60,
       justifyContent:'center',
       alignItems:'center',
       margin:8,
    },
    course:{
        width:50,
        height:50,
        backgroundColor:'gray',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
        
    },
    image:{
        width:"80%",
        height:"80%"
    }
})