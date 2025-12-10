import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { DataContext } from "../pages/AdminProduct";
import { registerproduct } from "../helper/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import styles from "../module.css/addproduct.module.css";
import { data } from "react-router-dom";

const Addproduct = () => {
  const { addProduct, closeHandler } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerproduct),
  });

  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(
        "http://localhost:3000/products",
        {
          productname: values.productname,
          inventory: values.inventory,
          price: values.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
    onSuccess: (data, variables) => {
      console.log("محصول ثبت شد ✅", data);
      console.log("اطلاعات ارسال‌شده:", variables);
      const fullProduct = {
        ...variables,
        id: data.id,
      };
      addProduct(fullProduct); // اضافه به لیست
      closeHandler(); // بستن مودال
      reset(); // پاک کردن فرم
      queryClient.invalidateQueries("products");
    },
    onError: (error) => {
      console.error("خطا:", error.response?.data);
    },
  });
  const onSubmit = (formData) => {
    mutation.mutate(formData);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.addproductmodal}>
          <p>ایجاد محصول جدید</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="productname">نام کالا</label>
            <input
              type="text"
              placeholder="نام کالا"
              name="productname"
              {...register("productname")}
            />
            {errors.productname && <p>{errors.productname.message}</p>}
            <label htmlFor="inventory">تعداد موجودی</label>
            <input
              type="number"
              name="inventory"
              placeholder="تعداد موجودی"
              {...register(" inventory", { valueAsNumber: true })}
            />
            {errors.inventory && <p>{errors.inventory.message}</p>}
            <label htmlFor="price">قیمت</label>
            <input
              type="number"
              placeholder="قیمت"
              name="price"
              {...register("price")}
            />
            {errors.price && <p>{errors.price.message}</p>}
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
                disabled={mutation.isLoading}
                style={{
                  background: "rgba(85, 163, 240, 1)",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                {mutation.isLoading ? "در حال ارسال..." : "ثبت محصول"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
