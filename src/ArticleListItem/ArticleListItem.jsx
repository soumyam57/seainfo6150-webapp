import React from "react";
import { useState } from 'react';
import PropTypes from "prop-types";
import styles from "./ArticleListItem.module.css"
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";

const ArticleListItem = (props) => {
  const [state, setState] = useState(false);
  
  function toggleContent() {
    setState(!state);
  }

  return (
    <div className={styles.container}>
      {!state && 
        <h2 className={styles.title}>{props.article.title}</h2>
        }
        {state && 
          <div>
            <h2 className={styles.title}>{props.article.title}</h2>
            <p>{props.article.shortText}</p>
            <time className={styles.pubDate} dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
            <p/>
          </div>
        }
        <ArticleTextToggleButton onClick={toggleContent} buttonText={state==false ? "Show more" : "Show less"}/>
    </div>
  );
}
export default ArticleListItem;
