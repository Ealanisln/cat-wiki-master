"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import router from "next/router";

interface Breed {
  id: string; // Assuming id is a string
  name: string;
}

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [breeds, setBreeds] = useState<Breed[]>([]); // State to hold fetched breeds

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await axios.get("/breeds", {
          baseURL: "https://api.thecatapi.com/v1",
          headers: {
            "x-api-key": process.env.API_CAT_KEY,
          },
        });

        const breedData: Breed[] = response.data.map((breed: any) => ({
          id: breed.id,
          name: breed.name,
        }));
        setBreeds(breedData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBreeds();
  }, []); // Empty dependency array means this effect runs only on mount

  return (
    <div className="w-full">
      <div className="mx-4 md:mx-8 lg:mx-16">
        <div
          className="flex mx-auto rounded-t-3xl bg-no-repeat bg-cover bg-center
          bg-[url('../src/assets/images/Herosm.png')]
          md:bg-[url('../src/assets/images/Heromd.png')]
          xl:bg-[url('../src/assets/images/Herolg.png')]"
        >
          <div className="pt-6 lg:pt-14 px-8 md:px-12 lg:px-20">
            <Image
              alt="logo cat"
              src="/logo-mobile.png"
              width={100}
              height={100}
            />

            <h2 className="text-white text-md md:text-lg mb-2 md:mb-8 pt-2 pb-4">
              Get to know more about <br />
              your cat breed.
            </h2>
            <div className="relative text-gray-600 pb-8 md:pb-28">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    {value
                      ? breeds.find((breed) => breed.id === value)?.name // Access the breed name using .name
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
                          key={breed.id} // Use breed.id as the key
                          onSelect={() => {
                            setValue(breed.id); // Set breed ID as the value
                            setOpen(false);
                            router.push(
                              `/breeds/${encodeURIComponent(breed.id)}`
                            );
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === breed.id ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {breed.name} {/* Display breed name */}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
