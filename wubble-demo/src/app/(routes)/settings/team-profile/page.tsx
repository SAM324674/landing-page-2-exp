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
interface EditableFieldProps {
    label: string;
    value: string;
    onChange: (v: string) => void;
}
const languages = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
    { value: "chinese", label: "Chinese (Mandarin)" },
    { value: "japanese", label: "Japanese" },
    { value: "korean", label: "Korean" },
    { value: "hindi", label: "Hindi" },
    { value: "bengali", label: "Bengali" },
    { value: "portuguese", label: "Portuguese" },
    { value: "russian", label: "Russian" },
    { value: "arabic", label: "Arabic" },
    { value: "italian", label: "Italian" },
    { value: "turkish", label: "Turkish" },
    { value: "urdu", label: "Urdu" },
    { value: "thai", label: "Thai" },
    { value: "vietnamese", label: "Vietnamese" },
    { value: "indonesian", label: "Indonesian" },
    { value: "tamil", label: "Tamil" },
    { value: "telugu", label: "Telugu" },
    { value: "marathi", label: "Marathi" },
    { value: "punjabi", label: "Punjabi" },
    { value: "gujarati", label: "Gujarati" },
    { value: "malay", label: "Malay" },
    { value: "persian", label: "Persian (Farsi)" },
    { value: "swahili", label: "Swahili" },
    { value: "dutch", label: "Dutch" },
    { value: "greek", label: "Greek" },
    { value: "polish", label: "Polish" },
    { value: "hebrew", label: "Hebrew" },
    { value: "romanian", label: "Romanian" },
    { value: "czech", label: "Czech" },
    { value: "hungarian", label: "Hungarian" },
    { value: "swedish", label: "Swedish" },
    { value: "finnish", label: "Finnish" },
    { value: "norwegian", label: "Norwegian" },
    { value: "danish", label: "Danish" },
    { value: "filipino", label: "Filipino" },
    { value: "burmese", label: "Burmese" },
    { value: "nepali", label: "Nepali" },
    { value: "sinhalese", label: "Sinhalese" },
    { value: "malayalam", label: "Malayalam" },
    { value: "odia", label: "Odia" },
];

function DropDownWithSearch({ label }: { label: any }) {
    const id = useId();
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    return (
        <div className="space-y-2 min-w-[300px]">
            <Label htmlFor={id}>{label}</Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id={id}
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20"
                    >
                        <span className={cn("truncate", !value && "text-muted-foreground")}>
                            {value
                                ? languages.find((language) => language.value === value)?.label
                                : "Select framework"}
                        </span>
                        <ChevronDown
                            size={16}
                            strokeWidth={2}
                            className="shrink-0 text-muted-foreground/80"
                            aria-hidden="true"
                        />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
                    align="start"
                >
                    <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {languages.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue: any) => {
                                            setValue(currentValue === value ? "" : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        {framework.label}
                                        {value === framework.value && (
                                            <Check size={16} strokeWidth={2} className="ml-auto" />
                                        )}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
const EditableField: React.FC<EditableFieldProps> = ({
    label,
    value,
    onChange,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);

    const handleSave = () => {
        onChange(tempValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempValue(value); // revert to the original value
        setIsEditing(false);
    };

    return (
        <div className="mb-6 border-b border-gray-300 pb-4 w-full">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold">{label}</h1>

                {isEditing ? (
                    <div className="space-x-2">
                        <Button variant="default" onClick={handleSave}>
                            Save
                        </Button>
                        <Button variant="outline" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </div>
                ) : (
                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                        Edit
                    </Button>
                )}
            </div>

            {isEditing ? (
                <input
                    type="text"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full mt-2 focus:ring-2 focus:ring-blue-500"
                />
            ) : (
                <div className="mt-2 text-gray-800 dark:text-gray-200">{value}</div>
            )}
        </div>
    );
};

const TeamProfilePage = () => {
    const [name, setName] = useState("Wubble Design");
    const [description, setDescription] = useState("No team description");
    const id = useId();

    return (
        <SideBarLayout>
            <main className="p-8 flex flex-col items-center space-y-5 w-full">
                <h1 className="text-3xl font-bold pt-10">Team Profile</h1>
                <div className="flex justify-between items-center w-[60%]">
                    <AvatarUpload />
                    <div className="w-[20rem] flex justify-evenly">
                        <Button>Remove Photo</Button>
                        <Button>Change Photo</Button>
                    </div>
                </div>
                <div className="w-[60%] border border-gray-300 " />

                <div className="w-[60%] ">
                    <EditableField label="Name" value={name} onChange={setName} />
                    <EditableField label="Email" value={description} onChange={setDescription} />

                </div>
                <div className="w-[60%] flex items-center gap-4 -mt-16">
                    <div className="flex flex-col">
                        <h1 className=" font-bold pt-10">Leave team</h1>
                        <p className="w-full text-gray-500 font-bold my-4">If you go ahead, you’ll lose access to everything in this team, including your own tracks. Your
                            team will also lose content you haven’t shared with them yet.</p>
                    </div>
                    <Button variant={"outline"} className="font-bold">Leave Team</Button>
                </div>
            </main>
        </SideBarLayout>
    );
};

export default TeamProfilePage;
