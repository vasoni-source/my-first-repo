

export default async function Todos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await response.json();
  return (
    <div>
      {todos.map((todo) => (
        <h2 key={todo.id}>{todo.title}</h2>
      ))}
    </div>
  );
}
