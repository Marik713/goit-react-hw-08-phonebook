import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.title}>Find contacts by name</h3>
      <input
        className={styles.filterEditor_input}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
