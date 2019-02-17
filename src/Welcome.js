import React from 'react'

class Welcome extends React.Component {
    render() {
        const todolist = ['learn react', 'learn mobx', 'learn taro'];
        const islogin = false;
        return (
            <div>
                <h1>hello react</h1>
                <ul>
                    {
                        todolist.map(x =>
                            <li>{x}</li>
                        )
                    }
                </ul>
                {islogin ? <p>已经登录了</p> : <p>登陆</p>}
            </div>
        )
    }
}

export default Welcome