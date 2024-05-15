import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

function Singup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:3005/user/newuser",
        userInfo
      );
      // console.log(res);
      if (res.status === 200) {
        // localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("signup Successful ");
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response.data.msg);
    }
    reset();
  };

  return (
    <div>
      <div className="flex h-screen justify-center  items-center">
        <div className="border-2 shadow-md px-20 py-10 rounded-md modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <div className="item-center justify-center text-center  container rounded-md">
              <h1 className="font-bold  outline-none   mt-5 text-2xl">
                Signup
              </h1>
              <h3 className="mt-5">Name</h3>
              <input
                type="text"
                placeholder="name"
                className="p-2 rounded-sm"
                {...register("name", { required: "Name is required" })}
              />

              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <h3 className="mt-5">Email</h3>
              <input
                type="email"
                placeholder="email"
                className="p-2 rounded-sm"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <h3 className="mt-5">Password</h3>
              <input
                type="password"
                className="p-2"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <br />
              <button
                type="submit"
                className="mt-5  btn bg-pink-500 text-white hover:bg-pink-900 text-lg"
              >
                Signup
              </button>
              <br />
              <div
                className="text-lg"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                have account ? {""}{" "}
                <button className="  text-blue-500 cursor-pointer hover:text-pink-300 mt-2">
                  Login
                </button>
                <Login />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singup;
