import React from 'react';

import styles from './button.module.css';

function Button({ text = "Submit", ...restProps }) {
  return (
    <div className={styles.green}>
        <button type="button" {...restProps}>{text}</button>
    </div>
  )
}

export default Button