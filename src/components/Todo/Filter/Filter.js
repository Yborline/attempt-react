const Filter = ({ value, onChange }) => (
  <label>
    фильтр по имени <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
