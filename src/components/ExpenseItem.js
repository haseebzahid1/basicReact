import './ExpenseItem.css';
import React  from "react";
import ReactDOM  from "react-dom";
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    const month = props.date.toLocaleString('en-Us', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-Us', {day: '2-digit'});
        return (
            <div className="expense-item">
           <div className='expense-date__flex'>
                <span>{ month }</span>
                <span>{ year  }</span>
                <span>{ day }</span>
            </div>
            <div className='expense-item__description'>
            <h2 className="expense-item__h2">{props.title}</h2>
            <a href='#.' className='expense-item__price'>{ props.amout }</a>
            </div>
        </div>   
        );
    
}

export default ExpenseItem;