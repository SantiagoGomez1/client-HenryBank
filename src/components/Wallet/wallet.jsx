import React from "react";

import { Text, ScrollView } from "react-native";
import CarouselImages from "../CarouselImages/CarouselImages.jsx";
import WalletTotal from "../WalletTotal/WalletTotal.jsx";

const Wallet = () => {
  return (
    <ScrollView>
      <WalletTotal dinero={150000} />
      <CarouselImages />
    </ScrollView>
  );
};

export default Wallet;
