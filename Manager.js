import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Renderitem from "./Component/Renderitem";
import Dialog from "./Component/Dialog";
const Manager = (props) => {
  const { navigation } = props;
  let data = props.route?.params.data || [];
  const [arr, setarr] = useState([...data]);
  const [isshow, setisshow] = useState(false);
  const [editID, seteditID] = useState(null);
  const [name, setname] = useState("");
  const [mota, setmota] = useState("");
  const [linkanh, setlinkanh] = useState("");
  const onDelete = (itemId) => {
    setarr(arr.filter((item) => item != itemId));
  };

  const onEdit = (id) => {
    setisshow(true);
    const item = arr.find((item) => item.id == id);

    seteditID(item.id);
    setname(item.name);
    setlinkanh(item.linkanh);
    setmota(item.mota);
  };

  return (
    <View style={[styles.contaner]}>
      <StatusBar hidden={true}></StatusBar>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>
        Họ tên : Lê Hồng Phúc
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>MSV: PH20309</Text>

      <View style={{ height: 20 }}></View>

      <View style={styles.nut}>
        <Button title="Thêm mới" onPress={() => setisshow(true)} />
      </View>

      <View style={{ height: 20 }} />

      <Modal
        statusBarTranslucent
        animationType="slide"
        visible={isshow}
        transparent={false}
      >
        <Dialog
          setisshow={setisshow}
          setarr={setarr}
          arr={arr}
          setname={setname}
          name={name}
          setmota={setmota}
          mota={mota}
          style={styles.input}
          setlinkanh={setlinkanh}
          linkanh={linkanh}
          editID={editID}
          seteditID={seteditID}
        />
      </Modal>
      {arr.length == 0 ? null : (
        <View
          style={{
            borderWidth: 2,
            borderColor: "#CC6600",
            width: "95%",
            marginTop: 20,
            borderRadius: 10,
            paddingTop: 10,
            paddingBottom: 10,
            paddingHorizontal: 5,
          }}
        >
          <FlatList
            data={arr}
            style={{ height:'74%'}}
            renderItem={({ item }) => (
              <Renderitem item={item} onDelete={onDelete} onEdit={onEdit} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default Manager;
const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  nut:{
    borderWidth: 2,
    width: 100,
    alignSelf: "center",
    backgroundColor: "#FF9966",
  }
});
