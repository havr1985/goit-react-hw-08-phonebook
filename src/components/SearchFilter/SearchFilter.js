import { useDispatch, useSelector } from "react-redux";
import { ChangeFilter } from "redux/filterSlice";
import { Box, Input } from "@chakra-ui/react";

export const SearchFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    return (
        <Box textAlign='center'>
            <Input type="text"
                w={500}
                bg='white'
            value={filter}
            onChange={evt => dispatch(ChangeFilter(evt.target.value))}
            placeholder="Search by name" />
        </Box>
    )

}