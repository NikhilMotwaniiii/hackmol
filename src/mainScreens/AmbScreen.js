import { StyleSheet, Text, View, Dimensions, StatusBar, ScrollView, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState,useRef,useEffect } from 'react'
import { colors,parameters } from '../globalComp/appStyles'

import { filterData, ambsAround } from '../globalComp/dummyData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapView,{ PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { mapLayout } from '../globalComp/mapLayout';
import * as Location from 'expo-location';

import { Directions } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker'

// const [date, setDate] = useState(new Date())

const SCREEN_WIDTH = Dimensions.get("window").width



const AmbScreen = ({navigation}) => {

      
  const [latlng, setLatlng] = useState({})

  const checkPermission = async()=>{
   
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    
    if(hasPermission.status === 'granted'){
      const permission = await askPermission();
      // console.log(permission)
      return permission;
    }
    return true;
  };

  const askPermission = async()=>{
    const permission = await Location.requestForegroundPermissionsAsync()
    return permission.status === 'granted';
  };

  const getLocation = async()=>{
    try{
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if(!granted) return;
      const {
        coords:{latitude,longitude},
      } = await Location.getCurrentPositionAsync();
      setLatlng({latitude:latitude, longitude:longitude})
    }catch(err){

    }
  }

  const _map = useRef(1);
  

  useEffect(()=>{
           checkPermission();
           getLocation()
          //  console.log(latlng)
  ,[]})

  return (

    <View style={styles.container}>
       <View style={styles.headComp}>
          <View style={styles.icon1}>
            <MaterialCommunityIcons name="menu" size={40} color={colors.black}/>
          </View>
          <View style={{paddingRight:12}}>
              <Image resizeMode='contain' style={styles.image1} source={require("../../assets/logos/black-logo.png")}/>
          </View>
       </View>
       <ScrollView bounces={false}>
        <View style={styles.home}>
             <Text style={styles.text1}>Is there an emergency?</Text>
             <View style={styles.view1}>
                <View style={styles.view8}>
                    <Text style={styles.text2}>Because every second counts !!</Text>
                     <TouchableOpacity onPress={()=>{navigation.navigate("EmerScreen",{state:0})}}>
                       <View style={styles.button1}>
                         <Text style={styles.button1Text}>Declare Emergency!</Text>
                       </View>
                     </TouchableOpacity>
                </View>
             </View>
        </View>
        
             <View style={styles.view3}>
                <Text style={styles.text3}>Where to?</Text>
                
                <View style={styles.view4}>
                   <MaterialCommunityIcons name="clock-time-seven" size={26} color={colors.grey1}/>
                   
                    <Text style={{color:colors.grey1,fontSize:18,marginLeft:10}}>Recent</Text>
                  
                   <MaterialCommunityIcons name="chevron-down" size={26} color={colors.grey1}/>

                </View>
             </View>
             <View style={styles.view5}>
                 <View style={styles.view6}>
                    <View style={styles.view7}>
                      <MaterialCommunityIcons name="map-marker" size={22} color={colors.black}/>
                    </View>
                    <View>
                    <Text style={{fontSize:18,color:colors.black}}>401 Lakshay Rd</Text>
                    <Text style={{color:colors.grey3}}>Devgram Complex, Mirzapur</Text>
                    </View>
                 </View>
                 <View>
                    <MaterialCommunityIcons name="chevron-right" size={22} color={colors.grey}/>
                 </View>
             </View>
             <View style={{...styles.view5,borderBottomWidth:0}}>
                 <View style={styles.view6}>
                    <View style={styles.view7}>
                      <MaterialCommunityIcons name="map-marker" size={22} color={colors.black}/>
                    </View>
                    <View>
                    <Text style={{fontSize:18,color:colors.black}}>98 Vasna Rd</Text>
                    <Text style={{color:colors.grey3}}>Kadi lake, Bilalnagar</Text>
                    </View>
                 </View>
                 <View>
                    <MaterialCommunityIcons name="chevron-right" size={22} color={colors.grey}/>
                 </View>
             </View>
             <Text style={styles.text4}>Around you</Text>
             <View style={{alignItems:"center",justifyContent:"center"}}>
                 <MapView
                 ref={_map} 
                 provider={PROVIDER_GOOGLE} style={styles.map} customMapStyle={mapLayout}
                 showsUserLocation={true} followsUserLocation={true} initialRegion={{...ambsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}} >
                  
                  {
                    
                    ambsAround.map((amb,index)=>
                      <Marker coordinate={amb} key={index.toString()} >
                          <Image  source={require('../../assets/amb-icon3.png')} style={styles.carsAround} resizeMode="contain"/>
                      </Marker>
                    )
                  }


                 </MapView>
             </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor={colors.darkBlue} translucent={true}></StatusBar>
    </View>


  )
}

export default AmbScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
       paddingBottom:30,
       paddingTop: parameters.statusBarHeight
      },
    
      headComp:{
        backgroundColor:colors.blue,
        flexDirection:'row',
        height: parameters.headerHeight,
        alignItems:"flex-start",
        justifyContent:"space-between"
      },
      image1:{
       height: 51,
       width:70
      },
      image2:{
        height:60,width:60,
        paddingLeft:20
      },
      imagebg:{
        flex: 1,
        justifyContent: 'center',
      },
    
      home:{
        backgroundColor:colors.blue,
        paddingLeft:20,
        paddingBottom: 25
      },
    
      text1:{
        color:colors.black,
        fontSize:21,
        fontWeight:'700',
        paddingBottom:0,
        paddingTop:20
      },
      text2:{
        color:colors.black,
        fontSize:16,
        fontWeight:'500',
      },
      view1:{
        flexDirection:"row",
        flex:1,
        paddingTop:30
      },
      button1:{
        height:50,
        width:200,
        backgroundColor:colors.red,
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
      },
      
      button1Text:{
       color:colors.white,
       fontSize:15,
       marginTop:-2,
       fontWeight:'700',
      
      },
      card:{
       alignItems:"center",
       margin:SCREEN_WIDTH/22
      
      },
      
      view2:{marginBottom:5,
            borderRadius:15,
            backgroundColor:colors.grey6
          },
      
          title:{
            color:colors.black,
            fontSize:16
          },
      view3:{flexDirection:"row",
               marginTop :5,
               height:50,
               backgroundColor:colors.grey6,
               alignItems:"center",
               justifyContent:"space-between",
              marginHorizontal:15,
              
               },
      text3:{marginLeft:15,
              fontSize:20,
              color:colors.black
        },
      
      view4:{ flexDirection:"row",
              alignItems:"center",
              marginRight:15,
              backgroundColor:"white",
              paddingHorizontal:10,
              paddingVertical:2,
              borderRadius:20
              },
      
      view5:{ flexDirection:"row",
      alignItems:"center",
      backgroundColor:"white",
      paddingVertical:25,
      justifyContent:"space-between",
      marginHorizontal:15,
      borderBottomColor:colors.grey4,
      borderBottomWidth:1,
      flex:1
      },
      
      view6:{
      
      
      alignItems:"center",
      flex:5,
      flexDirection:"row"
      },
      view7:{
      backgroundColor:colors.grey6,
      height:40,
      width:40,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginRight:20
      
      },
      
      map:{
         
      height: 350,
       marginVertical: 0,
       width:SCREEN_WIDTH*0.92
      },
      
      text4:{ fontSize:20,
            color:colors.black,
            marginLeft:20,
            marginBottom:20
          },
      
      icon1:  {marginLeft:10,
             marginTop:5
            },
    
      view8: {flex:4,
            marginTop:-25
          } ,
      carsAround: {
      width: 30,
      height: 15,
    
      }, 
      
      location: {
        width: 16,
        height: 16,
        borderRadius:8,
        backgroundColor:colors.blue,
        alignItems:"center",
        justifyContent:"center"
        
        }, 
        
      view9:{width:4,
      height:4,
      borderRadius:2,
      backgroundColor:"white"
      }

})