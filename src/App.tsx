import "./styles.css";
import { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { changedata, fetchdatatest } from "./features/fetchdata/fetchdataSlice";

export default function App() {
  const data = useSelector((state: RootState) => state.fetchdata.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => dispatch(changedata())}>Change</button>
      <button onClick={() => dispatch(fetchdatatest())}>Thunk</button>
    </div>
  );
}
