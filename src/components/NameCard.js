import React from 'react'

class NameCard extends React.Component {
    render() {
        const {name,number,isHuman,tags } = this.props;
        return (
            <div className="alert alert-success">
                <h1>姓名:{name}</h1>
                <ul>
                    <li>{number}</li>
                    <li>{isHuman ? <span>食人类</span> : <span>非分类</span>}</li>
                    <li>{tags}</li>
                </ul>
                <p>
                    {tags.map((tag,index)=>(
                        <span className="badge badge-pill" key={index}>{tag}</span>
                    ))}
                </p>
            </div>
        )
    }
}

export default NameCard