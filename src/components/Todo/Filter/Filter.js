import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../../redux/todos/todos-actions';
import { getFilter } from '../../../redux/todos/todos-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label>
      фильтр по имени
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};

export default Filter;
