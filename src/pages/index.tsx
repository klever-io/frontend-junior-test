import { useEffect, useState } from 'react'
import { TokenList } from '../components'
import { LocalStorage } from '../helpers'

const Home: React.FC = () => {
  const [tokenList, setTokenList] = useState([])

  useEffect(() => {
    const tokens = LocalStorage.load('wallet')
    setTokenList(tokens)
  }, [])

  return (
    <div className="m-auto flex w-10/12 items-center justify-center">
      <TokenList tokens={tokenList} />
    </div>
  )
}

export default Home
