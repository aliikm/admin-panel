import React from "react";
import styles from "../module.css/signupmodal.module.css";
import UnionImg from "../assets/Union.png"
const SignUpmodal = ({modalSignUp, setModalSignUp}) => {
  return (
    <>
      <div className={styles.modalcontainer}>
        <span onClick={() => setModalSignUp(null)}>x</span>
        
        <div className={styles.modal}>
          <img src={UnionImg} alt="" />
          <h1>فرم ثبت نام</h1>
          <form action="" className={styles.form}>
            <input type="text" placeholder="نام کاربری"/>
            <input type="text" placeholder="رمزعبور"/>
            <input type="text" placeholder="تکرار رمز عبور"/>
            <button>ثبت نام</button>
          </form>
          <p>حساب کاربری دارید؟</p>
        </div>
      </div>
    </>
  );
};

export default SignUpmodal;
