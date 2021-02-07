import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import titleTransition from "../transitions/title.module.css";
import filterTransition from "../transitions/filter.module.css";
import Loader from "../components/Loader/Loader";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import { authSelectors } from "../redux/auth";

class ContactsView extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/login");

      return;
    }

    this.props.onFetchContacts();
  }

  render() {
    return (
      <section className="container">
        <div>
          <CSSTransition
            in={true}
            timeout={500}
            classNames={titleTransition}
            appear={true}
          >
            <h1 className="mainTitle">Phonebook</h1>
          </CSSTransition>
          <ContactForm />

          <CSSTransition
            in={true}
            timeout={250}
            unmountOnExit
            classNames={filterTransition}
          >
            <Filter />
          </CSSTransition>
          {this.props.isLoadingContacts && <Loader />}
          <ContactList />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
