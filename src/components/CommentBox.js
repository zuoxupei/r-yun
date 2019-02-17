import React from 'react'

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '1'
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    submitForm(event) {
        console.log(this.state.value,this.textInout.value)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className='p-5' onSubmit={this.submitForm}>
                    <div className="from-group">
                        <label>留言内容</label>
                        <input type='text' className="from-control"
                            placeholder="请输入内容"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>提交</button>
                </form>

                <form>
                    <div>
                        <label>非受控组件</label>
                        <input className='from-control' placeholder='测试'
                        ref={(textInout)=>{this.textInout = textInout}}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentBox