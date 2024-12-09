import { useAppDispatch, useAppSelector } from "../hooks";

// Use pre-typed versions of the React-Redux
// `useDispatch` and `useSelector` hooks
import {
  decrement,
  increment,
  //   incrementAsync,
  //   incrementByAmount,
  //   incrementIfOdd,
  selectCount,
} from "./counterSlice";

// import styles from "./Counter.module.css";

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span aria-label="Count">{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        {/* omit additional rendering output here */}
      </div>
    </div>
  );
}
