import type { ComponentProps } from "react";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavProjects } from "@/components/sidebar/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/ui/sidebar";
import { data } from "./data";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { Button } from "@/ui/button";
import { ComboBoxResponsive } from "@/components/combobox";

const profileRoutes = [
  { title: "Min side", url: "#" },
  { title: "Min profil", url: "#" },
  { title: "Mine utlegg", url: "#" },
  { title: "Logg ut", url: "#" },
];

const user = {
  name: "shadcn",
  profilePicture: "",
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const { isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <ProfileMenu isMobile={isMobile} />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <LocationPicker isMobile={isMobile} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

function ProfileMenu({ isMobile }: { isMobile?: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar>
            <AvatarImage
              // should fetch the user's avatar from the server
              src={user.profilePicture}
              className="bg-transparent"
            />
            <AvatarFallback className="bg-transparent">
              <Icon icon="lucide:user" height={24} />
            </AvatarFallback>
          </Avatar>
          <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="start"
        side={isMobile ? "bottom" : "right"}
        sideOffset={4}
      >
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        {profileRoutes.map((item) => (
          <Link to={item.url} key={item.title}>
            <DropdownMenuItem key={item.title} className="gap-2 p-2 ">
              <Button
                role="link"
                variant="secondary"
                className="w-full text-left"
              >
                {item.title}
              </Button>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LocationPicker({ isMobile }: { isMobile?: boolean }) {
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
