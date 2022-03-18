import { TokenInterface } from '../components/token'

const LocalStorage = {
  load(key: string): TokenInterface[] | any {
    const stored = localStorage.getItem(key)
    return stored == null ? [] : JSON.parse(stored)
  },
  store(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  loadToken(tokenName: string | any): TokenInterface | any {
    const tokens = this.load('wallet')
    if (!tokens) return {}

    const token = tokens.filter(
      (item: TokenInterface) =>
        item.token.toLocaleLowerCase() === tokenName.toLocaleLowerCase()
    )

    if (token.length === 0) return null

    return token[0]
  },
  updateToken(tokenName: string | any, token: TokenInterface) {
    this.removeToken(tokenName)
    this.storeToken(token)
  },
  removeToken(tokenName: string | any) {
    const tokens = this.load('wallet')
    if (!tokens) return

    const updatedTokens = tokens.filter(
      (item: TokenInterface) =>
        item.token.toLocaleLowerCase() !== tokenName.toLocaleLowerCase()
    )

    this.store('wallet', updatedTokens)
  },
  isTokenSet(tokenName: string | any) {
    const tokens = this.load('wallet')
    if (!tokens) return false

    const token = tokens.filter(
      (item: TokenInterface) =>
        item.token.toLocaleLowerCase() === tokenName.toLocaleLowerCase()
    )

    if (token.length > 0) return true

    return false
  },
  storeToken(token: TokenInterface): void {
    const tokens = this.load('wallet')
    if (!tokens) {
      return localStorage.setItem('wallet', JSON.stringify([token]))
    }
    tokens.push(token)
    this.store('wallet', tokens)
  },
}

export default LocalStorage
