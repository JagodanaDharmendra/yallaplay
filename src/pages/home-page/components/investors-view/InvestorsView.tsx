import { InvestorItem } from "./items";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3,
    // slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1500, min: 750 },
    items: 2,
    // slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const investorsData = [
  {
    name: "berytech",
    img: require("../../../../assets/investors/berytech.jpeg"),
  },
  {
    name: "berytech2",
    img: require("../../../../assets/investors/berytech2.jpeg"),
  },
  {
    name: "by",
    img: require("../../../../assets/investors/by.jpeg"),
  },
  {
    name: "imcapital",
    img: require("../../../../assets/investors/imcapital.jpeg"),
  },
];

function InvestorsView() {
  return (
    <div className="flex flex-col py-4 items-center text-center w-full justify-center">
      <div className="flex w-full flex-col">
        <h2 className="block text-primary uppercase">Investors</h2>
        <h2 className="text-white text-3xl sm:text-5xl mt-4 sm:mt-8">Who's backing us up</h2>
      </div>
      <div className="w-4/5 my-8 sm:my-32">
        <Carousel
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
        >
          {investorsData.map((value) => {
            return <InvestorItem {...value} key={value.name} />;
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default InvestorsView;
