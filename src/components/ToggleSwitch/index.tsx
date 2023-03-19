import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setWithTaxAction } from '../../store/reducer/reducer';

const ToggleSwitch: React.FC = () => {
    const withTax = useSelector((state: RootState) => state.withTax)
    const dipatch = useDispatch()
    const spanClass = 'toggle-switch-wrapper__span'

    return (
        <div className='toggle-switch-wrapper'>
            <span className={`${spanClass} ${withTax ? 'active' : null}`}>Указать с НДФЛ</span>
            <label className='toggle-switch'>
                <input
                    type='checkbox'
                    checked={withTax}
                    onChange={e => dipatch(setWithTaxAction(e.target.checked))}
                />
                <span className='toggle-switch__slider' />
            </label>
            <span className={`${spanClass} ${!withTax ? 'active' : null}`}>Без НДФЛ</span>
        </div>
    )
}

export default ToggleSwitch