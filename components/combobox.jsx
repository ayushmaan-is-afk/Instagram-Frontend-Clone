"use client"

import * as React from "react"
import { CheckIcon, ChevronDown, SquarePen} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ids = [
  {
    value: "AbcdEfgh",
    label: "AbcdEfgh",
  },
  {
    value: "Xyz1234",
    label: "Xyz1234",
  },
  {
    value: "random_gibberish",
    label: "random_gibberish",
  },
]

export function Select_id() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex justify-between">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-300px justify-start border-none text-sm flex flex-row bg-sidebar text-sidebar-foreground p-3 drop-shadow-none"
        >
          {value
            ? ids.find((ids) => ids.value === value)?.label
            : ids[0].label}
          <ChevronDown className="ml-2 h-4 shrink-0 opacity-50" />
        </Button>
        <SquarePen className="" />
            </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandList className="w-full">
            <CommandGroup>
              {ids.map((ids) => (
                <CommandItem
                  key={ids.value}
                  value={ids.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === ids.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {ids.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}