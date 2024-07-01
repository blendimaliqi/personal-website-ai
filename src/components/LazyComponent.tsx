// components/LazyComponent.js
import React from 'react';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const LazyComponent = React.lazy(async () => {
  await sleep(2000); // Simulate a 2-second delay
  return import("../app/about/page");
});

export default LazyComponent;
