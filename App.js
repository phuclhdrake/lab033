import { Button, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Manager from "./Manager";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./Screen2";

const Stack = createNativeStackNavigator();

const App = () => {
  const Home = (props) => {
    let data = [
      {
        id: 1,
        name: "cacem2k4",
        mota: "đi bodoi cũng nhàn",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 2,
        name: "cacem2k4",
        mota: "đi bodoi cũng nhàn",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 3,
        name: "cacem2k4",
        mota: "đi bodoi cũng nhàn",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 4,
        name: "cacem2k4",
        mota: "đi bodoi cũng nhàn",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 5,
        name: "cacem2k4",
        mota: "đi bodoi cũng nhàn",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 6,
        name: "cacem2k4",
        mota: "đi bodoi cũng nhàn",
        linkanh: "",
        linkvalid: false,
      },
    ];

    return (
      <View style={{ marginTop: 20, flex: 1 }}>
        <Image
          source={{
            uri: "https://images2.thanhnien.vn/528068263637045248/2023/2/6/dung-4-16756565278081366994909.jpg",
          }}
          style={{
            borderWidth: 2,
            width: 200,
            height: 200,
            alignSelf: "center",
            marginVertical: 10,
          }}
        />
        <View style={{ height: 20 }}></View>
        <View style={styles.nut}>
        <Button 
          title="Manager"
          onPress={() =>
            props.navigation.navigate("manager", {
              data: [...data],
            })
          }
        />
        </View>
        <View style={{ height: 20 }}></View>
        <View style={styles.nut}>
        <Button
          title="About"
          onPress={() =>
            props.navigation.navigate("about", {
              name: "Lê Hồng Phúc",
              mssv: "PH20309",
            })
          }
        />
        </View>
        <View></View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar hidden={false} />
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="manager" component={Manager} />
        <Stack.Screen name="about" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  nut:{
    borderWidth: 2,
    width: 100,
    alignSelf: "center",
    backgroundColor: "#FF9966",
  }
});
