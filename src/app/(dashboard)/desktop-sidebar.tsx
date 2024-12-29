'use client';
import { Coins, HomeIcon, Layers2, ShieldCheck } from 'lucide-react';
import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const routes = [
  {
    label: '首页',
    icon: HomeIcon,
    href: '/',
  },
  {
    label: '流程',
    icon: Layers2,
    href: 'flows',
  },
  {
    label: '认证',
    icon: ShieldCheck,
    href: 'credentials',
  },
  {
    label: '账单',
    icon: Coins,
    href: 'billing',
  },
];

const DesktopSidebar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <div
      className="hidden relative md:block min-w-[280px] max-w-[280px]
  h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground
  text-muted-foreground border-r-2 border-separate
  "
    >
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="flex flex-col gap-1 px-2 py-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 cursor-pointer',
              isActive(route.href) && 'bg-primary/10 text-primary font-medium'
            )}
          >
            <route.icon
              className={cn('h-5 w-5', isActive(route.href) && 'text-primary')}
            />
            <span>{route.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopSidebar;
