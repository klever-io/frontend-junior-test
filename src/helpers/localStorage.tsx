import { TokenInterface } from '../components/token'

const LocalStorage = {
  load(key: string): TokenInterface[] | any {
    const stored = localStorage.getItem(key)
    return stored == null ? undefined : JSON.parse(stored)
  },
  store(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value))
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
