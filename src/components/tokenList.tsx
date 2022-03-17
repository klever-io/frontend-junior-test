import { Token } from '.'
import { TokenInterface } from './token'

interface TokenListProps {
  tokens: [TokenInterface] | any
}

const TokenList: React.FC<TokenListProps> = ({ tokens }) => {
  return (
    <div className="w-full max-w-xl">
      <div className="text-md flex w-full items-center justify-between font-bold">
        <h2>Tokens</h2>
        <h2>Balance</h2>
      </div>
      <div>
        {tokens &&
          tokens.map((token: TokenInterface, index: number) => (
            <Token key={index} token={token.token} balance={token.balance} />
          ))}
      </div>
    </div>
  )
}

export default TokenList
