import { Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
// import { dropdown } from 'react-native-material-dropdown-v2-fixed'

const Signup = () => {
    const [mobile, onChangeMobile] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [name, onChangeName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [conPassword, onChangeConPassword] = React.useState('');
    const user = ["Traffic Police", "Ambulance"];
  
  const data = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
  ]
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.Signup}>Sign Up</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Enter Name"
          keyboardType='default'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMobile}
          value={mobile}
          placeholder="Enter Mobile"
          keyboardType='number-pad'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Enter Email"
          keyboardType='email-address'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          placeholder="Enter Password"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeConPassword}
          value={conPassword}
          secureTextEntry={true}
          placeholder="Confirm Password"
          keyboardType="default"
        />

        <Pressable style={styles.button}>
            <Text style={styles.text}>Sign Up</Text>
        </Pressable>
      </SafeAreaView>
    );
  };

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
        height: 40,
        width: 300,
        borderWidth: 1,
        padding: 10,
        margin: 12,
    },
    Signup: {
        fontSize: 50,
        marginBottom: 30,
    },
    button: {
        marginVertical: 30,
        borderWidth: 1,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});