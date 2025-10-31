import SideBar from '@/components/sidebar-component'
import React from 'react'

const SideBarLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex w-full '>
      <SideBar/>
        <main className=' ml-[4rem]  h-auto w-full  '>
          {children}
        </main>
    </div>
  )
}

export default SideBarLayout