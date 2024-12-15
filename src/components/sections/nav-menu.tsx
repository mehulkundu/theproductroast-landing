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

const products = [
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
  {
    title: "Features",
    href: "/products/features",
    description: "Powerful tools to showcase social proof.",
    features: ["Wall of Love", "Widgets", "Video Embeds", "Templates", "Popups"]
  },
  {
    title: "Solutions",
    href: "/products/solutions",
    description: "Integrate testimonials across your tech stack.",
    features: ["Chrome Extension", "Migration", "Newsletter Integration"]
  }
]

const resources = [
  {
    title: "Blog",
    href: "/blog",
    description: "Guides, case studies and insights on social proof.",
    features: ["Guides", "Case Studies", "Office Hours", "Build in Public"]
  },
  {
    title: "Examples & Templates",
    href: "/resources/examples",
    description: "Real-world examples and ready-to-use templates.",
    features: ["Testimonial Examples", "Swipe Files", "Templates"]
  }
]

const integrations = [
  {
    title: "Platform Integrations",
    href: "/use-cases/integrations",
    description: "Connect with your favorite platforms.",
    platforms: ["Shopify", "WordPress", "Webflow", "More..."]
  }
]

export function NavMenu() {
  return (
    <div className="flex items-center gap-4">
      {/* Desktop Menu - Hidden on Mobile */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[600px] gap-3 p-4 md:w-[700px] md:grid-cols-2 lg:w-[900px]">
                {products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                  >
                    <div>
                      <p className="mb-2">{product.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <span key={feature} className="text-xs bg-muted px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[600px] gap-3 p-4 md:w-[700px] md:grid-cols-2">
                {resources.map((resource) => (
                  <ListItem
                    key={resource.title}
                    title={resource.title}
                    href={resource.href}
                  >
                    <div>
                      <p className="mb-2">{resource.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {resource.features.map((feature) => (
                          <span key={feature} className="text-xs bg-muted px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[400px] gap-3 p-4">
                {integrations.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    <div>
                      <p className="mb-2">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.platforms.map((platform) => (
                          <span key={platform} className="text-xs bg-muted px-2 py-1 rounded">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/pricing" className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/compare" className={navigationMenuTriggerStyle()}>
              Compare
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

// Export the MobileNav as a property of NavMenu
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
          <a href="/about" className="px-3 py-2 text-sm hover:bg-accent rounded-md">
            About
          </a>

          <div className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-between"
              onClick={() => toggleMenu('products')}
            >
              Products
              <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('products') ? 'rotate-180' : ''}`} />
            </Button>
            {openMenus.includes('products') && (
              <div className="pl-4 space-y-2">
                {products.map((product) => (
                  <div key={product.title} className="space-y-2">
                    <a 
                      href={product.href}
                      className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                    >
                      <div className="font-medium">{product.title}</div>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {product.features.map((feature) => (
                          <span key={feature} className="text-xs bg-muted px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-between"
              onClick={() => toggleMenu('resources')}
            >
              Resources
              <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('resources') ? 'rotate-180' : ''}`} />
            </Button>
            {openMenus.includes('resources') && (
              <div className="pl-4 space-y-2">
                {resources.map((resource) => (
                  <div key={resource.title} className="space-y-2">
                    <a 
                      href={resource.href}
                      className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                    >
                      <div className="font-medium">{resource.title}</div>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {resource.features.map((feature) => (
                          <span key={feature} className="text-xs bg-muted px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-between"
              onClick={() => toggleMenu('use-cases')}
            >
              Use Cases
              <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('use-cases') ? 'rotate-180' : ''}`} />
            </Button>
            {openMenus.includes('use-cases') && (
              <div className="pl-4 space-y-2">
                {integrations.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <a 
                      href={item.href}
                      className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                    >
                      <div className="font-medium">{item.title}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.platforms.map((platform) => (
                          <span key={platform} className="text-xs bg-muted px-2 py-1 rounded">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="/pricing" className="px-3 py-2 text-sm hover:bg-accent rounded-md">
            Pricing
          </a>

          <a href="/compare" className="px-3 py-2 text-sm hover:bg-accent rounded-md">
            Compare
          </a>
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
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
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
