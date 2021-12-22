import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';
import Todo from '../Todo';

test("should render todo component", () => {
  render(<TodoList />);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("What's the plan for today")
});

test('check todos', () => {
    const todo = {id: 2, value: "wash car"};
    render(<Todo todos={todo}/>);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash car")
})