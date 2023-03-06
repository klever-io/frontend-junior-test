import React from 'react'
import Link from 'next/link'

export default function AddTokenButton() {
  return (
    <Link href="/addtoken">
      <div className="p-2 sm:px-5 rounded-md font-semibold text-white bg-klever-enabled-button hover:bg-klever-enabled-hover-button">
        Add Token
      </div>
    </Link>
  );
}
