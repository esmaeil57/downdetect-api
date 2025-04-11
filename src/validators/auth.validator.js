const { z } = require("zod");

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  yaqout: z.boolean(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});


const registerSchema = z
  .object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirmPassword do not match",
    path: ["confirmPassword"],
  });

module.exports = { loginSchema, registerSchema };