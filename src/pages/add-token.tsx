import { TokenForm } from '../components'
import { LocalStorage } from '../helpers'
import { FormData } from '../components/tokenForm'
import Router from 'next/router'

const addToken: React.FC = () => {
  const handleFormSubmit = (formData: FormData) => {
    LocalStorage.storeToken(formData)
    Router.push('/')
  }

  return (
    <div className="m-auto flex w-10/12 max-w-xl items-center justify-center">
      <TokenForm title="Add Token" onSubmit={handleFormSubmit} />
    </div>
  )
}

export default addToken
