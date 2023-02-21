import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import GymDiaryContext from '../context/GymDiaryContext';


function Modal({ children }) {

const { modalEditActive, setModalEditActive } = useContext(GymDiaryContext)
console.log(modalEditActive);

  return (
    <div className={modalEditActive ? 'modal-wrapper active' : 'modal-wrapper'} >
      <div className={modalEditActive ? 'modal-content active' : 'modal-content'}>
       <button className='delete delete-modal' onClick={() => setModalEditActive(false)}>
        <FaTimes color='black'/>
       </button>
       {children}
      </div>
    </div>
  )
}

export default Modal