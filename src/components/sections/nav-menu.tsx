import React, { useState } from "react";
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Define a type for the navigation items
type NavItem = {
  title: string
  href?: string
  description?: string
  features?: string[]
  children?: NavItem[]
}

const navigationData: NavItem[] = [
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Products",
    children: [
      {
        title: "Testimonial Software",
        href: "/products/testimonial-software",
        description: "Collect, manage and share customer testimonials with ease.",
        features: ["Collect", "Manage", "Share", "Analysis"]
      },
      {
        title: "Target Segments",
        href: "/products/segments",
        description: "Solutions tailored for different business types.",
        features: ["SaaS", "Creators", "Freelancers", "Sales Teams", "Agencies"]
      },
      // ... other products
    ]
  },
  {
    title: "Resources",
    children: [
      {
        title: "Blog",
        href: "/blog",
        description: "Guides, case studies and insights on social proof.",
        features: ["Guides", "Case Studies", "Office Hours", "Build in Public"]
      },
      // ... other resources
    ]
  },
  {
    title: "Use Cases",
    children: [
      {
        title: "Platform Integrations",
        href: "/use-cases/integrations",
        description: "Connect with your favorite platforms.",
        features: ["Shopify", "WordPress", "Webflow", "More..."]
      }
    ]
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Compare",
    href: "/compare"
  }
]

export function NavMenu() {
  return (
    <div className="flex items-center gap-4">
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="space-x-2">
          {navigationData.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.children ? (
                <>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className={cn(
                      "grid gap-3 p-3",
                      item.children.length > 1 ? "w-[600px] md:w-[700px] md:grid-cols-2 lg:w-[900px]" : "w-[400px]"
                    )}>
                      {item.children.map((child) => (
                        <ListItem
                          key={child.title}
                          title={child.title}
                          href={child.href}
                        >
                          <div>
                            <p className="mb-2">{child.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {child.features?.map((feature) => (
                                <Badge key={feature} variant="secondary">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

// Update the mobile menu
NavMenu.Mobile = function MobileNav() {
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (menu: string) => {
    setOpenMenus(current => 
      current.includes(menu) 
        ? current.filter(item => item !== menu)
        : [...current, menu]
    )
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
        <nav className="flex flex-col space-y-4 mt-6">
          {navigationData.map((item) => (
            item.children ? (
              <div key={item.title} className="space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-between"
                  onClick={() => toggleMenu(item.title)}
                >
                  {item.title}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes(item.title) ? 'rotate-180' : ''}`} />
                </Button>
                {openMenus.includes(item.title) && (
                  <div className="pl-4 space-y-2">
                    {item.children.map((child) => (
                      <div key={child.title} className="space-y-2">
                        <a 
                          href={child.href}
                          className="block p-3 text-sm hover:bg-accent rounded-sm"
                        >
                          <div className="font-medium">{child.title}</div>
                          <p className="text-sm text-muted-foreground">{child.description}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {child.features?.map((feature) => (
                              <Badge key={feature} variant="secondary">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={item.title} href={item.href} className="p-3 text-sm hover:bg-accent rounded-sm">
                {item.title}
              </a>
            )
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="w-full">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-sm p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
            "w-full",
            className
          )}
          {...props}
        >
          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium leading-none">{title}</div>
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
