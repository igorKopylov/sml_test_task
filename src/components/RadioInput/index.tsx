import React, { useEffect, useState } from 'react';
import { setMoneyAction } from './../../store/reducer/reducer';
import { useDispatch } from 'react-redux';

interface RadioInputProps {
  setActiveId: (index: number) => void;
  activeId: number;
  name: string;
  value: string;
  index: number;
}

const RadioInput: React.FC<RadioInputProps> = ({ name, value, setActiveId, activeId, index }) => {
  const [isPopup, setIsPopup] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('click', () => setIsPopup(false))
    return () => window.removeEventListener('click', () => setIsPopup(false))
  }, [isPopup])

  const onChange = () => {
    setActiveId(index)
    dispatch(setMoneyAction(value))
  }

  return (
    <div className='radio-input'>
      <label>
        <input
          checked={activeId === index}
          onChange={onChange}
          type='radio' />
        <span>{name}</span>
      </label>
      {index === 1 && (
        <div onClick={e => e.stopPropagation()} className='radio-input__popup'>
          <div onClick={() => setIsPopup(!isPopup)} className='radio-input__popup-switch'><span>{isPopup ? <>&times;</> : 'i'}</span></div>
          {isPopup && (
            <div className='min-wage-popup'>
              МРОТ - минимальный размер оплаты труда. Разный для разных регионов
            </div>
          )}
        </div>
      )
      }
    </div >
  )
}

export default RadioInput