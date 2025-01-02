'use client';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Coins, HomeIcon, Layers2, ShieldCheck } from 'lucide-react';
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

const MobileSidebar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-background border-r">
        <div className="flex items-center justify-center gap-2 border-b p-4">
          <Logo />
          <SheetTitle className="sr-only">导航菜单</SheetTitle>
        </div>
        <div className="flex flex-col gap-1 px-2 py-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors',
                isActive(route.href) &&
                  'bg-accent text-accent-foreground font-medium'
              )}
            >
              <route.icon
                className={cn(
                  'h-5 w-5',
                  isActive(route.href) && 'text-accent-foreground'
                )}
              />
              <span>{route.label}</span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
