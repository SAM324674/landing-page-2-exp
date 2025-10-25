"use client";

import { Button } from "./ui/button";
import { Tabs } from "./ui/tabs";


export function PillsTabs() {
    const tabs = [
        {
            title: "Marketing & ads",
            value: "Marketing & ads",
            content: (
                <section className=" space-y-5 w-[90%] h-[303px] p-[50px]  flex justify-between items-center rounded-[10px]  bg-gradient-to-b from-purple-50 via-purple-200 to-purple-600  font-[600]  ">

                    <div className="flex flex-col   space-y-[20px] text-gray-900 ">
                        <h1 className="font-bold text-[40px]">Go from brief to broadcast instantly</h1>
                        <p className="w-[672px] text-gray-800/80 text-[20px]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                        <Button className="bg-white hover:bg-gray-50 w-[152px] h-[56px] text-gray-900 font-[600] mt-6 text-[16px]">Learn More</Button>
                    </div>
                    

                </section>
            ),
        },
        {
            title: "Film $ TV",
            value: "Film $ TV",
            content: (
                <section className=" space-y-5 w-[90%] h-[303px] p-[50px]  flex justify-between items-center rounded-[10px]  bg-gradient-to-b from-purple-50 via-purple-200 to-purple-600  font-[600]  ">

                    <div className="flex flex-col   space-y-[20px] text-gray-900 ">
                        <h1 className="font-bold text-[40px]">Go from brief to broadcast instantly</h1>
                        <p className="w-[672px] text-gray-800/80 text-[20px]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                        <Button className="bg-white hover:bg-gray-50 w-[152px] h-[56px] text-gray-900 font-[600] mt-6 text-[16px]">Learn More</Button>
                    </div>
                    

                </section>
            ),
        },
        {
            title: "Game Dev",
            value: "Game Dev",
             content: (
                <section className=" space-y-5 w-[90%] h-[303px] p-[50px]  flex justify-between items-center rounded-[10px]  bg-gradient-to-b from-purple-50 via-purple-200 to-purple-600  font-[600]  ">

                    <div className="flex flex-col   space-y-[20px] text-gray-900 ">
                        <h1 className="font-bold text-[40px]">Go from brief to broadcast instantly</h1>
                        <p className="w-[672px] text-gray-800/80 text-[20px]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                        <Button className="bg-white hover:bg-gray-50 w-[152px] h-[56px] text-gray-900 font-[600] mt-6 text-[16px]">Learn More</Button>
                    </div>
                    

                </section>
            ),
        },
        {
            title: "Hospitality",
            value: "Hospitality",
             content: (
                <section className=" space-y-5 w-[90%] h-[303px] p-[50px]  flex justify-between items-center rounded-[10px]  bg-gradient-to-b from-purple-50 via-purple-200 to-purple-600  font-[600]  ">

                    <div className="flex flex-col   space-y-[20px] text-gray-900 ">
                        <h1 className="font-bold text-[40px]">Go from brief to broadcast instantly</h1>
                        <p className="w-[672px] text-gray-800/80 text-[20px]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                        <Button className="bg-white hover:bg-gray-50 w-[152px] h-[56px] text-gray-900 font-[600] mt-6 text-[16px]">Learn More</Button>
                    </div>
                    

                </section>
            ),
        },
        {
            title: "Creators",
            value: "Creators",
            content: (
                <section className=" space-y-5 w-[90%] h-[303px] p-[50px]  flex justify-between items-center rounded-[10px]  bg-gradient-to-b from-purple-50 via-purple-200 to-purple-600  font-[600]  ">

                    <div className="flex flex-col   space-y-[20px] text-gray-900 ">
                        <h1 className="font-bold text-[40px]">Go from brief to broadcast instantly</h1>
                        <p className="w-[672px] text-gray-800/80 text-[20px]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                        <Button className="bg-white hover:bg-gray-50 w-[152px] h-[56px] text-gray-900 font-[600] mt-6 text-[16px]">Learn More</Button>
                    </div>
                    

                </section>
            ),
        },
        {
            title: "Podcasters",
            value: "Podcasters",
             content: (
                <section className=" space-y-5 w-[90%] h-[303px] p-[50px]  flex justify-between items-center rounded-[10px]  bg-gradient-to-b from-purple-50 via-purple-200 to-purple-600  font-[600]  ">

                    <div className="flex flex-col   space-y-[20px] text-gray-900 ">
                        <h1 className="font-bold text-[40px]">Go from brief to broadcast instantly</h1>
                        <p className="w-[672px] text-gray-800/80 text-[20px]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                        <Button className="bg-white hover:bg-gray-50 w-[152px] h-[56px] text-gray-900 font-[600] mt-6 text-[16px]">Learn More</Button>
                    </div>
                    

                </section>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px]   flex flex-col  mx-auto w-[95%]  ">
            <Tabs tabs={tabs} />
        </div>
    );
}

