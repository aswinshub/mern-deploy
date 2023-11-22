import React from 'react'

import NavbarAdm from '../elements/NavbarAdm'
const MainAdm = (props) => {
    return (
      <div>
        <NavbarAdm/>
        {props.child}
      </div>
    )
  }
  
  export default MainAdm
  