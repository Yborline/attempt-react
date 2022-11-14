import { connect } from "react-redux";
import { changeFilter } from "../../../redux/todos/todos-actions";

const Filter = ({ value, onChange }) => (
  <label>
    фильтр по имени <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
  value: state.todos.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
