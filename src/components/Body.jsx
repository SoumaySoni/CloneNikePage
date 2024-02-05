import Shopbtn from "./Shopbtn";
import { AMAZON_LOGO, FLIPKART_LOGO, NIKE_LOGO } from "./Constant";

const Body = () => {
    return (
      <>
        <div className="h-[90vh] flex justify-center items-center">
          <div>
            <h1 className="w-[595px] h-[306px] font-extrabold text-[108px] leading-[102px]">
              YOUR FEET DESERVE THE BEST
            </h1>
            <p className="w-[404px] h-[91px] font-[600] text-[16px] leading-[24px] my-3">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <Shopbtn />
            <p className="my-3">Also Available On </p>
            <div className="flex">
              <img
                className="h-[32px] w-[32px] border-2 "
                src={AMAZON_LOGO}
                alt="amazon logo"
              ></img>
              <img
                className="h-[32px] w-[32px] mx-2 border-2 "
                src={FLIPKART_LOGO}
                alt="flipkart logo"
              ></img>
            </div>
          </div>
          <img
            className="w-[530px] h-[487.06px] hover:border-2 border-black"
            src={NIKE_LOGO}
            alt="shoes-img"
          ></img>
        </div>
      </>
    );
}

export default Body;
