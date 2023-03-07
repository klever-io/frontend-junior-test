import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import editButton from '../../public/assets/edit-button.svg'


export default function EditButton() {
  return (
    <Link href='/'>
      <Image src={editButton}/>
    </Link>
  );
}
