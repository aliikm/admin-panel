import * as Yup from "yup";

export const registerschema = Yup.object().shape({
  name: Yup.string().required(),

  password: Yup.string()
    .required("رمز عبور الزامی است")
    .min(8, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "رمز عبور باید شامل حرف، عدد و علامت باشد"
    ),

  repassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "تکرار رمز عبور باید با رمز عبور یکسان باشد"
    )
    .required("تکرار رمز عبور الزامی است"),
});
export const registerproduct = Yup.object().shape({
 productname: Yup.string().required("نام کالا الزامی است"),
  inventory: Yup.number().typeError("تعداد باید عدد باشد"),
  price: Yup.number().typeError("قیمت باید عدد باشد").required("قیمت کالا الزامی است"),
});
