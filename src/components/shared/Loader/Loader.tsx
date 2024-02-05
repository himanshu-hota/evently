import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <span className={styles.loader}></span>
      </div>
    </>
  );
};

export default Loader;
