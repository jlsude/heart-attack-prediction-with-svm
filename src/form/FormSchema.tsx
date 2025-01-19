import { z } from "zod";

const pageOneSchema = z.object({
  first_name: z.string().min(3, {
    message: "Must be at least 3 characthers",
  }),
  last_name: z.string().min(3, {
    message: "Must be at least 3 characters",
  }),
  age: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num >= 1 && num <= 100;
      },
      {
        message: "Age must be a number between 1 and 100",
      },
    )
    .transform((val) => Number(val)),
  sex: z
    .enum(["0", "1"], {
      message: "Sex must be selected and must be either '0' or '1'",
    })
    .transform((val) => Number(val)),
});

const pageTwoSchema = z.object({
  heart_rate: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0;
      },
      {
        message: "Must be a number and greater non-zero",
      },
    )
    .transform((val) => Number(val)),
  systolic_bp: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0;
      },
      {
        message: "Must be a number and greater non-zero",
      },
    )
    .transform((val) => Number(val)),
  diastolic_bp: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0;
      },
      {
        message: "Must be a number and greater non-zero",
      },
    )
    .transform((val) => Number(val)),
  blood_sugar: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0;
      },
      {
        message: "Must be a number and greater non-zero",
      },
    )
    .transform((val) => Number(val)),
  ck_mb: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0;
      },
      {
        message: "Must be a number and greater non-zero",
      },
    )
    .transform((val) => Number(val)),
  troponin: z
    .string()
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0;
      },
      {
        message: "Must be a number and greater non-zero",
      },
    )
    .transform((val) => Number(val)),
});

export { pageOneSchema, pageTwoSchema };
