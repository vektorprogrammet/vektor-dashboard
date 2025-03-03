import { Icon } from "@iconify-icon/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Separator } from "@radix-ui/react-separator";
import { useState } from "react";
import { Link, Outlet } from "react-router";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/ui/sidebar";

const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "",
};

function UserMenu({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const isMobile = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              tooltip="User menu"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <Icon icon="lucide:chevrons-up-down" className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Icon icon="lucide:badge-check" />
                Konto
              </DropdownMenuItem>
							<Link to={"dashboard/profile"}>
								<DropdownMenuItem>
									<Icon icon="lucide:user" />
									Profil
								</DropdownMenuItem>
							</Link>
              <DropdownMenuItem>
                <Icon icon="lucide:receipt" />
                Utlegg
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon icon="lucide:bell" />
                Notifikasjoner
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Icon icon="lucide:log-out" />
              Logg ut
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
const mainLinks = [
  {
    title: "Opptak",
    url: "#",
    icon: "lucide:notebook-pen",
    isActive: true,
    links: [
      {
        title: "Intervjufordeling",
        url: "#",
      },
      {
        title: "Intervjuskjema",
        url: "#",
      },
    ],
  },
  {
    title: "Statistikk",
    url: "#",
    icon: "lucide:chart-line",
    links: [
      {
        title: "Opptak",
        url: "#",
      },
      {
        title: "Utlegg",
        url: "#",
      },
    ],
  },
  {
    title: "Informasjon",
    url: "#",
    icon: "lucide:info",
    links: [
      {
        title: "Artikler",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
      {
        title: "Stand",
        url: "#",
      },
    ],
  },
  {
    title: "Data",
    url: "#",
    icon: "lucide:database",
    links: [
      {
        title: "Arrangementer",
        url: "#",
      },
      {
        title: "Attester",
        url: "#",
      },
      {
        title: "Assistenter",
        url: "#",
      },
      {
        title: "Avdelinger",
        url: "#",
      },
      {
        title: "Brukere",
        url: "#",
      },
      {
        title: "Brukergruppesamlinger",
        url: "#",
      },
      {
        title: "Hovedstyret",
        url: "#",
      },
      {
        title: "Opptak",
        url: "#",
      },
      {
        title: "Opptaksperioder",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Teaminteresse",
        url: "#",
      },
      {
        title: "Sponsorer",
        url: "#",
      },
      {
        title: "Skoler",
        url: "#",
      },
      {
        title: "Linjer",
        url: "#",
      },
      {
        title: "Undersøkelser",
        url: "#",
      },
      {
        title: "Vikarer",
        url: "#",
      },
    ],
  },
  {
    title: "Annet",
    url: "#",
    icon: "lucide:settings",
    links: [
      {
        title: "Access Control",
        url: "#",
      },
      {
        title: "Kontrollpanel",
        url: "#",
      },
      {
        title: "Timeplan",
        url: "#",
      },
      {
        title: "Epostlister",
        url: "#",
      },
      {
        title: "Slab",
        url: "#",
      },
    ],
  },
];

function NavLinks({
  links,
}: {
  links: {
    title: string;
    url: string;
    icon: string;
    isActive?: boolean;
    links?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {links.map((link) => {
          const iconComponent = (
            <Icon icon={link.icon} height={16} className="size-4 shrink-0" />
          );
          if (!link.links) {
            return (
              <SidebarMenuItem key={link.title}>
                <SidebarMenuButton asChild>
                  <Link to={link.url}>
                    {iconComponent}
                    <span>{link.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }
          return (
            <Collapsible
              key={link.title}
              asChild
              defaultOpen={link.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={link.title}>
                    {iconComponent}
                    <span>{link.title}</span>
                    <Icon
                      icon="lucide:chevron-right"
                      className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {link.links?.map((subLink) => (
                      <SidebarMenuSubItem key={subLink.title}>
                        <SidebarMenuSubButton asChild>
                          <Link to={subLink.url}>
                            <span>{subLink.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
const projectsData = [
  {
    name: "Design Engineering",
    url: "#",
    icon: "lucide:frame",
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: "lucide:pie-chart",
  },
  {
    name: "Travel",
    url: "#",
    icon: "lucide:map",
  },
];
function NavItems({
  items,
}: {
  items: {
    name: string;
    url: string;
    icon: string;
  }[];
}) {
  const isMobile = useSidebar();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link to={item.url}>
                <Icon
                  icon={item.icon}
                  height={16}
                  className="size-4 shrink-0"
                />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <Icon icon="lucide:more-horizontal" />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Icon
                    icon="lucide:folder"
                    className="text-muted-foreground"
                  />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon
                    icon="lucide:forward"
                    className="text-muted-foreground"
                  />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Icon
                    icon="lucide:trash-2"
                    className="text-muted-foreground"
                  />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <Icon
              icon="lucide:more-horizontal"
              className="text-sidebar-foreground/70"
            />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}

const departments = ["Trondheim", "Bergen", "Ås"];

function StatusMenu({
  subTitle,
  label,
  status,
  icon,
}: {
  subTitle: string;
  label: string;
  status: string[];
  icon: string;
}) {
  const [activeStatus, setActiveStatus] = useState(status[0]);
  const isMobile = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              tooltip={label}
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                <Icon icon={icon} height={20} className="size-5 shrink-0" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{activeStatus}</span>
                <span className="truncate text-xs">{subTitle}</span>
              </div>
              <Icon icon="lucide:chevrons-up-down" className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              {label}
            </DropdownMenuLabel>
            {status.map((status) => (
              <DropdownMenuItem
                key={status}
                onClick={() => setActiveStatus(status)}
                className="gap-2 p-2"
              >
                {status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default function Layout() {
  /* const [opened, { toggle }] = useDisclosure();
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (!userId) {
    return redirect("/sign-in");
  } */
  return (
    <SidebarProvider>
      <aside>
        <Sidebar variant="inset" collapsible="icon">
          <SidebarHeader>
            {/* User menu */}
            <UserMenu user={user} />
          </SidebarHeader>
          <SidebarContent>
            <nav aria-label="primary">
              {/* Primary navigation */}
              <NavLinks links={mainLinks} />
              <NavItems items={projectsData} />
            </nav>
          </SidebarContent>
          <SidebarFooter className="p-2 m-0">
            <nav aria-label="secondary">
              {/* Secondary navigation */}
              <SidebarGroup className="mt-auto group-data-[collapsible=icon]:p-0 transition-[padding]">
                <SidebarGroupContent>
                  <SidebarMenu>
                    {[
                      { title: "Support", url: "#", icon: "lucide:life-buoy" },
                      { title: "Feedback", url: "#", icon: "lucide:send" },
                    ].map((link) => (
                      <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton
                          asChild
                          size="sm"
                          tooltip={link.title}
                        >
                          <Link to="#">
                            <Icon
                              icon={link.icon}
                              height={16}
                              className="size-4"
                            />
                            <span>{link.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </nav>
            <StatusMenu
              subTitle="Avdeling"
              label="Avdelinger"
              icon="lucide:map-pinned"
              status={departments}
            />
          </SidebarFooter>
        </Sidebar>
      </aside>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
