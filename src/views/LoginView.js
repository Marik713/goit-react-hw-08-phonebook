import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import { CSSTransition } from "react-transition-group";
import titleTransition from "../transitions/title.module.css";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="container">
        <div>
          <CSSTransition
            in={true}
            timeout={500}
            classNames={titleTransition}
            appear={true}
          >
            <h1 className="mainTitle">Login, please</h1>
          </CSSTransition>

          <form onSubmit={this.handleSubmit} className="form">
            <label className="label">
              Email
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                placeholder="Введіть електронну пошту"
                onChange={this.handleChange}
              />
            </label>

            <label className="label">
              Password
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                placeholder="Введіть пароль"
                onChange={this.handleChange}
              />
            </label>

            <button type="submit" className="formButton">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);
