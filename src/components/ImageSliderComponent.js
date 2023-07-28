import React from 'react'
import {Text,Image,StyleSheet,Dimensions, View} from 'react-native'
import { ImageSlider } from "react-native-image-slider-banner";
import image1 from '../images/image3.jpg'
const W =Dimensions.get('window').width
const H =Dimensions.get('window').height
export default function ImageSliderComponent(){
const imagearr=[
{img:require('../images/image3.jpg')},    
{img:require('../images/image2.jpg')},    
{img:require('../images/image1.jpg')},    
]
  
return(
        <> 
        <View style={styles.container}>
            <ImageSlider 
                data={imagearr}
                
                localImg
                preview={false}
                autoPlay={true}
                onItemChanged={(item) => {}/* console.log("item", item) */}
                closeIconColor="#fff"
                onClick={(item, index) => { alert('hello' + index) }}
                caroselImageStyle={{ resizeMode: 'cover' ,width:W,height:H*.2,marginTop:4}}
                />
        </View> 
        {/* <ImageCarousel 
    data={[
        { img: require('../../assets/images/slider1.png') },
        { img: require('../../assets/images/slider2.png') },
        { img: require('../../assets/images/slider1.png') }
    ]}
    localImg
    showHeader
    preview={false}
    headerLeftComponent={<Icon name="arrow-back" color="#fff" size={34} onPress={() => Alert.alert("alert")} />}
    headerCenterComponent={<Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Header</Text>}
    headerStyle={{ padding: 10, backgroundColor: 'rgba(0,0,0, 0.6)', }}
    onItemChanged={(item) => console.log("item", item)}
    caroselImageStyle={{ resizeMode: 'cover' }}
    onClick={(item, index) => { alert('hello' + index) }}
    >
            <View style={{alignItems: 'center'}}>
                <Text style={{color: '#000', fontSize: 24, fontWeight: 'bold'}}>Title</Text>
            </View>
    </ImageCarousel> */}
        {/* <View style={styles.container}>
            <Image source={image1} style={styles.images} />
        </View> */}
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:1,
        width:W,
        height:H*.21,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    images:{
        width:W,
        height:H*.28,
        resizeMode:"cover",
    }


})