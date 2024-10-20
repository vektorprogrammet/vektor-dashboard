import { Icon } from "@iconify-icon/react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/ui/sidebar";
import { ComboBoxResponsive } from "../combobox";

export function LocationPicker() {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <ComboBoxResponsive
            items={[
              { label: "Trondheim", value: "trondheim" },
              { label: "Bergen", value: "bergen" },
              { label: "Ås", value: "ås" },
            ]}
            defaultItem={{ label: "Trondheim", value: "trondheim" }}
          />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
