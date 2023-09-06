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

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [breeds, setBreeds] = useState([]); // State to hold fetched breeds

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await axios.get("/breeds", {
          baseURL: "https://api.thecatapi.com/v1",
          headers: {
            "x-api-key": process.env.API_CAT_KEY,
          },
        });

        const breedNames = response.data.map((breed: any) => breed.id);
        setBreeds(breedNames);
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
                            router.push(`/breeds/${encodeURIComponent(breed)}`);
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
