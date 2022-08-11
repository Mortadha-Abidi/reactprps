import React from 'react'
import PropTypes from "prop-types"
export const Profile = ({children,fullname,bio,myfunction}) => {
  return (
    <div>
        <h1>fullName is :{fullname}</h1>
        <p>
            {bio}

        </p>
        <div onClick={()=>myfunction()}>{children}</div>
       
       
    </div>
  )
}
Profile.propTypes={
  fullname:PropTypes.string
}
Profile.defaultProps={
  fullname:"mortadha"
}