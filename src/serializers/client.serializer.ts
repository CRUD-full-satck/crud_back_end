import * as yup from "yup";

export const createClientSerializer = yup.object().shape({
  name: yup
    .string()
    .max(100, "Name too long, if you want you can abbreviate")
    .required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Password is required"),
  tel: yup
    .string()
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, "Invalid phone number")
    .required("Phone is required"),
});

export const updateClientSerializer = yup.object().shape({
  name: yup.string().max(100, "Name too long, if you want you can abbreviate"),
  email: yup.string().email(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  tel: yup
    .string()
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, "Invalid phone number"),
});
