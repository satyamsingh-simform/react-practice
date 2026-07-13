import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, AppSelector } from "../store"

export const useStore = () => {
    const useAppSelector=useSelector.withTypes<AppSelector>();
    const useAppDispatch=useDispatch.withTypes<AppDispatch>();
    return {useAppSelector,useAppDispatch}
}
