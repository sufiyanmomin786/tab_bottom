import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

const ActivateUser = ({ navigation }) => {
  const [text, setText] = useState();


  return (
    <View style={styles.center}>
      <TextInput
        style={styles.input}
        placeholder='Enter Activation Code'
        autoCapitalize="none"
        placeholderTextColor='#0B0301'
        value={text}
        onChangeText={e => setText(e)}
      />

      <Button
        title="Activate"
        onPress={() => navigation.navigate("Muqtadi Profile")}
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
    //backgroundColor: '#FCCEC3',
    margin: 5,
    padding: 12,
    //color: 'white',
    borderRadius: 20,
    fontSize: 15,
    //fontWeight: '500',
  },
});

export default ActivateUser;