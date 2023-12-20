import React from 'react'

const Badge = ({title, badge}  ) => {
  return (
   <div>
    {badge &&  <span className='py-2 px-8 bg-black inline-block text-white font-primaryFont text-sm font-bold absolute top-5 left-5'>{title} </span>}
   </div>
    )
}

export default Badge