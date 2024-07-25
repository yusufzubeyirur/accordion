"use client";
import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.titleContainer} onClick={toggleAccordion}>
        <div className={styles.title}>{title}</div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>{isOpen ? "-" : "+"}</button>
        </div>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.show : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
