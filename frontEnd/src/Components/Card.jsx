function Card({ item }) {
  // console.log("Ankit", item);
  const { image, category, name, price, title } = item;
  return (
    <>
      <div className=" mt-4 my-3 p-3 ">
        <div className="card w-92 bg-base-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
          <figure>
            <img src={image} alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <span className="badge badge-secondary">{category}</span>
            </h2>
            <p>{title}</p>
            <div className="card-actions justify-between cursor-pointer">
              <div className="badge badge-outline">${price}</div>
              <div
                type="button"
                className="badge badge-outline rounded-full border-x-2 hover:bg-pink-500 hover:text-white duration-200 px-2 py-1 cursor-pointer"
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
