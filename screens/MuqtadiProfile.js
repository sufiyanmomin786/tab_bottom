import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

const MuqtadiProfile = () => {

  const [text, setText] = useState();
  const [Number, setNumber] = useState();
  return (
    <View style={styles.center}>
      <TextInput
        style={styles.input}
        placeholder='Registration No'
        autoCapitalize="none"
        placeholderTextColor='red'
        keyboardType={'numeric'}
        onChangeText={e => setNumber(e)}
      />
      <TextInput
        style={styles.input}
        placeholder='Name'
        autoCapitalize="none"
        placeholderTextColor='red'
        onChangeText={e => setText(e)}
      />
      <TextInput
        style={styles.input}
        placeholder='Email Id'
        autoCapitalize="none"
        placeholderTextColor='#0B0301'
        keyboardType={'email-address'}
        onChangeText={e => setText(e)}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone Number'
        autoCapitalize="none"
        placeholderTextColor='red'
        keyboardType={'numeric'}
        onChangeText={e => setNumber(e)}
      />
      <TextInput
        style={styles.input}
        placeholder='Address1'
        autoCapitalize="none"
        placeholderTextColor='#0B0301'
        onChangeText={e => setText(e)}
      />
      <TextInput
        style={styles.input}
        placeholder='Address2'
        autoCapitalize="none"
        placeholderTextColor='#0B0301'
        onChangeText={e => setText(e)}
      />
      <TextInput
        style={styles.input}
        placeholder='City'
        autoCapitalize="none"
        placeholderTextColor='red'
        onChangeText={e => setText(e)}
      />
      <TextInput
        style={styles.input}
        placeholder='PinCode'
        autoCapitalize="none"
        placeholderTextColor='red'
        keyboardType={'numeric'}
        maxLength={6}
        onChangeText={e => setNumber(e)}
      />

      <Button
        title="Complete Profile"
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
    backgroundColor: 'azure',
    // backgroundColor: '#FCCEC3',
    margin: 5,
    padding: 12,
    //color: 'white',
    borderRadius: 20,
    fontSize: 15,
    //fontWeight: '500',
  },
});

export default MuqtadiProfile;