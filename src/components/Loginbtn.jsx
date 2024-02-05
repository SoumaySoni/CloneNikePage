import { useState } from "react";

const Loginbtn = () => {
  const [loginBtn, setloginBtn] = useState("Login");

  const handleLoginBtn = () => {
    loginBtn === "Login" ? setloginBtn("Logout") : setloginBtn("Login");
  };

  return (
    <button
      className="w-[105px]  border-2 border-black hover:bg-gray-300"
      onClick={handleLoginBtn}
    >
      {loginBtn} 
    </button>
  );
};

export default Loginbtn;
