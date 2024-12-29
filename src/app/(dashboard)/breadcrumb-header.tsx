'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const BreadcrumbHeader = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-muted-foreground hover:text-foreground"
          >
            首页
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((path, index) => (
          <BreadcrumbItem key={path}>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbLink
              href={`/${paths.slice(0, index + 1).join('/')}`}
              className={`capitalize ${
                index === paths.length - 1
                  ? 'text-foreground pointer-events-none'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {path}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbHeader;
