"use client"
import React, { useState } from 'react'
import SideBarLayout from '../../SideBarLayout'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { MultiSelectDropdown } from '@/components/checkbox-droopdown'
import { WorkflowBuilderCard } from '@/components/workflow-builder-card'

const TeamPage = () => {
  const[roles,setRoles]=useState<string[]>([])
  const TeamsCardData = {
    imageUrl: "https://images.unsplash.com/photo-1752154344437-44bd7480e8ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900?q=80&w=2940&auto=format&fit=crop",
    status: "Active" as const,
    lastUpdated: "5 days ago",
    title: "Personal Email Assistant",
    description: "Your AI helper for reading, organizing, and responding to emails.",
    tags: ["Personal", "Marketing"],
    users: [
      { src: "https://i.pravatar.cc/150?img=1", fallback: "U1" },
      { src: "https://i.pravatar.cc/150?img=2", fallback: "U2" },
      { src: "https://i.pravatar.cc/150?img=3", fallback: "U3" },
      { src: "https://i.pravatar.cc/150?img=4", fallback: "+3" },
    ],
    // actions: [
    //   { Icon: Zap, bgColor: "bg-blue-500" },
    //   { Icon: Code, bgColor: "bg-gray-700" },
    //   { Icon: Share2, bgColor: "bg-red-500" },
    // ],
  };
  return (
    <div>
        <SideBarLayout>
            <main className='w-full flex  items-center justify-center'>
                <div className='w-[70%]  flex flex-col items-center justify-center space-y-10'>
                  <h1 className='text-3xl font-bold mt-[7rem]'>Your Teams</h1>
                  <div className='flex w-full gap-4'>
                    <div className='flex  border rounded-md items-center px-4 focus:border-primary active:border-primary'>
                      <Search/>
                      <Input placeholder='Search teams'  className='outline-none border-none'/>
                    </div>

                    <MultiSelectDropdown
                      label='Select a role' 
                      options={['Admin','Member','Viewer']}
                      selected={roles}
                      onChange={setRoles}
                      buttonLabel='All roles'
                      className="h-[3rem]"
                    />
                  </div>
                  <div className='flex w-full'>
                    <WorkflowBuilderCard {...TeamsCardData}/>
                  </div>

                </div>
            </main>
        </SideBarLayout>
    </div>
  )
}

export default TeamPage