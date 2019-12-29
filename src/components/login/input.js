import React from 'react';
import style from './login.scss';

const Input = (props) => (
    <div className={ style.input }>
      <input type={ props.type } name={ props.name } placeholder={ props.placeholder } required/>
      <label forhtml={ props.name }></label>
    </div>
)

export default Input;