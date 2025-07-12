import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { AppDispatch } from "./store";

// Custom hook untuk dispatch dengan tipe
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Custom hook untuk selector dengan tipe
export const useAppSelector = useSelector.withTypes<RootState>();
