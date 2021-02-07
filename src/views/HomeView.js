import React from "react";
import { CSSTransition } from "react-transition-group";
import titleTransition from "../transitions/title.module.css";

const HomeView = () => (
  <div className="heading border">
    <CSSTransition
      in={true}
      timeout={500}
      classNames={titleTransition}
      appear={true}
    >
      <h1 className="mainTitle">Welcome to Phonebook.app!!!</h1>
    </CSSTransition>
  </div>
);

export default HomeView;
