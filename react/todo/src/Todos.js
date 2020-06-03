import React from 'react';

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, task: 'Todo 1', isCompleted: false },
                { id: 2, task: 'Todo 2', isCompleted: true },
                { id: 3, task: 'Todo 2', isCompleted: false }
            ]
        };
    }



    render() {
        return (
            <div>
                <h1>Todos</h1>
                <TodoFormComponent />
                <hr />
                <table width="80%">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(todo => <TodoComponent todo={todo} />)
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

class TodoComponent extends React.Component {

    completeHandler = () => {
        console.log('Complete Click');
    }

    deleteHandler = () => {
        console.log('Delete Click')
    }

    render() {
        return (
            <tr bgcolor={this.props.todo.isCompleted ? 'green' : 'transparent'}>
                <td>{this.props.todo.id}</td>
                <td>{this.props.todo.task}</td>
                <td>{this.props.todo.isCompleted.toString()}</td>
                <td>
                    <button onClick={this.completeHandler}>Complete</button> <strong> | </strong>
                    <button onClick={this.deleteHandler}>Delete</button>
                </td>
            </tr>
        )
    }
}

class TodoFormComponent extends React.Component {

    addTodo = (ev) => {
        ev.preventDefault();
        let task = document.getElementById('task').value;
        console.log('Clicked Add Todo', task);
    }

    inputChnageHandler = (event) => {
        console.log('yahaoaooaooo', event.target.value)
    }

    render() {
        return (
            <form>
                <input type="text" id="task" name="task"
                    onChange={this.inputChnageHandler
                        //     () => {
                        //     console.log('yahoooo')
                        // }
                    }
                    placeholder="type some task" />
                <input type="submit" name="submit-btn" value="Add Todo" onClick={this.addTodo} />
            </form>
        )
    }

}


export default Todos;