import z from "zod";

export const signupFormSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "This field is required",
    })
    .email("Email is invalid"),
  password: z
    .string({
      invalid_type_error: "Password must be a string",
      required_error: "This field is required",
    })
    .min(8, "Password length is too short"),
});

export type SignupFormSchema = z.infer<typeof signupFormSchema>;
