// import HooksApp from "./HooksApp"
// import { CounterApp } from "./components/01-useState/CounterApp"
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook"
// import { SimpleForm } from "./components/02-useEffect/SimpleForm"
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook"
// import { MultipleCustomHooks } from "./components/03-example/MultipleCustomHooks"
// import { FocusScreen } from "./components/04-useRef/FocusScreen"
// import { RealExampleRef } from "./components/04-useRef/RealExampleRef"
// import { LayoutEffect } from "./components/05-useLayoutEffect/LayoutEffect"
// import { Memorize } from "./components/06-memos/Memorize"
// import { MemoHooks } from "./components/06-memos/MemoHooks"
// import { CallbackHook } from "./components/06-memos/CallbackHook"
// import "../src/components/08-useReducer/introReducer"
// import { Padre } from "./components/07-tarea-memo/Padre"
// import { TodoApp } from "./components/08-useReducer/TodoApp"
import { MainApp } from "./components/09-useContext/MainApp"
import {createRoot} from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<MainApp />);


