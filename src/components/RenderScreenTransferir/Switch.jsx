import React from "react";

import SwitchSelector from "react-native-switch-selector";

import img from "../../imgs/friends1.png";

const Switch = ({ setRender }) => {
  const handleChange = (value) => {
    setRender(value);
  };
  return (
    <SwitchSelector
      style={{ marginHorizontal: 20 }}
      initial={0}
      onPress={(value) => handleChange(value)}
      textColor={"#764ba2"} //'#7a44cf'
      selectedColor={"white"}
      buttonColor={"#764ba2"}
      borderColor={"#764ba2"}
      hasPadding
      options={[
        { label: "CBU", value: "CBU" },
        { label: "ALIAS", value: "Alias" },
      ]}
      testID="gender-switch-selector"
      accessibilityLabel="gender-switch-selector"
    />
  );
};

export default Switch;
