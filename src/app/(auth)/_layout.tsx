import React from "react";
import { Stack } from "expo-router";

export default function DefaultLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          title: "Sign in",
          headerLeft: () => null,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          title: "Sign up",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
