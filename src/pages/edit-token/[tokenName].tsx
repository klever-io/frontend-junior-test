import { TokenForm, ModalConfirm } from '../../components'
import { LocalStorage } from '../../helpers'
import { FormData } from '../../components/tokenForm'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const addToken: React.FC = () => {
  const router = useRouter()
  const { tokenName } = router.query
  const [token, setToken] = useState({})
  const [displayModal, setDisplayModal] = useState(false)

  useEffect(() => {
    if (tokenName) {
      const tokenData = LocalStorage.loadToken(tokenName)
      if (!tokenData) Router.push('/')
      setToken(tokenData)
    }
  }, [tokenName])

  const handleRemoveBtnClick = () => {
    setDisplayModal(true)
  }

  const onModalConfirm = () => {
    LocalStorage.removeToken(tokenName)
    Router.push('/')
  }

  const handleFormSubmit = (formData: FormData) => {
    LocalStorage.updateToken(tokenName, formData)
    Router.push('/')
  }

  return (
    <div className="m-auto flex w-10/12 max-w-xl items-center justify-center">
      {'token' in token && (
        <TokenForm
          title="Add Token"
          onSubmit={handleFormSubmit}
          data={token}
          onRemoveBtnClick={handleRemoveBtnClick}
          isEdit
        />
      )}
      <ModalConfirm
        show={displayModal}
        onClose={() => setDisplayModal(false)}
        onBtnYes={onModalConfirm}
      />
    </div>
  )
}

export default addToken
