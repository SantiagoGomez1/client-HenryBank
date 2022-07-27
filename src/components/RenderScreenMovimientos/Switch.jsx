import React from "react";

import SwitchSelector from "react-native-switch-selector";

const Switch = ({ setRender }) => {
  return (
    <SwitchSelector
      style={{ marginHorizontal: 20 }}
      initial={0}
      onPress={(value) => setRender(value)}
      textColor={"#764ba2"} //'#7a44cf'
      selectedColor={"white"}
      buttonColor={ "#764ba2"}
      borderColor={"#764ba2"}
      hasPadding
      options={[
        { label: "Ingresos", value: "INGRESOS" },
        { label: "Egresos", value: "EGRESOS" },
      ]}
      testID="gender-switch-selector"
      accessibilityLabel="gender-switch-selector"
    />
  );
};

export default Switch;
