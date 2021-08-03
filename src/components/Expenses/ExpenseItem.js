
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'; 
import Card from "../UI/Card"

const ExpenseItem = (props) => {
//1
    return (
        <Card className="expense-item"> 
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;

// 1- classname no longer means the same here because "Card" is a custom
//  component making it now a prop which is then passed tto Card 