import type { State, Msg } from "./types";

export function update(state: State, msg: Msg): State {
    switch (msg.type) {

        case "Increment":
            return { count: state.count + 1 };

        case "Decrement":
            return { count: state.count - 1 };

        case "Reset":
            return { count: 0 };

        default:
            return state;
    }
}

