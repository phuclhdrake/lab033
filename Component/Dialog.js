import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

const Dialog = (props) => {
  const {
    style,
    setarr,
    arr,
    setisshow,
    name,
    mota,
    setname,
    setmota,
    setlinkanh,
    linkanh,
    editID,
    seteditID,
  } = props;
  let input = style;

  function logger() {
    Alert.alert(
      "Thông báo",
      "link ảnh bị lỗi sẽ đổi thành ảnh mắc định !",
      [{ text: "OK", onPress: () => null }]
    );
  }
  let condition;
  function SaveEdit() {
    if (editID) {
      let arr2 = [...arr];

      arr2.map((item) => {
        if (item.id == editID) {
          item.name = name;
          item.mota = mota;
          item.linkanh = linkanh;
          seteditID(null);
        }
        return item;
      });
      setarr(arr2);
      setisshow(false);
    } else {
      setarr([
        ...arr,
        {
          id: arr[arr.length - 1]?.id + 1 || 1,

          name: name,
          mota: mota,
          linkanh: linkanh,
          linkvalid: condition,
        },
      ]);
    }
  }

  const checklinkanh = async () => {
    return (await fetch(linkanh)).status == 404;
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>

      <TextInput
        style={input}
        onChangeText={(text) => setname(text)}
        value={name}
        placeholder="Nhập tên"
      />
      <TextInput
        style={input}
        value={mota}
        onChangeText={(text) => setmota(text)}
        placeholder="Nhập mô tả"
      />
      <TextInput
        style={input}
        value={linkanh}
        onChangeText={(text) => setlinkanh(text)}
        placeholder="Dán link ảnh"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <TouchableOpacity>
          <Text
            style={styles.button}
            onPress={() => {
              seteditID(null);
              setisshow(false);
            }}
          >
            Huỷ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            try {
              condition = await checklinkanh();
              console.log(condition);
              condition ? logger() : null;
            } catch (error) {
              logger();
            }
            SaveEdit();
          }}
        >
          <Text style={styles.button}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  button: {
    backgroundColor: "#FF0000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "600",
    fontSize: 17,
    borderRadius: 10,
  },
});
