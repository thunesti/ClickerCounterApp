type State = {
    count: number;
};

type Msg =
    | { type: "Increment" }
    | { type: "Decrement" }
    | { type: "Reset" };

type Dispatch = (msg: Msg) => void;

export type { State, Msg, Dispatch };