import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CountryContext } from "@/context/CountryContext";
import { options } from "@/lib/constant";

const OriginCountryFlight = () => {
  const { countryData, setCountryData } = useContext(CountryContext);
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    code: "IN",
  });
  const [countryCode, setCountryCode] = useState([]);

  const fetchCountryCode = async () => {
    const res = await fetch(
      "https://api.liteapi.travel/v3.0/data/countries?timeout=4",
      options
    );
    const data = await res.json();
    setCountryCode(data.data);
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  const handleClick = (country) => {
    setSelectedCountry({ name: country.name, code: country.code });
    setCountryData({ name: country.name, code: country.code });
  };


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="sm:w-[250px] justify-between w-full"
        >
          {selectedCountry.name ? selectedCountry.name : "Select country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[230px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countryCode.map((country) => (
                <CommandItem
                  key={country.code}
                  value={country.code}
                  onSelect={() => {
                    handleClick(country); // Pass country to handleClick
                    setOpen(false); // Close the popover after selection
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCountry.code === country.code
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {country.name} ({country.code})
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default OriginCountryFlight;
