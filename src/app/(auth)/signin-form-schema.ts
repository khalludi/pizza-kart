import z from "zod";

export const signinFormSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "This field is required",
    })
    .email("Email is invalid"),
  password: z.string({
    invalid_type_error: "Password must be a string",
    required_error: "This field is required",
  }),
});

export type SigninFormSchema = z.infer<typeof signinFormSchema>;
