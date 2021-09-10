import { TypedUseSelectorHook, useSelector } from 'react-redux';
import RootState from "../common/types/root";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
