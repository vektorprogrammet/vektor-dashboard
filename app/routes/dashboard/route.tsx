import { Link, Outlet } from "@remix-run/react";
import { ActionToggle } from "./ActionToggle";
import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useState } from "react";
import { UnstyledButton, Tooltip, Title, rem } from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./DoubleNavbar.module.css";
import { useClickOutside } from "@mantine/hooks";

const mainLinksMockdata = [
  { icon: IconHome2, label: "Home", route: "/" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconUsers, label: "Users", route: "/users" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
];

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

const linksMockdata = [
  "Security",
  "Settings",
  "Dashboard",
  "Releases",
  "Account",
  "Orders",
  "Clients",
  "Databases",
  "Pull Requests",
  "Open Issues",
  "Wiki pages",
];

function DoubleNavbar() {
  const [active, setActive] = useState("Releases");
  const [activeLink, setActiveLink] = useState("Settings");
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  const mainLinks = mainLinksMockdata.map((link) => {
    const button = (
      <Tooltip
        label={link.label}
        position="right"
        withArrow
        transitionProps={{ duration: 0 }}
        key={link.label}
      >
        <UnstyledButton
          onClick={() => setActive(link.label)}
          className={classes.mainLink}
          data-active={link.label === active || undefined}
        >
          <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    );
    if (link.route) {
      return (
        <Link to={link.route} key={link.label}>
          {button}
        </Link>
      );
    }
    return button;
  });

  const links = linksMockdata.map((link) => (
    <a
      className={classes.link}
      data-active={activeLink === link || undefined}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </div>
    </nav>
  );
}

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();
  return (
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
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
