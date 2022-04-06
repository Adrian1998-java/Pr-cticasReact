import React from 'react';
import ReactDOM from 'react-dom';

// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-Examples/MultipleCustomHooks';
// import { FocusSreen } from './components/04-useRef/FocusSreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-Memos/Memorize';
// import { MemoHook } from './components/06-Memos/MemoHook';
import { CallbackHook } from './components/06-Memos/CallbackHook';



ReactDOM.render(
    <CallbackHook />,
  document.getElementById('root')
);