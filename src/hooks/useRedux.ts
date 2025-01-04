// types
import type { AppDispatch, RootState } from "@/lib/store";
// hooks
import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useThemeSlice = () => {
    return useAppSelector((state) => state.ThemeReducer);
};
