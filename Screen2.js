import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Screen2 = (props) => {
  let name = props.route.params.name;
  let mssv = props.route.params.mssv;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{mssv}</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});
