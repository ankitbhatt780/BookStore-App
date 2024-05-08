import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Ankit", data);
  };
  return (
    <div className="modal-container">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div
              onClick={() => navigate("/")}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </div>

            <div className="item-center justify-center text-center  container rounded-md">
              <h1 className="font-bold text-2xl outline-none mt-5">Login</h1>
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
                Login
              </button>
              <br />
              <Link to="/signup">
                dont have account ? {""}{" "}
                <button className="  text-blue-500 cursor-pointer hover:text-pink-300  mt-2">
                  Signup
                </button>
              </Link>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
