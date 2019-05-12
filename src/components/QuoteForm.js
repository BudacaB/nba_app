import React from 'react';
import './QuoteForm.css';

const QuoteForm = () => {
    return (
        <form id="todo-form">
        <textarea rows="5" cols="50" placeholder="Add Quote"></textarea><br></br>
        <button>Add Quote</button>
        </form>
    )
}

export default QuoteForm;