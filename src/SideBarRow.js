import React from 'react';
import './SideBarRow.css';

function SideBarRow({ selected, Icon, title }) {
  return (
    <div className={`sideBarRow ${selected && "selected"}`}>
      <Icon className='sidebarrow_icon' />
      <h2 className='sidebarrow_titile'>{title}</h2>
    </div>
  );
}

export default SideBarRow;
