interface InputProps {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="my-3 flex w-full max-w-xl flex-col">
      <label className="mb-1 flex items-start text-sm font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-md px-4 py-2 text-black outline-none"
        name={name}
        value={value}
        type="text"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default Input
