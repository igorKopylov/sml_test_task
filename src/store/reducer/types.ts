export enum ActionTypes {
    SET_MONEY = 'SET_MONEY',
    SET_WITH_TAX = 'SET_WITH_TAX'
}

export type SetMoneyAction = {
    type: ActionTypes.SET_MONEY;
    payload: string
}

export type SetWithTaxAction = {
    type: ActionTypes.SET_WITH_TAX;
    payload: boolean
}

export type ActionType = SetMoneyAction | SetWithTaxAction