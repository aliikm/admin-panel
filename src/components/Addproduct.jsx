import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { DataContext } from "../pages/AdminProduct";
import React from "react";
import styles from "../module.css/addproduct.module.css";
const Addproduct = () => {
  const { register, handleSubmit } = useForm();

  const { closeHandler } = useContext(DataContext);

  const onSubmit = (data) => {
    console.log("formdata", data);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.addproductmodal}>
          <p>ایجاد محصول جدید</p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">نام کالا</label>
            <input
              type="text"
              placeholder="نام کالا"
              {...register("نام کالا")}
            />
            <label htmlFor="">تعداد موجودی</label>
            <input
              type="text"
              placeholder="تعداد موجودی"
              {...register("تعداد موجودی")}
            />
            <label htmlFor="">قیمت</label>
            <input type="text" placeholder="قیمت" {...register("قیمت")} />
            <div className={styles.buttongroup}>
              <button
                type="button"
                onClick={closeHandler}
                style={{
                  background: "rgba(223, 223, 223, 1)",
                  color: "rgba(40, 40, 40, 0.8)",
                }}
              >
                انصراف
              </button>

              <button
                type="submit"
                style={{
                  background: "rgba(85, 163, 240, 1)",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                ایجاد
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
