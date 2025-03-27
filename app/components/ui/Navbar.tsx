import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";

interface NavbarProps {
  isLoggedIn?: boolean;
}

export function Navbar({ isLoggedIn = false }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/50 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-xl">PayChain</span>
          </Link>
        </div>
        
        <div className="flex gap-4 items-center">
          <Link href="#features" className="hover:text-gray-300 hidden md:block">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-gray-300 hidden md:block">
            Pricing
          </Link>
          <Link href="#about" className="hover:text-gray-300 hidden md:block">
            About
          </Link>
          
          {isLoggedIn ? (
            <Link href="/dashboard">
              <Button 
                variant="gradient"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/auth/login">
              <Button 
                variant="outline"
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
} 