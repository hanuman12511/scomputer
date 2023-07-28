import React from 'react'
import {Text, View,StyleSheet,Dimensions,Image} from 'react-native'
import AutoTypingText from 'react-native-auto-typing-text';
const W =Dimensions.get('window').width
const H =Dimensions.get('window').height
export default function SearchComponent(){
    return(
        <View style={styles.container}>
            <View style={styles.input_view}>
                <Image source={require('../images/icons/search.png')} style={styles.search}/>
                <AutoTypingText
                    text={`Enter Search text...`}
                    charMovingTime={80}
                    delay={0}
                    style={{
                        color: 'rgba(0,0,0,0.7)',
                        backgroundColor: 'rgba(0,0,0,0)',
                        }}
                    onComplete={() => { console.log('done'); }}
                    />
                <Image source={require('../images/icons/mic.png')} style={styles.mic}/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:W,
        height:H*.07,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#87CEFA'
    },
    input_view:{
        width:W*.95,
        height:H*.05,
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:25,
        flexDirection:'row',
        alignItems:'center'

    },
    search:{
        width:W*.06,
        height:H*.03,
        marginLeft:10
    },
    mic:{
        width:W*.04,
        height:H*.03,
        marginRight:10,
      
    },
    text:{
        flex:1,
        padding:9,
        marginLeft:5,
        borderRightWidth:1,
        marginRight:10,
       borderColor:'lightgray'
    }
    
   
})