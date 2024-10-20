import { Outlet } from "@remix-run/react";
import { Separator } from "@radix-ui/react-separator";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/ui/sidebar";
import { ComboBoxResponsive } from "@/components/combobox";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/ui/breadcrumb";

const routes = [
  { name: "Home", path: "/home" },
  { name: "Brukere", path: "/users" },
  { name: "Assistenter", path: "/assistants" },
  { name: "Opptak", path: "/admission" },
  { name: "Statistikk", path: "/statistics" },
  { name: "Skoler", path: "/schools" },
  { name: "Teams", path: "/teams" },
  { name: "Interesse", path: "/interest" },
];

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
      <AppSidebar />
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

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );

  /* return (
    <AppShell
      padding="md"
      header={{
        height: 60,
      }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} size="sm" />
          <MantineLogo size={30} />
          <ActionToggle />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <DoubleNavbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <div>Hello, {userId}!</div>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  ); */
}
