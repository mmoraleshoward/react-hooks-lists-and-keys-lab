import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
            <a href = "#home" id = {links.home}>home</a>
            <a href = "#about" id = {links.about}>about</a>
            <a href = "#projects" id = {links.projects}>projects</a>
        </nav>;
}

export default NavBar;
