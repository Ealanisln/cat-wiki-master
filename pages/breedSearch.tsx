"use client"

import * as React from "react"
import axios from "axios"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [breeds, setBreeds] = React.useState([]); // State to hold fetched breeds

  React.useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await axios.get('/breeds', {
          baseURL: 'https://api.thecatapi.com/v1',
          headers: {
            'x-api-key': process.env.API_CAT_KEY,
          },
        });

        const breedNames = response.data.map((breed:any) => breed.name);
        setBreeds(breedNames);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBreeds();
  }, []); // Empty dependency array means this effect runs only on mount


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? breeds.find((breed) => breed === value)
            : "Select breed..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search breed..." />
          <CommandEmpty>No breed found.</CommandEmpty>
          <CommandGroup>
          {breeds.map((breed) => (
            <CommandItem
              key={breed}
              onSelect={() => {
                setValue(breed);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === breed ? "opacity-100" : "opacity-0"
                )}
              />
              {breed}
            </CommandItem>
          ))}
        </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}