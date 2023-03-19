import { ActionType, ActionTypes } from "./types"

const defaultState = {
    money: '40000',
    withTax: false
}


const reducer = (state = defaultState, action: ActionType) => {
    switch (action.type) {
        case ActionTypes.SET_MONEY:
            return { ...state, money: action.payload }
        case ActionTypes.SET_WITH_TAX:
            return { ...state, withTax: action.payload }
    }
    return state
}

export const setMoneyAction = (payload: string) => ({ type: ActionTypes.SET_MONEY, payload })
export const setWithTaxAction = (payload: boolean) => ({ type: ActionTypes.SET_WITH_TAX, payload })
export default reducer