import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { List } from "react-native-paper";

const conversion = 0.0079;

export default function WalletTotal({ dinero }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
      <List.Section>
        <List.Accordion
          title="Tu total"
          left={(props) => <List.Icon {...props} icon="bank" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item
            title={dinero + " $"}
            left={() => <List.Icon icon="piggy-bank" />}
          />
          <List.Item
            title={(dinero * conversion).toFixed(2) + " $"}
            left={() => <List.Icon icon="hand-coin" />}
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8,
    height: 100,
  },
});
