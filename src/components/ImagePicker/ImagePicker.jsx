import React, { useState } from "react";

import { View, Image, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import * as ImagePickerExpo from "expo-image-picker";

const ImagePicker = ({setFormData, formData, imageGoogle}) => {  
  const [image, setImage] = useState(
    imageGoogle ? imageGoogle :
    "https://www.seekpng.com/png/full/847-8474751_download-empty-profile.png"
  );

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
        setFormData({ ...formData, image: data.url || imageGoogle});
      });
  };

  return (
    <View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <IconButton
          style={styles.btn}
          icon="camera-burst"
          color="white"
          size={40}
          onPress={pickImage}
        />
        <Image
          style={{
            alignSelf: "center",
            height: 200,
            width: 200,
            borderRadius: 100,
          }}
          source={{ uri: image }}
        />
        <IconButton
          style={styles.btn}
          icon="camera"
          color="white"
          size={40}
          onPress={pickFromCamera}
        />
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
    width: 60,
    height: 60,
    borderRadius: 60,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

export default ImagePicker;
