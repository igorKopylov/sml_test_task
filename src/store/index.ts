import { createStore } from "redux";
import reducer from "./reducer/reducer";

const store = createStore(reducer)

export type RootState = ReturnType<typeof store.getState>

export default store