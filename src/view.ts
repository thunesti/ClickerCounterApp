import type { State, Msg, Dispatch } from "./types";

const BUTTONS: { label: string; msg: Msg }[] = [
    { label: "+1", msg: { type: "Increment" } },
    { label: "-1", msg: { type: "Decrement" } },
    { label: "Reset", msg: { type: "Reset" } }
];

export function createButton(dispatch: Dispatch, msg: Msg, label: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.innerText = label;
    button.addEventListener('click', () => {
        dispatch(msg);
    });
    return button;
};

export function view(state: State, dispatch: Dispatch): HTMLDivElement {
    const container = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "Clicker";

    const counter = document.createElement('div');
    counter.setAttribute("class", "counter");
    counter.textContent = `Count: ${state.count}`;

    const buttons = BUTTONS.map(b =>
        createButton(dispatch, b.msg, b.label)
    );

    [heading, counter, ...buttons].forEach(el => container.appendChild(el));

    return container;
};