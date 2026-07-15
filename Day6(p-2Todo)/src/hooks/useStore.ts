import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, AppSelector } from "../store"

export const useAppSelector=useSelector.withTypes<AppSelector>();
export const useAppDispatch=useDispatch.withTypes<AppDispatch>();

