import { useDispatch, useSelector } from "react-redux";
import { SearchInput, InputContainer } from "./SearchFilter.styled";
import { ChangeFilter } from "redux/filterSlice";

export const SearchFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    return (
        <InputContainer>
        <SearchInput type="text"
            value={filter}
            onChange={evt => dispatch(ChangeFilter(evt.target.value))}
                placeholder="Search by name" />
        </InputContainer>
    )

}