import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todos: [
        {
          name: "Todo Item 1",
          complete: false,
        },
        {
          name: "Todo Item 2",
          complete: false,
        },
        {
          name: "Todo Item 3",
          complete: false,
        },
      ]
    }
  }

  addNewTodo = (todoName) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: todoName,
          complete: false,
        },
      ],
    });
  }



  handleTodoDelete = (todoIndex) => {
    const newTodos = this.state.todos.filter((todo, currentIndex) => {
      return this.state.todos[currentIndex] !== this.state.todos[todoIndex];
    });
    this.setState({ todos: newTodos });
    
  }

  handleTodoToggle = (indexOfTodoToToggle) => {
    const newTodos = this.state.todos.map((todo, currentIndex) => {
      if (currentIndex === indexOfTodoToToggle) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
      this.setState({ todos: newTodos })
  };


  render() {
    return (
      <div className="App">
        <TodoForm onNewTodo={this.addNewTodo} />
        <TodoList 
          todos={this.state.todos}
          toggleCompleteStatus={this.handleTodoToggle}
          deleteTodo={this.handleTodoDelete}
          />
      </div>
    );
  }
}  

export default App;
