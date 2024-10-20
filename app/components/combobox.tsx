"use client";

import { Icon } from "@iconify-icon/react";
import { useMediaQuery } from "@mantine/hooks";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";

type Item = {
  value: string;
  label: string;
};

type ComboBoxProps = {
  items: Item[];
  defaultItem?: Item;
  className?: string;
};

export function ComboBoxResponsive({
  items,
  defaultItem,
  className,
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedItem, setSelectedItem] = React.useState<Item | null>(
    defaultItem ?? null,
  );

  function ItemList({
    setOpen,
    setSelectedItem,
  }: {
    setOpen: (open: boolean) => void;
    setSelectedItem: (item: Item | null) => void;
  }) {
    return (
      <Command>
        <CommandInput placeholder="Filter items..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(value) => {
                  setSelectedItem(
                    items.find((priority) => priority.value === value) || null,
                  );
                  setOpen(false);
                }}
              >
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("min-w-min justify-start", className)}
          >
            <Icon icon="lucide:map-pinned" />
            {selectedItem ? <>{selectedItem.label}</> : <>+ Set item</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <ItemList setOpen={setOpen} setSelectedItem={setSelectedItem} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className={cn("min-w-min justify-start", className)}
        >
          <Icon icon="lucide:map-pinned" />
          {selectedItem ? <>{selectedItem.label}</> : <>+ Set item</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <ItemList setOpen={setOpen} setSelectedItem={setSelectedItem} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
