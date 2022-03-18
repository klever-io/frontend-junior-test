import { Button, Input } from '.'
import Link from 'next/link'
import { useState, useCallback, useEffect, FormEvent } from 'react'
import { TokenSchema } from '../validators/tokenValidator'
import Image from 'next/image'

export interface FormData {
  token: string
  balance: string
}

interface FormProps {
  title: string
  data?: FormData | any
  isEdit?: boolean
  onSubmit: (formData: FormData) => void
  onRemoveBtnClick?: () => void
}

const tokenForm: React.FC<FormProps> = ({
  title,
  onSubmit,
  data,
  isEdit = false,
  onRemoveBtnClick,
}) => {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    token: '',
    balance: '',
  })

  const handleChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    try {
      await TokenSchema.validate(formData)
    } catch (err: any) {
      return setError(err.errors[0])
    }

    onSubmit(formData)
  }

  const parseData = useCallback(() => {
    if (data) {
      setFormData(data)
    }
  }, [data, setFormData])

  useEffect(() => {
    parseData()
  }, [parseData])

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full flex-col">
        <div className="mb-4 flex w-full items-center justify-between">
          <span className="text-xl font-bold md:text-2xl">{title}</span>
          <Link href="/">
            <a>
              <Button title="Voltar" type="button" style="bg-granite-gray" />
            </a>
          </Link>
        </div>
        <Input
          label="Token"
          name="token"
          value={formData.token}
          onChange={(value: string) => handleChange('token', value)}
        />
        <Input
          label="Balance"
          name="balance"
          value={formData.balance}
          onChange={(value: string) => handleChange('balance', value)}
        />
        {error && (
          <span className="text- my-3 flex w-full max-w-xl items-center justify-start text-red-500">
            <div className="mr-1 flex items-center">
              <Image src="/error.svg" width="20px" height="20px" />{' '}
            </div>
            {error}
          </span>
        )}
        <div className="flex w-full flex-row-reverse items-center justify-between">
          <Button title="Save" type="submit" style="my-4" />
          {isEdit && (
            <Button
              title="Remove"
              onClick={onRemoveBtnClick}
              type="button"
              style="bg-venetian-red my-4"
            />
          )}
        </div>
      </form>
    </>
  )
}

export default tokenForm
