"use client";

import { Button } from "./ui/button";
import { Tabs } from "./ui/tabs";


export function PillsTabs() {
    const tabs = [
        {
            title: "Product",
            value: "product",
            content: (
                <section className=" space-y-5 w-[90%] h-[20rem] px-[8rem]  flex justify-between items-center rounded-md  bg-white  ">

                    <div className="flex flex-col   space-y-[2rem] text-black ">
                        <h1 className="text-4xl font-bold">Go from brief to broadcast instantly</h1>
                        <p className="w-[25rem]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                    </div>
                    <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] mt-11">Open studio</Button>

                </section>
            ),
        },
        {
            title: "Services",
            value: "services",
            content: (
                <section className=" space-y-5 w-[90%] h-[20rem] px-[8rem]  flex justify-between items-center rounded-md  bg-white  ">

                    <div className="flex flex-col   space-y-[2rem] text-black ">
                        <h1 className="text-4xl font-bold">Go from brief to broadcast instantly</h1>
                        <p className="w-[25rem]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                    </div>
                    <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] mt-11">Open studio</Button>

                </section>
            ),
        },
        {
            title: "Playground",
            value: "playground",
            content: (
                <section className=" space-y-5 w-[90%] h-[20rem] px-[8rem]  flex justify-between items-center rounded-md  bg-white  ">

                    <div className="flex flex-col   space-y-[2rem] text-black ">
                        <h1 className="text-4xl font-bold">Go from brief to broadcast instantly</h1>
                        <p className="w-[25rem]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                    </div>
                    <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] mt-11">Open studio</Button>

                </section>
            ),
        },
        {
            title: "Content",
            value: "content",
             content: (
                <section className=" space-y-5 w-[90%] h-[20rem] px-[8rem]  flex justify-between items-center rounded-md  bg-white  ">

                    <div className="flex flex-col   space-y-[2rem] text-black ">
                        <h1 className="text-4xl font-bold">Go from brief to broadcast instantly</h1>
                        <p className="w-[25rem]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                    </div>
                    <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] mt-11">Open studio</Button>

                </section>
            ),
        },
        {
            title: "Random",
            value: "random",
            content: (
                <section className=" space-y-5 w-[90%] h-[20rem] px-[8rem]  flex justify-between items-center rounded-md  bg-white   ">

                    <div className="flex flex-col   space-y-[2rem] text-black ">
                        <h1 className="text-4xl font-bold">Go from brief to broadcast instantly</h1>
                        <p className="w-[25rem]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

                    </div>
                    <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] mt-11">Open studio</Button>

                </section>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px]  flex flex-col  mx-auto w-[90%]  items-start justify-center border ">
            <Tabs tabs={tabs} />
        </div>
    );
}

