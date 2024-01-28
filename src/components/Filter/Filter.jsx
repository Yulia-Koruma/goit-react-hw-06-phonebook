import { useDispatch, useSelector } from "react-redux"
import { FilterInput, FilterTitle } from "./Filter.styled"
import { getFilter } from "redux/selectors"
import { changeFilter } from "redux/filterSlice";

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <>
            <FilterTitle>Find contacts by name</FilterTitle>
            <FilterInput
                type="text"
                name="filter"
                id="filter"
                value={filter}
                required
                onChange={e => dispatch(changeFilter(e.target.value))} />
        </>
    )
}