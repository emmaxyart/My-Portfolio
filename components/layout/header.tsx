import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Mail, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/emmaxyart", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/emmanuel-edobor-4b8ba6339/", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:emmanueledobor34@gmail.com?subject=Portfolio Contact", label: "Email" }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-wine/20 bg-white-smoke/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo - bigger size */}
        <a href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold">Edobor Emmanuel Ucheka</span>
        </a>

        <div className="flex items-center space-x-4">
          {/* Navigation links - desktop only */}
          <div className="hidden md:flex space-x-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <ThemeToggle />
          
          {/* Mobile menu - only shows on mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex flex-col space-y-3">
                  <h2 className="text-lg font-semibold">Navigation</h2>
                  {["About", "Skills", "Projects", "Contact"].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-3">
                  <h2 className="text-lg font-semibold">Connect</h2>
                  <div className="flex items-center space-x-2">
                    {socialLinks.map((item) => (
                      <Button key={item.label} variant="outline" size="icon" asChild>
                        <Link href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.icon}
                          <span className="sr-only">{item.label}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

