export type facts = {
    year: number,
    id?: number,
    fact: string,
}

export type Page = 1 | 2 | 3 | 4;

export interface IglobalValue {
    timeInterval: Einterval,
    timeSwitchController: number,
    timeSlider: number,
    timeBackCircle: number,
}

export interface Iaction {
    payload: number,
    type: string,
}

export enum Einterval {
    "2015-2018" = 1,
    "2018-2020" = 2,
    "2020-2021" = 3,
    "2021-2022" = 4,
}

