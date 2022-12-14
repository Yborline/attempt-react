import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../../redux/todos/todos-actions';
import { getFilter } from '../../../redux/todos/todos-selectors';
import SortSelector from '../../SortSelector/SortSelector';
import { DivFilter, Label, Input, DivInput, Icon } from './Filter.styled';
import { GoSearch } from 'react-icons/go';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <DivFilter>
      <DivInput>
        <GoSearch fill="gray" className={s.icons} />
        <Input
          type="text"
          value={filter}
          onChange={event => dispatch(changeFilter(event.target.value))}
        />
      </DivInput>
      <SortSelector />
    </DivFilter>
  );
};

export default Filter;
