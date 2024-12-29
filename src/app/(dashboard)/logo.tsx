import { Workflow } from 'lucide-react';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Workflow className="h-8 w-8 text-primary" />
      <div className="font-bold text-xl">
        <span className="text-muted-foreground">Scrape</span>
        <span className="text-primary">Flow</span>
      </div>
    </div>
  );
};

export default Logo;
