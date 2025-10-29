import SideBar from '@/components/sidebar-component'
import React from 'react'

const SideBarLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex w-full border border-black'>
      <SideBar/>
        <main className=' ml-[8rem]  h-auto w-full'>
          {children}
        </main>
    </div>
  )
}

export default SideBarLayout