// i must import h manualy
import h from "solid-js/h";
import { createSignal } from "solid-js";
import { render } from "solid-js/web";


const App = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <button onClick={() => setCount(count() - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
}

render(App, document.body);