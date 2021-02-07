import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import { CSSTransition } from "react-transition-group";
import titleTransition from "../transitions/title.module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="container">
        <div>
          <CSSTransition
            in={true}
            timeout={500}
            classNames={titleTransition}
            appear={true}
          >
            <h1 className="mainTitle">Register, please</h1>
          </CSSTransition>

          <form onSubmit={this.handleSubmit} className="form">
            <label className="label">
              Name
              <input
                className="input"
                placeholder="Введіть ім'я"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

            <label className="label">
              Email
              <input
                className="input"
                placeholder="Введіть електронну пошту"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label className="label">
              Password
              <input
                className="input"
                placeholder="Введіть пароль"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit" className="formButton">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterView
);
