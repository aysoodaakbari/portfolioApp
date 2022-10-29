import React, { ReactNode } from 'react'
interface PropType {

    children: ReactNode;
  
  }
   
const Layout = ({ children }: PropType) => {
  return (
    
    <div className="bg-circle min-vh-100 text-gray  position-relative overflow-hidden">

      <main>{children}</main>

    </div>

  )
}

export default Layout