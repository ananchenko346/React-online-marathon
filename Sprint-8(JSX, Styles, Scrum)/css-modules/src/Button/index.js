import React from 'react';

import style from './Button.module.css';

function Button() {
  return (
    <button className={style.active}>
      Click Me
    </button>
  );
};

export default Button;
