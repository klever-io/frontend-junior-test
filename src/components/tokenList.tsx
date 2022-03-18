import { Token } from '.'
import { TokenInterface } from './token'

interface TokenListProps {
  tokens: [TokenInterface] | any
}

const TokenList: React.FC<TokenListProps> = ({ tokens }) => {
  return (
    <div className="w-full max-w-xl">
      {tokens.length > 0 && (
        <>
          <div className="text-md flex w-full items-center justify-between font-bold">
            <h2>Tokens</h2>
            <h2>Balance</h2>
          </div>
          <div>
            {tokens.map((token: TokenInterface, index: number) => (
              <Token key={index} token={token.token} balance={token.balance} />
            ))}
          </div>
        </>
      )}
      {tokens.length === 0 && (
        <h2 className="text-center text-xl ">
          You have not created any tokens yet 🛸
        </h2>
      )}
    </div>
  )
}

export default TokenList
