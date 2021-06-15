import React, {useState} from "react";
import { connect } from "react-redux";
import {actionCreators} from "../Store";


const Home = ({todos, addTodo}) => {

    const [text, setText] = useState("")
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(typeof todos);
        addTodo(text);
        setText("");
    }

    return( 
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {JSON.stringify(todos)}
            </ul>
        </>
    );
}

const mapStateToProps = (state) => {
    return { todos: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);