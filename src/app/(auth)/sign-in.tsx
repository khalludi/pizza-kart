import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Button from "@components/Button";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="jon@example.com"
        placeholderTextColor="grey"
      />

      <Text style={styles.inputText}>Password</Text>
      <TextInput
        style={[styles.input, { marginBottom: 20 }]}
        value={password}
        onChangeText={setPassword}
      />

      <Button text="Sign in" />
      <Link href={"/sign-up"} style={styles.createAccount}>
        <Text>Create an account</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  inputText: {
    fontSize: 14,
    color: "grey",
    paddingBottom: 5,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "lightgrey",
    borderWidth: 1.5,
    marginBottom: 10,
  },
  createAccount: {
    marginTop: 5,
    padding: 10,
    textAlign: "center",
    width: "100%",
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});

export default SignInScreen;
