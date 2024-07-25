"use client"; 

import Globe from "./components/Globe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Globe />
      <div className="call-to-action">
        <h1>Call to action</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
          scelerisque nunc, et bibendum augue. Vestibulum ante ipsum primis in
          faucibus.
        </p>
        <button>Get started</button>
      </div>
    </main>
  );
}
