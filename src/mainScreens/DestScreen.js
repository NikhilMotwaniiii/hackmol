import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, {useRef, useContext, useState} from 'react'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Avatar, Icon } from '@rneui/base'
import { colors ,parameters } from '../globalComp/appStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { OriginContext, DestinationContext } from '../contexts/AllContexts';
const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

const DestScreen = (navigation) => {

    
    const {dispatchOrigin} = useContext(OriginContext)
    const {dispatchDestination} = useContext(DestinationContext)

    const firstInput = useRef(4);
    const secondInput = useRef(5);
    
    const[destination,setDestination] = useState(false)

    navigator.geolocation = require('react-native-geolocation-service');

    return (
        <>
            <View style = {styles.view2}>
                <View style ={styles.view1}> 
                    <MaterialCommunityIcons
                        name ="arrow-left"
                        color ={colors.grey1}
                        size ={32}
                        onPress ={()=>navigation.goBack()} 
                    />
                </View>
                <TouchableOpacity>
                    <View style ={{top:25,alignItems:"center"}}>
                        <View style ={styles.view3}>
                            <Avatar 
                                rounded
                                avatarStyle ={{}}
                                size ={30}
                                source = {require('../../assets/profilePic.jpg')}
                                />
                            <Text style ={{marginLeft:5}}>For Someone</Text>
                            <MaterialCommunityIcons
                                name ="chevron-down"
                                color ={colors.grey1}
                                size ={26}
                                />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            {destination === false &&
            <GooglePlacesAutocomplete 
                nearbyPlacesAPI = 'GooglePlacesSearch'
                placeholder ="From..."
                listViewDisplayed = "auto"
                debounce ={400}
                currentLocation ={true}
                ref ={firstInput}
                minLength ={2}
                enablePoweredByContainer = {false}
                fetchDetails ={true}
                autoFocus ={true}
                styles = {autoComplete}
                query ={{
                    key:'AIzaSyCzV_NZk6lepuKdCzrrj9kPn4uRnkBI_ro',
                    language:"en"
                }}

                onPress= {(data,details = null)=>{
                    dispatchOrigin({type:"ADD_ORIGIN",payload:{
                        latitude:details.geometry.location.lat,
                        longitude:details.geometry.location.lng,
                        address:details.formatted_address,
                        name:details.name
                    }})

                    setDestination(true)
                }}

            />
            }
            {destination === true &&
            <GooglePlacesAutocomplete 
                nearbyPlacesAPI = 'GooglePlacesSearch'
                placeholder ="Going to..."
                listViewDisplayed = "auto"
                debounce ={400}
                currentLocation ={true}
                ref ={secondInput}
                minLength ={2}
                enablePoweredByContainer = {false}
                fetchDetails ={true}
                autoFocus ={true}
                styles = {autoComplete}
                query ={{
                    key:'AIzaSyCzV_NZk6lepuKdCzrrj9kPn4uRnkBI_ro',
                    language:"en"
                }}

                onPress= {(data,details = null)=>{
                    dispatchDestination({type:"ADD_DESTINATION",payload:{
                        latitude:details.geometry.location.lat,
                        longitude:details.geometry.location.lng,
                        address:details.formatted_address,
                        name:details.name
                    }})

                    navigation.navigate("EmerScreen",{state:0})
                }}

            />
            }
        </>
    )
}

export default DestScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:parameters.statusBarHeight
    },
    
    view1:{
      position:"absolute",
      top:25,
      left:12,
      backgroundColor:colors.white,
      height:40,
      width:40,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center",
      marginTop:2, 
      zIndex: 10
      
    },
    
    view3:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:2,   
      marginBottom:10,
      backgroundColor: colors.white,
      height:30,
      zIndex: 10
    },
    
    view2:{backgroundColor:colors.white,
          zIndex:4,
          paddingBottom:10,
          
        },
    
        view24:{
          flexDirection:"row",
          justifyContent:"space-between",
         marginVertical:15,
          paddingHorizontal:20   
      }, 
      
      view25:{
          flexDirection:'row',
         alignItems:"baseline"
      },
      
      flatlist:{
          marginTop:20,
          zIndex:17,
          elevation:8
      },    
    
    });

    const autoComplete = {
    
        textInput:{
            backgroundColor: colors.grey6,
            height: 50,
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontSize: 15,
            flex: 1,
            borderWidth:1,
            marginHorizontal:15,
        },
        container: {
           paddingTop:20,
          flex: 1,
          backgroundColor:colors.white
              },
      
        textInputContainer: {
          flexDirection: 'row',
        },
  
  }