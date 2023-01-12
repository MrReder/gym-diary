import React from 'react';
import { Link } from 'react-router-dom';

function ReturnBtn({ children, to }) {
  return (
    <Link to={to}>
    <button className='to-main-btn'>{children}</button>
    </Link>
  )
}

export default ReturnBtn
