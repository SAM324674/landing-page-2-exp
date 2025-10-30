import React from 'react'
import SideBarLayout from '../../SideBarLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const DataAndStoragePage = () => {
    return (
        <div>
            <div>
                <SideBarLayout>
                    <main className=' flex justify-center  items-center w-full p-20'>
                        <div className='w-[60%] flex items-center flex-col space-y-20'>
                            <div className='space-y-3 flex flex-col items-center'>
                                <h1 className='text-3xl font-bold'>Data and Storage</h1>
                                <p className='text-md font-bold text-gray-500'>Manage and delete your offline content and data.</p>
                            </div>

                            <div className=' w-full space-y-2'>
                                <h1 className='text-md font-bold  '>
                                    Data on this Device
                                </h1>
                                <p className='text-sm font-bold text-gray-500'>Manage the tracks and data Wubble saves to your device. <a href='#' className='text-blue-500'>View offline tracks</a>.</p>
                                <Card className="w-full flex items-center justify-start p-4 h-[6rem] gap-4 mt-5 ">
                                    <div className="flex flex-col items-start justify-center h-[3rem] w-full px-2 space-y-2">
                                        <h1 className="font-bold text-sm">
                                            Remove offline tracks
                                        </h1>
                                        <p className=" text-sm text-gray-500 font-bold ">
                                            Tracks you’ve made available offline will be removed from your device. You can still access them while online. To remove available tracks go to
                                            <a href='#' className='text-blue-500'> Available Pages.</a>
                                        </p>
                                    </div>
                                    <Button variant={"outline"} className='text-black font-bold'>Remove Tracks</Button>
                                </Card>

                                <Card className="w-full flex items-center justify-start p-4 h-[6rem] gap-4 mt-5 ">
                                    <div className="flex flex-col items-start justify-center h-[3rem] w-full px-2 space-y-2">
                                        <h1 className="font-bold text-sm">
                                            Delete all stored data
                                        </h1>
                                        <p className=" text-sm text-gray-500 font-bold ">
                                            This will delete all data, including tracks, music content, and other cached files used for offline functionality. if you’re offline, you won’t be able to use Wubble until you’re back online.
                                        </p>
                                    </div>
                                    <Button variant={"destructive"} className='text-sm font-bold'>Delete Data</Button>
                                </Card>
                            </div>


                        </div>
                    </main>
                </SideBarLayout>
            </div>
        </div>
    )
}

export default DataAndStoragePage