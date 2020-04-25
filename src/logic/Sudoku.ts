export enum State {
    Default,
    Complete,
    Invalid
}

export type Field = {
    value: number;
    state: State;
}

export type BoardState = {
    fields: Field[];
}

export function getRandomBoardState(): BoardState {
    let fields = []
    
    for(let i = 0; i < 81; i++)
    {
        let f: Field = {value: (i % 9) + 1, state: State.Complete}

        fields.push(f);
    }

    return { fields: fields}
}

export function getCoords(value: number) {
    return {x: value%9, y: Math.floor(value/9)}
}