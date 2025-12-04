import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerschema } from "../helper/schema";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import styles from "../module.css/signupmodal.module.css";
import UnionImg from "../assets/Union.png";

const SignUpmodal = ({ modalSignUp, setModalSignUp }) => {
const [serverMessage, setServerMessage] = useState("");
  const [userId, setUserId] = useState(null);

const mutation = useMutation({
  mutationFn:(formState) =>
         axios.post("http://localhost:3000/auth/register", {username: formState.username,
          password: formState.password}).then((res) => res.data),
    onSuccess: (data) => {
      console.log("ثبت‌نام موفق:", data);
      setUserId(data.id); // ذخیره آیدی برگشتی
      setServerMessage("ثبت‌نام با موفقیت انجام شد");
    },
    onError: (error) => {
       console.error("پیام خطا از سرور:", error.response?.data);
    }
  
})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerschema),
  });

  const onSubmit = (formData) => {
     console.log("اطلاعات وارد شده توسط کاربر:", formData);
 mutation.mutate({
    username: formData.name,
    password: formData.password
  });
  };

  return (
    <>
      <div className={styles.modalcontainer}>
        <span onClick={() => setModalSignUp(null)}>x</span>

        <div className={styles.modal}>
          <img src={UnionImg} alt="" />
          <h1>فرم ثبت نام</h1>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              {...register("name")}
              placeholder="نام کاربری"
            />
            {errors.name && <p>{errors.name.message}</p>}

            <input
              type="password"
              name="password"
              {...register("password")}
              placeholder="رمزعبور"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <input
              type="password"
              name="repassword"
              {...register("repassword")}
              placeholder="تکرار رمز عبور"
            />
            {errors.repassword && <p>{errors.repassword.message}</p>}
            <button type="submit">ثبت نام</button>
          </form>
          <p>حساب کاربری دارید؟</p>
        </div>
      </div>
    </>
  );
};

export default SignUpmodal;
