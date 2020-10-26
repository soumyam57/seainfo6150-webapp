import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = props => {
    return (
      <div>
        <button className={styles.articleTextToggleButton} 
          onClick = {props.onClick}>
          {props.buttonText}
        </button>
      </div>
    );
  };

  ArticleTextToggleButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
  };

  export default ArticleTextToggleButton;