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

// test('check props', () => {
//     render(<Todo />);
    
// })