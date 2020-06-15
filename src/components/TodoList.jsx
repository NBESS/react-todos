import React, { Component } from 'react';
import Todo from './Todo'


export default class TodoList extends Component {
    
    render() {
        return (
            <div>
                <h2 className="TodoList_title">Incomplete Todos</h2>
                {this.props.todos.map((todo, i) => {
                    if (!todo.complete) {
                        return (
                            <Todo 
                                todo={todo}
                                key={i}
                                toggleCompleteStatus={() => this.props.toggleCompleteStatus(i)}
                                deleteTodo={() => this.props.deleteTodo(i)}
                            />
                        );
                    }
                    return '';
                })}
                <h2 className="TaskList_title">Complete Todos</h2>
                {this.props.todos.map((todo, i) => {
                    if (todo.complete) {
                        return (
                            <Todo
                                todo={todo}
                                key={i}
                                toggleCompleteStatus={() => this.props.toggleCompleteStatus(i)}
                                deleteTodo={() => this.props.deleteTodo(i)}
                            />
                            
                        );
                    }
                    return ''
;                })}
            </div>
        )
    }


}