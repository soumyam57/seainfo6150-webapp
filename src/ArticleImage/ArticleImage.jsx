import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";
import AutoFitImage from 'react-image-autofit-frame';

const ArticleImage = (props) => {
  return (
    <div className={styles.div}>
        <img className={styles.image} 
            src={props.url}>
        </img>
        <h2 className={styles.title}>{props.title}</h2>
    </div>
  );
};

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default ArticleImage;