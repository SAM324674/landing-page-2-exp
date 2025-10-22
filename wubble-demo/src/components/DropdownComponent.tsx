import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

interface ComponentProps {
  ButtonText: React.ReactNode;
  Options:any[];
}

function DropDownComponent({ButtonText,Options}: ComponentProps) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            
            className=" shadow-none hover:text-white hover:bg-[#6a5ae7]/40 p-2 rounded-md focus:bg-[#6a5ae7]/40"
            aria-label="Open edit menu"
          >
            {ButtonText}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={6} className="p-[1rem] space-y-2 w-[20rem] border-8">
            {Options.map((option,index)=>(
                <DropdownMenuItem key={index+1} className="py-3.5">{option}</DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { DropDownComponent };
