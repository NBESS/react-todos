import React, { Component } from 'react';
import './TodoForm.css';

export default class TodoForm extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
        }
    }

    updateState = (e, key) => {
        this.setState({
            [key]: e.target.value,
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onNewTodo(this.state.value);
        this.setState({
            value: '',
        })
    }


    render() {
        return (
            <form className="form" onSubmit={this.onFormSubmit}>  
                <div className="form-field">
                    <label htmlFor="todo" className="form-label">
                        Enter A Todo
                    </label>
                    <input
                        type="text"
                        id="todo"
                        name="todo"
                        className="form-input"
                        value={this.state.value}
                        onChange={(e)=>{this.updateState(e, 'value')}}
                        />
                        <button type="submit" className="form-button">
                            Add
                        </button>
                </div>
            </form>
        )
    }

}