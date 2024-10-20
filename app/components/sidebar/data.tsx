import { Icon } from "@iconify-icon/react";

// This is sample data.
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: (
        <Icon
          icon="lucide:gallery-vertical-end"
          height={24}
          className="shrink-0"
        />
      ), // GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: (
        <Icon icon="lucide:audio-waveform" height={24} className="shrink-0" />
      ), // AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: <Icon icon="lucide:command" height={24} className="shrink-0" />, // Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: <Icon icon="lucide:square-terminal" height={24} />, // SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: <Icon icon="lucide:bot" height={24} />, // Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: <Icon icon="lucide:book-open" height={24} />, // BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: <Icon icon="lucide:settings" height={24} />, // Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: <Icon icon="lucide:frame" height={24} />, // Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: <Icon icon="lucide:pie-chart" height={24} />, // PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: <Icon icon="lucide:map" height={24} />, // MapIcon,
    },
  ],
};
