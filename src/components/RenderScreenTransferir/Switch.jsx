import React from "react";

import SwitchSelector from "react-native-switch-selector";

const Switch = ({ setRender }) => {
  return (
    <SwitchSelector
      style={{marginHorizontal:20}}
      initial={0}
      onPress={(value) => setRender(value)}
      textColor={"purple"} //'#7a44cf'
      selectedColor={"white"}
      buttonColor={"purple"}
      borderColor={"purple"}
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
