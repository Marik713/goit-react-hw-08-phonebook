import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import InputTelMask from "react-input-mask";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={styles.FormEditor} onSubmit={this.handleSubmit}>
        <label className={styles.FormEditor_label}>
          Name
          <input
            className={styles.FormEditor_input}
            type="text"
            name="name"
            placeholder="Введіть ім'я"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.FormEditor_label}>
          Number
          <InputTelMask
            className={styles.FormEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            required
            mask="999-99-99"
            placeholder="Введіть номер телефону"
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.FormEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.defaultProps = {
  name: "",
  number: "",
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
