import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "@components/Button";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import {
  Controller,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  signupFormSchema,
  SignupFormSchema,
} from "@/app/(auth)/signup-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpScreen = () => {
  const methods = useForm<SignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignupFormSchema> = (data) => {
    console.log("onSubmit");
    console.log(JSON.stringify(data));
  };

  const onError: SubmitErrorHandler<SignupFormSchema> = (errors, e) => {
    console.log("onError");
    console.log(JSON.stringify(errors));
  };

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <Controller
          control={methods.control}
          name={"email"}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => {
            return (
              <>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  placeholder="jon@example.com"
                  placeholderTextColor="grey"
                />
                {error?.message && (
                  <Text style={styles.errorText}>{error.message}</Text>
                )}
              </>
            );
          }}
        />
        <View style={styles.spacing} />

        <Controller
          control={methods.control}
          name={"password"}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => {
            return (
              <>
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
                {error?.message && (
                  <Text style={styles.errorText}>{error.message}</Text>
                )}
              </>
            );
          }}
        />
        <View style={styles.margin10} />

        <Button
          text="Create Account"
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </FormProvider>
      <Link href={"/sign-in"} style={styles.createAccount}>
        <Text>Sign in</Text>
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
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 2,
  },
  spacing: {
    margin: 5,
  },
  margin10: {
    margin: 10,
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

export default SignUpScreen;