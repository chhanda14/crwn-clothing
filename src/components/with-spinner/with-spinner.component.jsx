import React from "react";
import styles from "./with-spinner.styles.module.scss";

const WithSpinner = (WrrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className={styles.SpinnerOverlay}>
        <div className={styles.SpinnerContainer} />
      </div>
    ) : (
      <WrrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
