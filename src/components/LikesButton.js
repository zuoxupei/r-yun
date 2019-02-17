import React from 'react'

class LikesButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
        this.increaselikes = this.increaselikes.bind(this);
    }

    
    increaselikes() {
        // this.state.likes ++ ;
        console.log(this.state.likes);
        this.setState({
            likes:++this.state.likes
        })
    }

    render() {
        return (
            <div className="likes-button-component">
                <button type='button' onClick={()=>{this.increaselikes()}}
                className='btn btn-outline-primary btn-lg'>
                    {this.state.likes}
                </button>
            </div>
        )
    }
}

export default LikesButton