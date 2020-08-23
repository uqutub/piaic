import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Firebase } from '../service';

export const Chat = () => {
    const history = useHistory();
    const [todo, setTodo] = useState('');
    const [chatRef, setChatRef] = useState(null);
    const [usersList, setUsersList] = useState([]);
    const [chatId, setchatId] = useState('user8-user10');
    const [chat, setChat] = useState([]);

    useEffect(() => {
        Firebase.chatRef(chatId).on('value', (snapshot) => {
            // console.log('snapshot ', snapshot.val()); 
            snapshot.val() && setChat(Object.values(snapshot.val()));
        });

        Firebase.users().on('value', (snapshot) => {
            console.log('snapshot ', snapshot.val()); 
            snapshot.val() && setUsersList(Object.values(snapshot.val()));
        });

        // setUserRef

    }, []);

    const addTodo = async (ev) => {
        ev.preventDefault();

        Firebase.chatRef(chatId).push({ msg: todo, from: Firebase?.auth?.currentUser?.email })

        setTodo('');
    }


    return (
        <div>
            <h1>Chat {Firebase?.auth?.currentUser?.email}</h1>

            <h4>List of Users</h4>
            <ul>    
                {
                    usersList.map(u => <li>{u.email}</li>)
                }
            </ul>

            <form>
                <input type="text" name="todo" value={todo} onChange={({ target: { value } }) => setTodo(value)} />
                <button onClick={addTodo}>Send</button>
            </form>

            <ul>
                {
                    chat.map(t => <li key={t.key}>
                        <span style={{ color: t.status ? 'green' : '#585858' }}>{t.msg}</span>
                        {" "} from {t.from}
                    </li>)
                }
            </ul>

        </div>

    )

}