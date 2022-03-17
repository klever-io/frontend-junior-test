import Image from 'next/image'
import { Button } from '.'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="m-auto mb-14 flex w-full max-w-xl flex-col items-center justify-center">
      <div className="my-14">
        <Image src="/logo.svg" width={200} height={60} />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="mr-2">
            <Image src="/shooting-star.svg" width={50} height={50} />
          </div>
          <h1 className="text-4xl font-bold">Wish Wallet</h1>
        </div>
        <Link href="">
          <Button title="Add Token" type="button" />
        </Link>
      </div>
    </header>
  )
}

export default Header
