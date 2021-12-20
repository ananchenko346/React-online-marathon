import React from 'react';

import style from './Input.module.css';

function Input() {
  return (
    <input type='text' className={style.active} />
  );
};

export default Input;
