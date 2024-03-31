import { Stack } from "expo-router";

const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => null,
          title: "Orders",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default OrdersLayout;
