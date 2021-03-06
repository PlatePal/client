import React from "react";
import styles from "./ProfileMetricInfo.module.scss";

import changeMetricButton from "../../assets/images/change_metricBtn.png";
import path from "../../constant/routes";
import { withRouter } from "react-router";

const ProfileMetricInfo = (props) => {
  return (
    <div className={styles.metricPreferenceContainer}>
      <h3 className={styles.metricPreferenceTitle}>Unit System</h3>
      <span
        className={styles.metricUsed}
        onClick={() => {
          props.history.push(path.metric);
        }}
      >
        {props.preferenceArr[0]}
        <img
          className={styles.metricChangeButton}
          src={changeMetricButton}
          alt="+"
        ></img>
      </span>
    </div>
  );
};

export default withRouter(ProfileMetricInfo);
