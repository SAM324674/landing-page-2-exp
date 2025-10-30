"use client";
import React, { useId, useState } from "react";
import SideBarLayout from "../../SideBarLayout";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import AvatarUpload from "@/components/ImageUploader";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import ToggleSwitch from "@/components/toggle-switch";


const AccessibilityPage = () => {
    const [name, setName] = useState("Samiksha");
    const [email, setEmail] = useState("samikshagiri4@gmail.com");
    const id = useId();

    return (
        <SideBarLayout>
            <main className="p-8 flex flex-col items-center space-y-10 pb-[10rem]">
                <h1 className="text-3xl font-bold pt-10">Accessibility</h1>

                <div className="flex w-[73%] justify-start">
                    <ThemeToggle />
                </div>

                <div className="flex w-[70%] justify-between">
                    <div>
                        <h1 className="text-sm font-bold">Shortcuts require modifier</h1>
                        <p className="text-sm font-bold text-gray-500">Single key shortcuts require the use of the Alt modifier key</p>
                    </div>
                    <ToggleSwitch />

                </div>
                <div className="flex w-[70%] justify-between">
                    <div>
                        <h1 className="text-sm font-bold">High color contrast</h1>
                        <p className="text-sm font-bold text-gray-500">Higher contrast between text and backgrounds maintained, includinggradient backgrounds</p>
                    </div>
                    <ToggleSwitch />

                </div>
                <div className="flex w-[70%] justify-between">
                    <div>
                        <h1 className="text-sm font-bold">Captions</h1>
                        <p className="text-sm font-bold text-gray-500">Captions will be generated and displayed for all spoken-word video and audio content throughout Wubble</p>
                    </div>
                    <ToggleSwitch />

                </div>

                <div className="flex flex-col w-[70%] gap-3 ">
                    <Label htmlFor={id} className="text-sm font-bold">Autoplay Videos</Label>
                    <div className="w-[40%]">
                        <Select defaultValue="3">
                            <SelectTrigger id={id}>
                                <SelectValue placeholder="Select framework" defaultValue={"Use My System Preferences"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Use My System Preferences</SelectItem>
                                <SelectItem value="2">Autoplay videos on</SelectItem>
                                <SelectItem value="3">Autoplay videos off</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex flex-col w-[70%] gap-3 ">
                    <Label htmlFor={id} className="text-sm font-bold">Reduce motion when you view and present designs</Label>
                    <div className="w-[40%]">
                        <Select defaultValue="3">
                            <SelectTrigger id={id}>
                                <SelectValue placeholder="Select framework" defaultValue={"Use My System Preferences"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Use My System Preferences</SelectItem>
                                <SelectItem value="2">Reduce motion on</SelectItem>
                                <SelectItem value="3">Reduce motion off</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <p className="text-sm font-bold text-gray-500" >Reduce motion on your screen when you view and present music. This affects transitions, animations, masks, and overlays.</p>
                </div>
                <div className="flex w-[70%] justify-between">
                    <div>
                        <h1 className="text-sm font-bold">Increase on-screen message display time</h1>
                        <p className="text-sm font-bold text-gray-500">On screen messages will stay longer before dismissing</p>
                    </div>
                    <ToggleSwitch />

                </div>
            </main>
        </SideBarLayout>
    );
};

export default AccessibilityPage;
