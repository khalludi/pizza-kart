import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";

export default function DefaultLayout() {
  const { session } = useAuth();

  if (session) {
    return <Redirect href={"/"} />;
  }

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
