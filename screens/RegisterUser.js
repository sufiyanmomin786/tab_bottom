import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const RegisterUser = ({ navigation }) => {

  const [text, setText] = useState();
  const [Number, setNumber] = useState();
  return (
    <View style={styles.center}>

      <TextInput
        style={styles.input}
        placeholder='Enter your Email Address to use For M-Radio'
        autoCapitalize="none"
        placeholderTextColor='#0B0301'
        keyboardType={'email-address'}
        value={text}
        onChangeText={e => setText(e)}

      />

      <Text style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25
      }}>OR</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your Mobile Number to use for M-Radio'
        autoCapitalize="none"
        placeholderTextColor='red'
        keyboardType={'numeric'}
        value={Number}
        onChangeText={e => setNumber(e)}
        maxLength={10}

      />

      <Button

        title="Register User"
        onPress={() => navigation.navigate("Activate User")}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    width: 350,
    height: 60,
    //backgroundColor: '#FCCEC3',
    backgroundColor: 'azure',
    margin: 5,
    padding: 12,
    //color: 'white',
    borderRadius: 20,
    fontSize: 15,
    //fontWeight: '500',
  },


});

export default RegisterUser;