import React from 'react'
import SideBarLayout from '../../SideBarLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LockKeyhole } from 'lucide-react'

const Loginpage = () => {
    return (
        <div>
            <SideBarLayout>
                <main className='w-full flex flex-col items-center justify-center space-y-20 p-10'>
                    <h1 className='text-3xl font-bold'>Login</h1>
                    <div className='w-[60%]'>
                        <div className="flex justify-between items-start gap-4 flex-col">
                            <h1 className='font-bold '>Login</h1>
                            <Card className="w-full flex items-center justify-start p-4 h-[6rem] gap-4">
                                <div className="w-[3rem] h-[3rem] p-3 flex justify-center items-center  bg-background rounded-md border">
                                    <LockKeyhole />
                                </div>
                                <div className="flex flex-col items-start justify-center h-[3rem] w-full px-2">
                                    <h1 className="font-bold text-md">
                                        Password
                                    </h1>
                                    <p className=" text-sm text-gray-500">
                                        To add a password to your account the first time, you will need to use the password reset page so we can verify your identity.
                                    </p>
                                </div>
                            </Card>

                            <div className=' space-y-3  w-full'>

                                <h1 className='text-sm font-bold mt-3'>Security</h1>
                    
                                    <p className='text-sm font-bold'>Sign out from all devices</p>
                                
                                <p className='text-sm text-gray-500 font-bold'>Logged in ona  shared device but forgot to sign out? End all sessions by signing out from all devices.</p>
                                <Button variant="outline" className='p-3 font-bold'>Sign out from all devices</Button>
                            </div>
                            <div className='border border-gray-300 w-full' />

                            <div className='space-y-4'>
                                <h1 className='font-bold text-sm '>Download your Wubble team uploads and designs</h1>
                                <p className='font-bold text-gray-500 text-sm'>You can request to download the uploads and tracks of your Wubble team(s) here.</p>
                                <p className='font-bold text-gray-500 text-sm '>Note : Team uploads and designs are managed by the team owner, as described in our Terms of use. Only the team owner can download uploads and tracks made in team. If you’re not the team member these will not be included in your download.</p>

                                <Button variant="outline" className='font-bold'>Request to download</Button>
                            </div>

                            <div className='border border-gray-300 w-full' />

                            <div className='space-y-4'>
                                <h1 className='font-bold text-sm'>Delete your account</h1>
                                <p className='font-bold text-gray-500 text-sm'>By deleting your account, you’ll no longer be able to access any of your tracks or log in to Wubble. Your Wubble account was created at 3:20 pm, 17 Oct 2025.</p>
                                <Button variant="outline" className='font-bold'>Delete Account</Button>
                            </div>
                            <p className='mt-3 font-bold text-gray-500 text-sm'>If you want to be removed from your team Wubble Design Team instead, contact your team administrator.</p>
                        </div>
                    </div>
                </main>
            </SideBarLayout>
        </div>
    )
}

export default Loginpage