interface ButtonProps {
  title: string
  style?: string
  type: 'button' | 'submit'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  title,
  style = '',
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[118px] cursor-pointer rounded-md bg-byzantine py-2 px-5 text-sm font-bold ${style}`}
      type={type}
    >
      {title}
    </button>
  )
}

export default Button
