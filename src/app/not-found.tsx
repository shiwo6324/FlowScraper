import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground mb-8">抱歉，您访问的页面不存在。</p>
      <Link href="/" className="text-primary hover:underline">
        返回首页
      </Link>
    </div>
  );
};

export default NotFound;
