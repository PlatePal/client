import React from 'react';
import styles from './ProfileRestrictionInfo.module.scss';

const ProfileRestrictionInfo = (props) => {
  return (
    <div className={styles.specificPreferenceContainer}>
      <h4 className={styles.specificPreferenceTitle}>
        {props.preferenceTitle}
      </h4>
      <ul className={styles.preferenceList}>
        {props.preferenceArr.map((val, index) => {
          return (
            <li key={val + index} className={styles.preferenceItem}>
              {val}
            </li>
          );
        })}
        <li key='addMore'>+</li>
      </ul>
    </div>
  );
};

export default ProfileRestrictionInfo;
