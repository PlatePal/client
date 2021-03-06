import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import styles from './LogoutBtn.module.scss';

const LogoutBtn = (props) => {
  return (
    <button className={styles.LogoutBtn} style={props.style}>
      LOGOUT
    </button>
  );
};

export default LogoutBtn;
