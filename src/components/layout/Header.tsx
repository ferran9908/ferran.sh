'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'writing', href: '/writing', prefix: '01' },
  { name: 'about',   href: '/about',   prefix: '02' },
  { name: 'now',     href: '/now',     prefix: '03' },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-bold tracking-[0.12em] uppercase transition-all hover:text-primary"
            style={{ fontFamily: 'var(--font-orbitron), monospace' }}
          >
            <Terminal
              className="h-4 w-4 text-primary transition-all group-hover:drop-shadow-[0_0_6px_var(--cyan)]"
              strokeWidth={1.5}
            />
            <span
              className="text-primary cyber-title"
              style={{
                textShadow: '0 0 8px oklch(0.82 0.18 190 / 0.5)',
                fontSize: '0.85rem',
              }}
            >
              ferran.sh
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group relative flex items-center gap-1.5 px-3 py-1.5 text-xs tracking-widest uppercase transition-all',
                    active
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  )}
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  <span
                    className={cn(
                      'text-[0.55rem] transition-colors',
                      active ? 'text-primary opacity-70' : 'text-muted-foreground/40 group-hover:text-primary/60'
                    )}
                  >
                    {item.prefix}
                  </span>
                  {item.name}
                  {/* Active underline */}
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{
                        background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
                        boxShadow: '0 0 4px var(--cyan)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* System status indicator */}
          <div className="hidden sm:flex items-center gap-1.5 mr-2 text-[0.55rem] tracking-widest text-muted-foreground/50 uppercase">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--green)]"
              style={{ boxShadow: '0 0 4px var(--green)', animation: 'pulse-glow 3s ease-in-out infinite' }}
            />
            online
          </div>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-8 w-8 rounded-none border border-border/40 hover:border-primary/40 hover:bg-primary/5"
            >
              <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all text-primary dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all text-primary dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* Mobile menu */}
          <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none border border-border/40 hover:border-primary/40 hover:bg-primary/5"
              >
                <Menu className="h-3.5 w-3.5 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 rounded-none border-primary/30 bg-background/95 backdrop-blur"
            >
              {navigation.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  asChild
                  className="rounded-none text-xs tracking-widest uppercase font-mono"
                >
                  <Link href={item.href} className="w-full flex items-center gap-2">
                    <span className="text-primary/50 text-[0.55rem]">{item.prefix}</span>
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
