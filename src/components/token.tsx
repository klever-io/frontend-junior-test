import Link from 'next/link'
import Image from 'next/image'

export interface TokenInterface {
  token: string
  balance: string
}

const Token: React.FC<TokenInterface> = ({ token, balance }) => {
  return (
    <div className="my-8 flex items-center justify-between text-2xl font-bold md:text-4xl">
      <div className="flex cursor-pointer items-center">
        <Link href="#">
          <>
            <div className="mr-4">
              <Image src="/edit.png" width={20} height={20} />
            </div>
            <span>{token}</span>
          </>
        </Link>
      </div>
      <span>{balance}</span>
    </div>
  )
}

export default Token
