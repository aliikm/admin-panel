import React from "react";
import { createContext  } from "react";
import { useState } from "react";
import styles from "../module.css/adminpage.module.css";
import Addproduct from "../components/Addproduct";

export const DataContext = createContext();
const AdminProduct = () => {
  const [modaladdproduct, setModaladdproduct] = useState(null);
  const closeHandler = () => {
    setModaladdproduct(false);
    console.log("ok")
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchcontainer}>
          <div className={styles.search}>
            <form action="">
              <input type="search" placeholder="جستجوی کالا" />
            </form>
          </div>
          <div className={styles.user}>
            <div>
              <p>hi</p>
            </div>
          </div>
        </div>
        <div className={styles.title}>
          <button onClick={() => setModaladdproduct(true)}>افزودن محصول</button>
          <p>مدیریت کالا</p>
        </div>
        
      </div>
      <DataContext.Provider value={{closeHandler}}>
        {modaladdproduct && <Addproduct />}
        
      </DataContext.Provider>
    </>
  );
};

export default AdminProduct;
