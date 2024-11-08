'use client';

import ReactDOM from 'react-dom';

export default function PreloadResources() {
  ReactDOM.preload(
    'https://mdpabel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.24a525c6.jpg&w=1200&q=75',
    { as: 'image', fetchPriority: 'high' },
  );

  return null;
}
