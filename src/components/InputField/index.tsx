import React from 'react';
import { setMoneyAction } from '../../store/reducer/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store';

interface InputFieldProps {
    value: string;
}

const InputField: React.FC<InputFieldProps> = ({ value }) => {
    const dispatch = useDispatch()
    const money = useSelector((state: RootState) => state.money)

    return (
        <label className='input-field-wrapper'>
            <input
                value={money}
                onChange={e => dispatch(setMoneyAction(e.target.value))}
                className='input-field'
                type='number'
                placeholder='Введите сумму...'
            />
            <span className='input-field-wrapper__ruble'>₽</span>
        </label>
    )
}

export default InputField