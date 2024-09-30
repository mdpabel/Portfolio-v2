import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href='/'>Go back home</Link>
    </div>
  );
};

export default NotFound;
