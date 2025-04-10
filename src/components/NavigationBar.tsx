
import React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Home, Info, FileText, Calendar, Link2 } from "lucide-react";

const navItems = [
  { label: "Home", icon: <Home className="mr-2" size={16} />, href: "#" },
  { label: "About", icon: <Info className="mr-2" size={16} />, href: "#about" },
  { label: "Resources", icon: <FileText className="mr-2" size={16} />, href: "#resources" },
  { label: "Timeline", icon: <Calendar className="mr-2" size={16} />, href: "#timeline" },
  { label: "Links", icon: <Link2 className="mr-2" size={16} />, href: "#links" }
];

export const NavigationBar = () => {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <NavigationMenu className="px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur border border-gray-800 shadow-xl">
        <NavigationMenuList className="space-x-1 md:space-x-2">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink 
                href={item.href}
                className={cn(
                  "px-3 py-2 flex items-center rounded-full text-sm transition-colors",
                  "hover:bg-gray-800 hover:text-blue-400",
                  "focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                )}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
