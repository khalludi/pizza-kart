import { Pressable, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import { Order } from "@/types";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link, useSegments } from "expo-router";

dayjs.extend(relativeTime);

type OrderListItemProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable onPress={() => {}} style={styles.container}>
        <View>
          <Text style={styles.orderId}>Order #{order.id}</Text>
          <Text style={styles.orderDate}>
            {dayjs(order.created_at).fromNow()}
          </Text>
        </View>
        <Text style={styles.orderStatus}>{order.status}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderDate: {
    color: "gray",
  },
  orderId: {
    fontWeight: "bold",
  },
  orderStatus: {
    fontWeight: "500",
  },
});

export default OrderListItem;
