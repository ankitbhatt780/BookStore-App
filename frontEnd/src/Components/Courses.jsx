import MainLayout from "./Layout/MainLayout";
import list from "../../public/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";
function Courses() {
  //   console.log("Ankit", list);

  return (
    <>
      <MainLayout>
        <div>
          <div className="  z-20 container mx-auto md:px-20 px-4 item-center justify-center text-center">
            <div className="flex item-center justify-center text-center ">
              <h1 className="text-2xl  md:text-4xl mt-32 ">
                We're delighted to have you {""}
                <span className="text-pink-500">here !:)</span>
              </h1>
            </div>
            <p className="mt-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <Link to={"/"}>
              <button className="text-white bg-pink-500 rounded-md mt-2 py-2 px-2  hover:bg-pink-800 duration-300 item-center justify-center text-center mt-6">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {list.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Courses;
