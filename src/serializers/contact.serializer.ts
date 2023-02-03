import * as yup from "yup";

export const createContactSerializer = yup.object().shape({
  name: yup
    .string()
    .max(100, "Name too long, if you want you can abbreviate")
    .required("name is required"),
  email: yup.string().email().required("email is required"),
  tel: yup
    .string()
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, "Invalid phone number")
    .required("tel is required"),
});

export const updateContactSerializer = yup.object().shape({
  name: yup
    .string()
    .max(100, "Name too long, if you want you can abbreviate"),
  email: yup.string().email(),
  tel: yup
    .string()
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, "Invalid phone number"),
});
