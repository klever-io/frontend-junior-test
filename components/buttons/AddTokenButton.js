import React from 'react'
import Link from 'next/link'

export default function AddTokenButton() {
  return (
    <Link href="/addtoken">
      <div className="p-2 sm:px-8 rounded-md text-white text-center font-black bg-klever-enabled-button hover:bg-klever-enabled-hover-button">Add Token</div>
    </Link>
  );
}
