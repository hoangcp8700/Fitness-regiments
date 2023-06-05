import React, { useId } from 'react';

import './index.css';

interface DarkModeToggleProps {
  children?: React.ReactNode;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = () => {
  const uid = useId();
  return (
    <label htmlFor={uid}>
      <input className='toggle-checkbox' id={uid} type='checkbox' />
      <div className='toggle-slot'>
        <div className='sun-icon-wrapper'>
          <div className='iconify sun-icon' data-icon='feather-sun' data-inline='false' />
        </div>
        <div className='toggle-button' />
        <div className='moon-icon-wrapper'>
          <div className='iconify moon-icon' data-icon='feather-moon' data-inline='false' />
        </div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
