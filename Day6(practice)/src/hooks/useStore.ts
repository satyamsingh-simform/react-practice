import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, AppStore } from "../store";

export const useStore = () => {
  const useAppselector = useSelector.withTypes<AppStore>();
  const useAppDispatch = useDispatch.withTypes<AppDispatch>();

  return { useAppselector, useAppDispatch };
};
