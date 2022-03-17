import { Button, Input } from '.'
import Link from 'next/link'
import { useState, useCallback, useEffect, FormEvent } from 'react'

export interface FormData {
  token: string
  balance: string
}

interface FormProps {
  title: string
  data?: FormData
  onSubmit: (formData: FormData) => void
}

const tokenForm: React.FC<FormProps> = ({ title, onSubmit, data }) => {
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
        <Button title="Save" type="submit" style="self-end my-4" />
      </form>
    </>
  )
}

export default tokenForm
