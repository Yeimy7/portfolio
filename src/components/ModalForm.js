export const ModalForm = ({setDisplayModal}) => {
    const handleClick = () => {
        setDisplayModal(false)
    }

    return (
        <div className='container__modal-background'>
            <div className='container__modal'>
                <button onClick={handleClick}>X</button>
                <h3 className='title__modal'>¡Muchas gracias por tu mensaje!</h3>
                <p>Te estaré respondiendo a la brevedad posible.</p>
            </div>
        </div>
    )
}
