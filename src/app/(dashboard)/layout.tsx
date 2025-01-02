import { Separator } from '@/components/ui/separator';
import React from 'react';
import DesktopSidebar from './desktop-sidebar';
import BreadcrumbHeader from './breadcrumb-header';
import { ThemeToggle } from '@/components/theme-toggle';
import MobileSidebar from './mobile-sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen ">
        <header
          className="flex  items-center justify-between px-6 py-4
        h-[50px] container"
        >
          <MobileSidebar />
          <BreadcrumbHeader />
          <div className="gap-1 flex items-center">
            <ThemeToggle />
          </div>
        </header>
        <Separator />
        <div className="overflow-auto ">
          <div className="flex-1 container py-4 text-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
