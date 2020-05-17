import React from 'react';

class PromiseExample extends React.Component {

    state = {
        users: [],
        ids: [
            'uqutub',
            'yasirali0',
            'huzaifa-ahmed',
            // 'gotoshoaib',
            // 'talhav',
            // 'Mohammad-Khalid23',
            // 'johnpapa',
            // 'tj',
            // 'Huzaifaahmed20'
        ]
    }

    componentDidMount() {
        this.promiseHandleTraditional();
        // this.promiseHandleAsyncAwait();
    }

    promiseHandleTraditional = () => {
        this.state.ids.forEach(id => {
            this.getGithubIdData(id)
                .then(response => response.json())
                .then(data => this.setState({ users: [...this.state.users, data] }))
                .catch(err => console.log('Error: ', err));
        });
    }

    promiseHandleAsyncAwait = () => {
        this.state.ids.forEach(async (id) => {
            try {
                let res = await this.getGithubIdData(id);
                let data = await res.json();
                this.setState({ users: [...this.state.users, data] })
            } catch (err) {
                console.log('Err Async: ', err);
            }
        });
    }

    getGithubIdData = (id) => {
        return fetch(`https://api.github.com/users/${id}`);
    }

    render() {
        return (
            <div>
                <h1>Promise Example</h1>
                {
                    this.state.users.map(u => {
                        return (
                            <div>
                                <img src={u.avatar_url} width="50" height="50" alt="avatar" />
                                <span>{u.login}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default PromiseExample;
