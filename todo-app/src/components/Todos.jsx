import React from 'react'
import "./Todos.css"
const Todos = (props) => {
    const todos = props.todos;
    const onDelete = props.onDelete;
    return (
        <div className='container'>
            {
                todos.map((todo,index)=>{
                    return <div className='todo' key={index}>
                        <p>{todo}</p>
                        <div className="bt-area">
                            <button className='bt-1' onClick={()=>onDelete(index)}>Delete</button>
                            <button className='bt-2'>Edit</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Todos