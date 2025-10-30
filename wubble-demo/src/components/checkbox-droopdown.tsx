'use client';

import * as React from 'react';
import { Button } from '@/components/button-1';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'dicons';
import { cn } from '@/lib/utils';

interface MultiSelectDropdownProps {
  label?: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  buttonLabel?: string;
  className?:string;
}

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  label,
  options,
  selected,
  onChange,
  buttonLabel = 'Select Options',
  className
}) => {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn(`min-w-[180px] justify-between bg-background text-black hover:bg-background`,className)}>
          {selected.length > 0 ? selected.join(', ') : buttonLabel}
          <ChevronDown/>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
        {label && <DropdownMenuSeparator />}

        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={selected.includes(option)}
            onCheckedChange={() => toggleOption(option)}
            onSelect={(e) => e.preventDefault()} 
            className='text-black hover:text-black'// prevents closing after click
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
