import React from "react";

import styles from "./CityDetails.module.css";

const CityDetails = props => {
  return (
    <div id="city-details" className={styles.wrapper}>
      <div>
        <div className={styles.detailsInfo}>
          <div className={styles.degreeDigit}>{props.degree}</div>
          {props.weather}
        </div>
        <span className={styles.extraInfo}>Huminty 64%</span>
        <span className={styles.extraInfo}>Wing 12 K/M</span>
      </div>
      <div className="city">France</div>
    </div>
  );
};

export default CityDetails;
