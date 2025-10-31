import React from 'react'
import SideBarLayout from '../../SideBarLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, LockKeyhole } from 'lucide-react'
import Switch from '@/components/ui/switch'
import ToggleSwitch from '@/components/toggle-switch'

const AIPersonalizationPage = () => {
    return (
        <div>
            <SideBarLayout>
                <main className='w-full flex flex-col items-center justify-center space-y-20 p-10 mt-10'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-3xl font-bold'>AI Personalisation</h1>
                        <p>Control how Wubble AI uses your data to create personalized experiences</p>
                    </div>
                    <div className='w-[60%]'>
                        <div className="flex justify-between items-start gap-4 flex-col">
                            <h1 className='font-bold '>Memory</h1>
                            <Card className="w-full flex items-center justify-start p-4  gap-4">

                                <div className="flex  items-center justify-between  w-full px-2">
                                    <div className=' space-y-3'>
                                        <h1 className="font-bold text-md">
                                            Save and reference memories
                                        </h1>
                                        <p className=" text-sm text-gray-500">
                                            Let Wubble AI save and use memories when responding.
                                        </p>
                                        <Button variant={"outline"} className='font-bold '>
                                            Manage Memories
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                    <ToggleSwitch />
                                </div>
                            </Card>


                        </div>
                    </div>
                </main>
            </SideBarLayout>
        </div>
    )
}

export default AIPersonalizationPage