"use client";
import React, { useEffect, useRef, useState,useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  BoxCubeIcon,
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
  DocsIcon,
  SettingsGearIcon,
} from "../icons/index";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <PieChartIcon />,
    name: "Analytics",
    path: "/analytics",
  },
  {
    icon: <ListIcon />,
    name: "Tickets",
    path: "/tickets",
  },
  {
    icon: <BoxCubeIcon />,
    name: "Assets",
    path: "/assets",
  },
  {
    icon: <UserCircleIcon />,
    name: "Users",
    path: "/users",
  },
  {
    icon: <DocsIcon />,
    name: "Knowledge Base",
    path: "/knowledge-base",
  },
  {
    icon: <SettingsGearIcon />,
    name: "Settings",
    path: "/settings",
  },
];

const AppSidebar: React.FC = () => {
  const pathname = usePathname();
  return (
    <aside style={{ borderRight: '2px solid #14b8a6' }} className="fixed top-0 left-0 h-screen w-[90px] lg:w-[290px] bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 transition-all duration-300 ease-in-out z-50">
      <div className="py-8 flex justify-center lg:justify-start">
        <Link href="/" className="flex items-center gap-2 justify-center">
          <Image src="/logo.svg" alt="SageDesk Logo" width={40} height={40} className="invert-0 dark:invert-0 dark:brightness-100" />
          <span className="hidden lg:inline text-2xl font-bold text-gray-900 dark:text-white">SageDesk</span>
        </Link>
      </div>
      <nav className="flex flex-col gap-4 mt-8">
        {navItems.map((nav) => (
          <Link key={nav.name} href={nav.path || "#"} className={`flex items-center gap-3 px-6 py-3 rounded-lg transition font-medium text-lg ${pathname === nav.path ? 'bg-brand-50 text-brand-700 dark:bg-brand-900 dark:text-brand-200' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'}`}>
            <span>{nav.icon}</span>
            <span className="hidden lg:inline">{nav.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AppSidebar;