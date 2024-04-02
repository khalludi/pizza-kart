import { FlatList, ScrollView } from "react-native";
import orders from "@assets/data/orders";
import { Link } from "expo-router";
import OrderListItem from "@components/OrderListItem";

const OrdersScreen = () => {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
};

export default OrdersScreen;
