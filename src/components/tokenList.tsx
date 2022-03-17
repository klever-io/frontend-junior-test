import { Token } from '.'

const TokenList = () => {
  return (
    <div className="w-full max-w-xl">
      <div className="text-md flex w-full items-center justify-between font-bold">
        <h2>Tokens</h2>
        <h2>Balance</h2>
      </div>
      <div>
        <Token token="KLV" balance="10,250.50" />
        <Token token="DVK" balance="50,250.71" />
        <Token token="KFI" balance="10" />
      </div>
    </div>
  )
}

export default TokenList
