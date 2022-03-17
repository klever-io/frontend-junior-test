import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-6xl font-bold">
        Welcome to{' '}
        <a className="text-blue-600" href="#">
          Wish Wallet!
        </a>
      </h1>
    </div>
  )
}

export default Home
