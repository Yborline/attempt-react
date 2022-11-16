export const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const visible = allTodos.filter((todo) =>
    todo.message.toLowerCase().includes(normalizedFilter)
  );
  return visible;
};
