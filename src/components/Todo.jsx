import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        const { todo, toggleCompleteStatus, deleteTodo } = this.props;

        return (
            <div className="Todo">
                <div className={`Todo_name ${todo.complete ? 'is_complete' : ''}`}></div>
                {todo.name}
                <button
                    onClick={toggleCompleteStatus}
                    className="Task_button Task_button--toggle"
                >
                    {!todo.complete ? (
                        <span role='img' aria-label="Complete">
                            Complete
                        </span>
                    ) : (
                            <span role="img" aria-label="Incomplete">
                                Undo
                            </span>
                        )}
                </button>
                <button
                    onClick={deleteTodo}
                    className="Todo_button Todo_button--delete"
                >
                    <span role="img" aria-label="Delete">
                        Delete
                </span>
                </button>
            </div>
        );
    }




}
