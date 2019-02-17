import React from 'react'

const Commentlist = ({ comments }) => {
    return (
        <div className='comment-list-component'>
            <label>评论列表</label>
            <ul className='list-group mb-3'>
                {
                    comments.map((cos, index) =>
                        <li key={index} className="list-group-itme">{cos}</li>
                    )
                }
            </ul>
        </div>
    )
}

// class Commentlist extends React.Component {

//     render() {
//         const {comments} = this.props
//         return (
//             <div className='comment-list-component'>
//         <label>评论列表</label>
//         <ul className='list-group mb-3'>
//         {
//             comments.map((cos,index) =>
//               <li key={index} className="list-group-itme">{cos}</li>
//             )
//         }
//         </ul>
//         </div>
//         )
//     }
// }

export default Commentlist