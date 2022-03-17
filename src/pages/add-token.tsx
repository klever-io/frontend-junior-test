import { TokenForm } from '../components'

const addToken: React.FC = () => {
  return (
    <div className="m-auto flex w-10/12 max-w-xl items-center justify-center">
      <TokenForm
        title="Add Token"
        onSubmit={formdata => {
          console.log(formdata)
        }}
      />
    </div>
  )
}

export default addToken
