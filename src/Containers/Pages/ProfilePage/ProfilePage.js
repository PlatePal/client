import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import styles from './ProfilePage.module.scss';

import profilePageImg from '../../../assets/images/profilepagepicture.png';

const test = ['peanuts', 'dairy', 'egg', 'peanuts', 'dairy', 'egg'];

const ProfilePage = (props) => {
  return (
    <div className={styles.profilePageContainer}>
      <div className={styles.profilePictureContainer}>
        <img className={styles.profilePicture} src={profilePageImg} alt="Profile" />
        <h3>FULL NAME</h3>
      </div>

      <div className={styles.profileSettingsContainer}>
        <h3 className={styles.preferenceType}>Dietary Restrictions</h3>
        <div className={styles.specificPreferenceContainer}>
          <h4 className={styles.specificPreferenceTitle}>Allergies</h4>
          <ul className={styles.preferenceList}>
            {test.map((val, index) => {
              return <li className={styles.preferenceItem}>{val}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProfilePage);
