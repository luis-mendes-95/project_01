import { DivBackgroundModal } from "../../styles/modal"

interface iModal {
    children: React.ReactNode
}

const Modal = ({children}: iModal) => {
  return (
    <DivBackgroundModal>

        <div className="div_modal_info">
            {children}
        </div>

    </DivBackgroundModal>
  )
}

export default Modal