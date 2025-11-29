import React, { useState } from "react";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import styles from "../module.css/home.module.css";
import SignUpmodal from "../components/SignUpmodal";
import LoginModal from "../components/LoginModal";

const Home = () => {
  const [modalSignUp, setModalSignUp] = useState(null);
  const [modallogin, setModallogin] = useState(null);
  


  const showsignupmodalHandler = () => {
    setModalSignUp(true);
  };
  const showloginmodalHandler =()=>{
    setModallogin(true)
  }
  return (
    <>
      <div className={styles.container}>
        <FaUserPlus className={styles.icon} onClick={showsignupmodalHandler} />

        <FaUserAlt className={styles.icons} onClick={showloginmodalHandler}/>

        <h1>بوت کمپ بوتواستارت</h1>
      </div>
      {!!modalSignUp && (
        <SignUpmodal
          modalSignUp={modalSignUp}
          setModalSignUp={setModalSignUp}
        />
      )}
         {!!modallogin && (
        <LoginModal
          modallogin={modallogin}
          setModallogin={setModallogin}
        />
      )}

    </>
  );
};

export default Home;
