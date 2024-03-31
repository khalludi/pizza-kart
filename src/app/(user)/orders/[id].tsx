import { View, StyleSheet, FlatList } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@assets/data/orders";
import OrderListItem from "@components/OrderListItem";
import OrderItemListItem from "@components/OrderItemListItem";

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const order = orders.find((order) => order.id.toString() === id);
  if (!order) {
    return "Order not found";
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: `Order #${id}`, headerTitleAlign: "center" }}
      />

      <OrderListItem order={order} />

      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem orderItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
});

export default OrderDetailScreen;
