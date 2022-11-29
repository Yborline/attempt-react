import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { todosActions } from 'redux/todos';
import { useEffect } from 'react';

export default function SortSelector({ options, value, onChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const sortOrder =
    new URLSearchParams(location.search).get('sortBy') ?? 'updating';

  const sortOptions = [
    { value: 'updating', label: 'По дате добавления' },
    { value: 'ascending', label: 'По возрастанию даты' },
    { value: 'descending', label: 'По убыванию даты' },
  ];

  const onSortOrderChange = order => {
    navigate({ ...location, search: `sortBy=${order}` });
  };
  useEffect(() => {
    dispatch(todosActions.sortFilter(sortOrder));
  }, [sortOrder, dispatch]);

  useEffect(() => {
    console.log(location.search);
    if (location.search !== '') {
      return;
    }
    navigate({ ...location, search: `sortBy=updating` });
  }, [navigate, location]);

  return (
    <select
      value={sortOrder}
      onChange={evt => onSortOrderChange(evt.target.value)}
    >
      {sortOptions.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
