import Loginbtn from "./Loginbtn";

const Header = () => {
  return (
    <div className="flex justify-between shadow-lg">
      <img
        className="w-[6rem]"
        src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_Nike_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1695304464"
        alt="logo-pic"
      ></img>
      <ul className="flex mx-94 px-16 items-center font-bold">
        <li className="mx-5 px-5">Home</li>
        <li className="mx-5 px-5">Location</li>
        <li className="mx-5 px-5">About</li>
        <li className="mx-5 px-5">Contact</li>
      </ul>
      <Loginbtn />
    </div>
  );
};

export default Header;
