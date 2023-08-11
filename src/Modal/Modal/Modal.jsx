import style from './modal.module.css'

function Modal({ children, modalActive, setModalActive }) {
	return (
		<div
			className={modalActive ? style.active : style.overlay}
			onClick={() => setModalActive(false)}>
			<div className={style.modal} onClick={e => e.stopPropagation()}>
				<div className={style.container}>
					{children}
					<button className={style.btn} onClick={() => setModalActive(false)}>
						CloseModal
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
