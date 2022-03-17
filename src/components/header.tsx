import Image from 'next/image'
import { Button } from '.'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <header className="m-auto mb-14 flex w-10/12 max-w-xl flex-col items-center justify-center">
      <div className="my-14">
        <Image src="/logo.svg" width={200} height={60} />
      </div>
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        <div className="mb-4 flex items-center justify-center md:mb-0">
          <div className="mr-2">
            <Image src="/shooting-star.svg" width={50} height={50} />
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">Wish Wallet</h1>
        </div>
        {router.pathname === '/' && (
          <Link href="/add-token">
            <a>
              <Button title="Add Token" type="button" />
            </a>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
