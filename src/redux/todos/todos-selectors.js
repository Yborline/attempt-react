import { createSelector } from '@reduxjs/toolkit';

export const getTodos = state => state.todos.items;
export const getFilter = state => state.todos.filter.filterTitle;
export const getSortFilter = state => state.todos.filter.filterSort;
export const getLoading = state => state.todos.loading;
export const getLengthTodos = state => state.todos.items.length;

//
// ПОСМОТРЕТЬ ФАБРИКУ СЕЛЕКТОРОВ
//

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();

    const visible = todos.filter(todo =>
      todo.message.toLowerCase().includes(normalizedFilter),
    );

    return visible;
  },
);

export const getTotalComplatedTodo = createSelector([getTodos], todos => {
  return todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0,
  );
});

export const getVisibleSortTodos = createSelector(
  [getVisibleTodos, getSortFilter],
  (visibleTodos, sortFilter) => {
    const sortTodos = [...visibleTodos].sort((a, b) => {
      const aDate = Date.parse(a.date + 'T23:59');
      const bDate = Date.parse(b.date + 'T23:59');
      switch (sortFilter) {
        case 'ascending':
          return aDate - bDate;
        case 'descending':
          return bDate - aDate;
        case 'updating':
          return a.dateNow - b.dateNow;
        default:
          return aDate - bDate;
      }
      // return sortFilter === 'ascending' ? aDate - bDate : bDate - aDate;
    });
    return sortTodos;
  },
);
