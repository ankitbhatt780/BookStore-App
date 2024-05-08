import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
function FreeBooks() {
  // const filterData = list.filter((item) => item.price === "0");
  const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log("Ankit", filterData);
  return (
    <>
      <div className="mx-w-screen-2*1 container mx-auto md:px-20 px-4 pb-2 hover">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>

          <p>
            Lorem ipsum dolor sit amet. Ut aperiam omnis vel adipisci architecto
            qui voluptates excepturi et dolorum sapiente. Aut aliquid autem At
            earum animi et rerum illo est exercitationem adipisci quo ipsa
            galisum et molestias accusantium eos quia atque{" "}
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBooks;
