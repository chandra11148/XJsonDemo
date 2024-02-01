import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ data }) {
  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={data.image} alt="songName" />

              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{data.likes} likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p className={styles.title}>{data.title}</p>
            </div>
          </div>
    </>
  )
  
    
}

export default Card;
