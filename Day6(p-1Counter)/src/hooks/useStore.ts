import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, AppStore } from "../store";

export const useAppselector = useSelector.withTypes<AppStore>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
