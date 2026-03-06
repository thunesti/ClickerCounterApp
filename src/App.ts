import type { State, Msg } from "./types";
import { update } from "./update";
import { view } from "./view";

let state: State = {
    count: 0
};

const root = document.getElementById("app") as HTMLDivElement;

function render() {
    root.innerHTML = "";
    root.appendChild(view(state, dispatch));
};

function dispatch(msg: Msg) {
    state = update(state, msg);
    render();
};

export function startApp() {
    render();
};