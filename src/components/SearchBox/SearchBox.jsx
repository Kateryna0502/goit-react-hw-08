import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter} from "../../redux/filters/selectors";


const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  
  const handlFilter = (event) => {
  const value = event.target.value;
  dispatch(changeFilter(value)); 
  };

  return (
    <div className={css.div}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        placeholder="Enter profile name"
        value={filterValue}
        onChange={handlFilter}
        
      />
    </div>
  );
};

export default SearchBox;

