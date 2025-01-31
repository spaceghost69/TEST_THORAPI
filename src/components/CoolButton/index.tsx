import React from 'react';

import "./index.css";

/*

primary'
'secondary'
'success'
'danger'
'warning'
'info'
'light'
'dark'

*/
interface CoolButtonProps {
  disabled?: boolean;
  children: any;
  variant?: string;
  onClick?: any;
  type?: any;
}

const CoolButton: React.FC<CoolButtonProps> = ({ disabled, children, variant, onClick, type }) => {
  
  const classx = 'btnx btn btn-' + variant;
  return(
    <button
        type={type}
        disabled={disabled}
        onClick={(event) => onClick(event)}
        className={classx}
    >{children}</button>
  )
}

export default CoolButton;