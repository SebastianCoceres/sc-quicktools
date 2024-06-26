"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
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

type comboboxItem = {
    value: string,
    label: string,
}

export function Combobox({
    items,
    onChangeValue
}: { items: comboboxItem[], onChangeValue: (value: string) => void }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    React.useEffect(() => {
        onChangeValue(items.find((item) => item.value.toLowerCase() === value)?.value || "")
    }, [value])

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
                        ? items.find((item) => item.value.toLowerCase() === value)?.label
                        : "Seleccionar..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command className="max-h-[30em]">
                    <CommandInput placeholder="Buscar..." />
                    <CommandEmpty>Nothing found.</CommandEmpty>
                    <CommandGroup className="overflow-y-auto scrollbars-thin">
                        {items.map((item) => (
                            <CommandItem
                                className="cursor-pointer"
                                key={item.value}
                                value={item.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {item.label}
                            </CommandItem>

                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
