import { Button } from '.'
import Image from 'next/image'

interface ModalConfirmProps {
  show: boolean
  onBtnYes: () => void
  onClose: () => void
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  show,
  onClose,
  onBtnYes,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 hidden h-screen w-full items-center justify-center bg-black-transparent ${
        show ? ' modal-confirm--show' : ''
      }`}
    >
      <div className="flex w-full max-w-[280px] flex-col items-center justify-center rounded-lg bg-yankees-blue p-10 font-bold">
        <div className="flex w-full justify-end">
          <button type="button" onClick={onClose}>
            <Image src="/close.svg" width={18} height={18} />
          </button>
        </div>
        <span className="my-2 text-lg">
          Are you sure you want to remove this token?
        </span>
        <Button
          title="Yes"
          type="button"
          style="my-2 w-full"
          onClick={onBtnYes}
        />
        <Button
          title="Cancel"
          type="button"
          style="my-2 w-full border border-byzantine bg-transparent text-byzantine"
          onClick={onClose}
        />
      </div>
    </div>
  )
}

export default ModalConfirm
