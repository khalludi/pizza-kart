import { Image, StyleSheet, Text, View } from "react-native";
import { defaultPizzaImage } from "@assets/data/products";
import Colors from "@/constants/Colors";
import { OrderItem } from "@/types";

type OrderItemListItemProps = {
  orderItem: OrderItem;
};

const OrderItemListItem = ({ orderItem }: OrderItemListItemProps) => {
  const product = orderItem.products;

  return (
    <View key={`orderItem${product.id}`} style={styles.orderContainer}>
      <Image
        style={styles.orderImage}
        source={{ uri: product.image || defaultPizzaImage }}
      />
      <View style={styles.orderInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.productPriceSize}>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          <Text>Size: {orderItem.size}</Text>
        </View>
      </View>
      <Text style={styles.productQuantity}>{orderItem.quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },

  orderContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  orderImage: {
    width: "20%",
    aspectRatio: 1,
  },
  orderInfo: {
    flex: 1,
    paddingLeft: 10,
    gap: 2,
  },

  productName: {
    fontWeight: "500",
    fontSize: 15,
  },
  productPrice: {
    fontWeight: "600",
    color: Colors.light.tint,
  },
  productPriceSize: {
    flexDirection: "row",
    gap: 5,
  },
  productQuantity: {
    fontWeight: "500",
    fontSize: 16,
  },
});

export default OrderItemListItem;
