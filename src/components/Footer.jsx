import React, { useEffect, useState } from "react";
import "./footer.css";
import { useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();

  const [footerDisplay, setfooterDisplay] = useState(true);
  useEffect(() => {
    if (location.pathname === "/signup" || location.pathname === "/signin") {
      setfooterDisplay(false);
    } else {
      setfooterDisplay(true);
    }
  }, [location.pathname]);

  return (
    <>
      <footer className={footerDisplay ? "" : "closefooter"}>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <i class="fab fa-slack"></i>
              <span class="logo_name">GeekGrid</span>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">Company</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our partners</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Services</li>
              <li>
                <a href="#">Web development</a>
              </li>
              <li>
                <a href="#">App development</a>
              </li>
              <li>
                <a href="#">Logo design</a>
              </li>
              <li>
                <a href="#">Card design</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Account</li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Prefrences</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Courses</li>
              <li>
                <a href="#">SEO</a>
              </li>
              <li>
                <a href="#">Web design</a>
              </li>
              <li>
                <a href="#">Programming</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
            </ul>
            <ul class="box input-box">
              <li class="link_name">Subscribe to newsletter</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">
              Copyright © 2023 <a href="#kjk">GeekGrid</a>All rights reserved
            </span>
            <span class="policy_terms">
              <a href="#bjb">Privacy policy</a>
              <a href="#b">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
