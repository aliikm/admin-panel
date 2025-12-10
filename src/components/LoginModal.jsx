import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import styles from "../module.css/signupmodal.module.css";
import UnionImg from "../assets/Union.png";

const LoginModal = ({ modallogin, setModallogin }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data) =>
      axios
        .post("http://localhost:3000/auth/login", data)
        .then((res) => res.data),
    onSuccess: (data) => {
      console.log("✅ ورود موفق:", data);

      localStorage.setItem("token", data.token);

      const decoded = jwtDecode(data.token);
      console.log("اطلاعات داخل توکن:", decoded);

      localStorage.setItem("username", decoded.username);

      navigate("/adminproduct");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  return (
    <>
      <div className={styles.modalcontainer}>
        <span onClick={() => setModallogin(null)}>x</span>
        <div className={styles.modal}>
          <img src={UnionImg} alt="" />
          <h1>فرم ورود </h1>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input
              type="text"
              name="username"
              placeholder="نام کاربری"
              {...register("username", { required: true })}
            />
            <input
              type="password"
              name="password"
              placeholder="رمزعبور"
              {...register("password", { required: true })}
            />
            <button>ثبت نام</button>
          </form>
          <p> ایجاد حساب کاربری </p>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
