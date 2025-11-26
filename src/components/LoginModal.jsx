import React from 'react'
import styles from "../module.css/signupmodal.module.css";
import UnionImg from "../assets/Union.png"

const LoginModal = ({modallogin, setModallogin}) => {
  return (
   <>
   <div className={styles.modalcontainer}>
           <span onClick={() => setModallogin(null)}>x</span>
           <div className={styles.modal}>
             <img src={UnionImg} alt="" />
                      <h1>فرم ورود  </h1>
                      <form action="" className={styles.form}>
                        <input type="text" placeholder="نام کاربری"/>
                        <input type="text" placeholder="رمزعبور"/>
                        <button>ثبت نام</button>
                      </form>
                                <p> ایجاد حساب کاربری </p>

           </div>
         </div>
   </>
  )
}

export default LoginModal