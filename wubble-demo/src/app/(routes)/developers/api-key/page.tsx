import SideBarLayout from "@/app/(routes)/SideBarLayout"
import { AnimatedModal } from "@/components/ui/animated-modal"
import { Button } from "@/components/ui/button"
import Switch, { SwitchControl } from "@/components/ui/switch"
import { MoveRight } from "dicons"
import { Box, ChevronsLeftRightEllipsis, MoveLeft, Music4, Plus } from "lucide-react"

const APIKeyPage = () => {
    console.log("Switch imported as:", Switch);

    return (
        <div>
            <SideBarLayout>
                <main className=' p-4  w-full flex flex-col items-center space-y-4 pb-10'>
                    <div className='flex justify-start w-[95%] mt-[2rem] font-bold text-3xl'>
                        <h1>API keys</h1>
                    </div>
                    <div className='w-[95%]  rounded-xl bg-gray-200 border p-6 flex flex-col items-center space-y-6 py-15'>
                        <div className="flex items-center gap-3">
                            <div className="bg-background p-3  rounded-md">
                                <Box />
                            </div>
                            <div className="flex">
                                <ChevronsLeftRightEllipsis />
                            </div>
                            <div className="bg-background p-3 rounded-md">
                                <Music4 />
                            </div>
                        </div>
                        <p className="w-[48%] flex  justify-center text-center">
                            An API key lets you connect to our API and use its features. You can create multiple keys with different access levels.
                        </p>
                        <AnimatedModal
                            trigger={
                                <>

                                    <Plus />
                                    <p>Create Key</p>

                                </>}
                            title="Create API Key"
                            className="w-[40rem]"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Enter your API key name here"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">

                                        <span className="font-medium">Restrict Key</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                    </label>
                                </div>
                                <div className="flex">
                                    <p className="w-[20rem]">Text to music</p>
                                    <Switch name="full-width" style={{ width: "100%" }}>
                                        <SwitchControl
                                            defaultChecked
                                            label="Access"
                                            size="large"
                                            value="Access"
                                        />
                                        <SwitchControl label="No Access" size="large" value="No Access" />
                                    </Switch>
                                </div>
                                <div className="flex">
                                    <p className="w-[20rem]">Text to Voiceovers</p>
                                    <Switch name="full-width" style={{ width: "100%" }}>
                                        <SwitchControl
                                            defaultChecked
                                            label="Access"
                                            size="large"
                                            value="Access"
                                        />
                                        <SwitchControl label="No Access" size="large" value="No Access" />
                                    </Switch>
                                </div>
                                 <div className="flex">
                                    <p className="w-[20rem]">Text to audio effects</p>
                                    <Switch name="full-width" style={{ width: "100%" }}>
                                        <SwitchControl
                                            defaultChecked
                                            label="Access"
                                            size="large"
                                            value="Access"
                                        />
                                        <SwitchControl label="No Access" size="large" value="No Access" />
                                    </Switch>
                                </div>
                                <div className="flex">
                                    <p className="w-[20rem]">Lyric generation</p>
                                    <Switch name="full-width" style={{ width: "100%" }}>
                                        <SwitchControl
                                            defaultChecked
                                            label="Access"
                                            size="large"
                                            value="Access"
                                        />
                                        <SwitchControl label="No Access" size="large" value="No Access" />
                                    </Switch>
                                </div>
                                <div className="flex">
                                    <p className="w-[20rem]">Stem separation </p>
                                    <Switch name="full-width" style={{ width: "100%" }}>
                                        <SwitchControl
                                            defaultChecked
                                            label="Access"
                                            size="large"
                                            value="Access"
                                        />
                                        <SwitchControl label="No Access" size="large" value="No Access" />
                                    </Switch>
                                </div>
                                
                                <div className="pt-4 flex justify-end gap-3">
                                    <Button
                                        variant={"outline"}
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Create Key
                                    </Button>
                                </div>
                            </div>
                        </AnimatedModal>

                    </div>
                </main>
            </SideBarLayout>
        </div>
    )
}

export default APIKeyPage