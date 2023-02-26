import { Button, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Login = () => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Enter Email or Mobile"
          keyboardType='default'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          secureTextEntry={true}
          value={password}
          placeholder="Enter Password"
          keyboardType="default"
        />
        <Pressable style={styles.button}>
            <Text style={styles.text}>Login</Text>
        </Pressable>
      </SafeAreaView>
    );
  };

export default Login

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
    login: {
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
    // scroll: {
    //     alignContent: 'center',
    //     alignItems: 'center'
    // },
});