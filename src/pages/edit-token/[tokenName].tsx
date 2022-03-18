import { TokenForm } from '../../components'
import { LocalStorage } from '../../helpers'
import { FormData } from '../../components/tokenForm'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const addToken: React.FC = () => {
  const router = useRouter()
  const { tokenName } = router.query
  const [token, setToken] = useState({})

  useEffect(() => {
    if (tokenName) {
      const tokenData = LocalStorage.loadToken(tokenName)
      if (!tokenData) Router.push('/')
      setToken(tokenData)
    }
  }, [tokenName])

  const onRemoveBtnClick = () => {
    LocalStorage.removeToken(tokenName)
    Router.push('/')
  }

  const handleFormSubmit = (formData: FormData) => {
    LocalStorage.updateToken(tokenName, formData)
    Router.push('/')
  }

  return (
    <div className="m-auto flex w-10/12 max-w-xl items-center justify-center">
      <TokenForm
        title="Add Token"
        onSubmit={handleFormSubmit}
        data={token}
        onRemoveBtnClick={onRemoveBtnClick}
        isEdit
      />
    </div>
  )
}

export default addToken
