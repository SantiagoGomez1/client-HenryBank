import React, { useState } from "react";

import { View, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMyUser } from "../../redux/actions";
import { IconButton } from "react-native-paper";
import axios from "axios";

import * as ImagePickerExpo from "expo-image-picker";

const UpdateImage = () => {
  const token = useSelector((state) => state.logIn.token);
  const myUser = useSelector((state) => state.myUser);

  const [image, setImage] = useState(myUser.image);

  const pickImage = async () => {
    let result = await ImagePickerExpo.launchImageLibraryAsync({
      mediaTypes: ImagePickerExpo.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      let newFile = {
        uri: result.uri,
        type: `test/${result.uri.split(".")[1]}`,
        name: `test.${result.uri.split(".")[1]}`,
      };
      handleUpload(newFile);
    }
  };

  const pickFromCamera = async () => {
    let pickerResult = await ImagePickerExpo.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!pickerResult.cancelled) {
      let newFile = {
        uri: pickerResult.uri,
        type: `test/${pickerResult.uri.split(".")[1]}`,
        name: `test.${pickerResult.uri.split(".")[1]}`,
      };
      handleUpload(newFile);
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "HenryBank");
    data.append("cloud_name", "dya1hlfht");

    fetch("https://api.cloudinary.com/v1_1/dya1hlfht/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
        update(data.url);
      });
  };

  const update = async (image) => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const img = {
      image: image,
    };
    const response = await axios.put(
      "https://h-bank.herokuapp.com/user/profileImage",
      img,
      config
    );
  };

  return (
    <View>
      <View
        style={{ flexDirection: "row", alignSelf: "center", paddingLeft: 50 }}
      >
        <Image
          style={{
            alignSelf: "center",
            height: 200,
            width: 200,
            borderRadius: 100,
          }}
          source={{ uri: image }}
        />
        <View style={{ justifyContent: "space-evenly" }}>
          <IconButton
            style={styles.btn}
            icon="camera-burst"
            color="white"
            size={20}
            onPress={pickImage}
          />
          <IconButton
            style={styles.btn}
            icon="camera"
            color="white"
            size={20}
            onPress={pickFromCamera}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});

export default UpdateImage;
