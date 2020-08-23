import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Firebase } from '../service';

export const Todo = () => {
    const history = useHistory();
    const [todo, setTodo] = useState('');
    const [todoRef, setTodoRef] = useState(null);
    const [uid, setUid] = useState(null);
    const [todos, setTodos] = useState([]);

    const authStateListner = () => {
        Firebase.auth.onAuthStateChanged(authUser => {
            // console.log('onAuthStateChanged ', authUser);
            if (authUser) {
                const { uid } = authUser;
                setUid(uid);
                setTodoRef(Firebase.todos(uid));
            } else {
                history.push('/signIn')
            }
        })
    }

    useEffect(() => {
        authStateListner();
    }, []);

    const todoAddListner = () => {
        todoRef.on('value', (snapshot) => {
            // console.log('snapshot ', snapshot.val()); 
            snapshot.val() && setTodos(Object.values(snapshot.val()))
        });
    }

    useEffect(() => {
        if (todoRef) {
            todoAddListner();
        }
    }, [todoRef]);

    const addTodo = async (ev) => {
        ev.preventDefault();

        // todoRef.push({ todo, status: false, key })


        const { key } = todoRef.push();

        // multi path update?? (bluk update :) )
        var updates = {};
        updates['/todos/' + uid + '/' + key] = { todo, status: false, key };
        updates['/count/todos/' + uid] = ++todos.length;


        Firebase.db.ref().update(updates);

        setTodo('');
    }


    return (
        <div>
            <h1>Todo</h1>

            <form>
                <input type="text" name="todo" value={todo} onChange={({ target: { value } }) => setTodo(value)} />
                <button onClick={addTodo}>Add Todo</button>
            </form>

            <ul>
                {
                    todos.map(t => <li key={t.key}>
                        <span style={{ color: t.status ? 'green' : '#585858' }}>{t.todo}</span>
                        {" "}
                        <button>Delete</button>
                    </li>)
                }
            </ul>

        </div>

    )

}