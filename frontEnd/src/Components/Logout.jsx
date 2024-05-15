import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = async () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.loading("Loading...");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      toast.error("error", error.msg);
    }
  };
  return (
    <div>
      <button
        type="button"
        className="rounded-md px-3 py-2 bg-red-500 text-white cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
