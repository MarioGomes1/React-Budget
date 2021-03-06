import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import Card from "../UI/Card";
import "../UI/Card.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (date) => {
    setFilteredYear(date);
  };

  return (
    <Card>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map((expense, i) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};
//
//       <Card className="expenses">
//         <ExpenseItem
//           title={props.expenses[0].title}
//           amount={props.expenses[0].amount}
//           date={props.expenses[0].date}
//         />
//         <ExpenseItem
//           title={props.expenses[1].title}
//           amount={props.expenses[1].amount}
//           date={props.expenses[1].date}
//         />
//         <ExpenseItem
//           title={props.expenses[2].title}
//           amount={props.expenses[2].amount}
//           date={props.expenses[2].date}
//         />
//         <ExpenseItem
//           title={props.expenses[3].title}
//           amount={props.expenses[3].amount}
//           date={props.expenses[3].date}
//         />
//       </Card>
//     </div>
//   );
// };

export default Expenses;
