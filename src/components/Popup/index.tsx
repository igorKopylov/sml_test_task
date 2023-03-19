import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Popup: React.FC = () => {
    const { money, withTax } = useSelector((state: RootState) => state)

    const formatNumber = (num: number) => {
        return num.toLocaleString('en-US').replace(',', ' ')
    }

    const getWageInHand = () => {
        const num = Number(money)
        let result
        if (withTax) {
            result = Math.round(num - (num * 0.13))
        } else {
            result = num
        }
        return formatNumber(result)
    }

    const getTax = () => {
        const num = Number(money)
        if (withTax) {
            return Math.round(num * 0.13)
        } else {
            return Math.round(num / 0.87 * 0.13)
        }
    }

    const getMoneyPerEmployee = () => {
        const num = Number(money)
        let result
        if (withTax) {
            result = num
        } else {
            result = Math.round(num / 0.87)
        }
        return formatNumber(result)
    }

    return (
        <div className='popup'>
            <div className='popup__in-hand'>
                <b>{getWageInHand()} ₽</b> сотрудник будет получать на руки
            </div>
            <div className='popup__tax'>
                <b>{getTax()} ₽</b> НДФЛ, 13% от оклада
            </div>
            <div className='popup__per-employee'>
                <b>{getMoneyPerEmployee()} ₽</b> за сотрудника в месяц
            </div>
        </div>
    )
}

export default Popup