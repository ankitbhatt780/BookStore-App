import MainLayout from "./Layout/MainLayout";
// import list from "../../public/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Courses() {
  //   console.log("Ankit", list);
  const [book, setBook] = useState();

  const getBook = async () => {
    try {
      const res = await axios.get("http://localhost:3005/book/getBook");
      console.log(res.data);
      if (res.status === 200) {
        setBook(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBook();
  }, []);

  return (
    <>
      <MainLayout>
        <div>
          <div className="  z-20 container mx-auto md:px-20 px-4 item-center justify-center text-center">
            <div className="flex item-center justify-center text-center ">
              <h1 className="text-2xl  md:text-4xl mt-32 ">
                We are delighted to have you {""}
                <span className="text-pink-500">here !:)</span>
              </h1>
            </div>
            <p className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to={"/"}>
              <button className="text-white bg-pink-500 rounded-md mt-2 py-2 px-2  hover:bg-pink-800 duration-300 item-center justify-center text-center mt-6">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book && book.map((item) => <Card key={item.id} item={item} />)}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Courses;

// import { Link } from "react-router-dom";
// import MainLayout from "./Layout/MainLayout";
// import list from "../../public/list.json";
// import Card from "./Card";
// const Courses = () => {
//   return (
//     <MainLayout>
//       <div className="px-6 py-10  mx-auto  ">
//         <div className="space-y-6 md:text-2xl mt-32">
//           <div>
//             <div>
//               <h1 className="text-4xl font-bold text-gray-800">
//                 Welcome to our <span className="text-pink-500">Courses!</span>
//               </h1>
//             </div>
//             <p className="mt-5">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//             <Link to={"/"}>
//               <button className="text-white bg-pink-500 rounded-md mt-2 py-2 px-2  hover:bg-pink-800 duration-300 item-center justify-center text-center mt-6">
//                 Back
//               </button>
//             </Link>
//           </div>
//           <div
//             className="mt-12 grid grid-cols-1 md:grid-cols-4  "
//             style={{
//               maxWidth: "100%",
//               width: "100%",
//               maxHeight: "100%",
//               height: "50%",
//               objectFit: "cover",
//             }}
//           >
//             {list.map((item) => (
//               <Card key={item.id} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Courses;
