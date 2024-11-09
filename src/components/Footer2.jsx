import React, { useContext } from "react";
import { Footer } from "flowbite-react";
import Logo from "../assets/images/Logo.png";
import { AppContext } from "../App";
function Footer2() {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme === "dark" ? "dark mt-10" : "mt-10"}>
      <Footer container className="dark:bg-zinc-900">
        <div className="w-full text-center ">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between px-8">
            <Footer.Brand src={Logo} name="GeekGrid" />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="GeekGrid™" year={2023} />
        </div>
      </Footer>
    </div>
  );
}

export default Footer2;
