import { ProductState } from "../store/product.reducer";
import * as FromProductReducer from '../store/product.reducer'
import { ActionReducerMap } from "@ngrx/store";
export interface State {
    Products:ProductState
}
export const reducers: ActionReducerMap<State> = {
  Products : FromProductReducer.ProductReducer
  };