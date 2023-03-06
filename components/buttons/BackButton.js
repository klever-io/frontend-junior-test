import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center text-white font-semibold mt-6">
      <div className="flex justify-between items-center w-72 sm:w-full max-w-lg mt-6">
        <span className="text-2xl">
          {router.pathname === '/addtoken'?'Add Token':'Edit Token'}
        </span>
        <Link href="/">
          <div className="p-2 sm:px-8 rounded-md bg-klever-back-button">Voltar</div>
        </Link>
      </div>
    </div>
  );
}
