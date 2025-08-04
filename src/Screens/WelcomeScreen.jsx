import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>To-Do App</Text>
      <Pressable style={styles.btn} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.btnText}>Make a List</Text>
      </Pressable>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    text: {
        fontSize: 30,
        fontWeight: '500',
        borderStyle: 'dashed',
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
        marginVertical: 30,
        backgroundColor: 'white'
    },
    btn: {
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    btnText: {
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontWeight: '500'
    }
})