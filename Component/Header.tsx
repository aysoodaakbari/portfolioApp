import React from 'react'

const Header = () => {
  return (
    <div className='bg-1 d-flex flex-row justify-content-between align-items-center px-5'>

        <div className='d-flex flex-row justify-content-end align-items-center text-gray ' >     
        portfolio
        </div>

        <div className='d-flex flex-row justify-content-start align-items-center py-3'>
            <div className=' mt-3 ms-1 me-5' style={{width:'44px', height:'54px'}} >
             
            </div>
    
    
            <div className='d-none  d-md-flex flex-row justify-content-start align-items-center text-nav'>
                <span className='me-5 text-gray ' >
                    Home
                </span>
                <span className='me-5 text-gray' >
                    About Me
                </span>
                <span className='me-5 text-gray' >
                    Blogs
                </span>
            </div>
        </div>

    </div>
  )
}

export default Header