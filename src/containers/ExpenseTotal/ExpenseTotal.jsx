import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {

  const expenseList = useSelector(store => store.EXPENSE.expenseList)
  const IncomeInput = useSelector(store => store.EXPENSE.income)
  const totalExpenses = expenseList.reduce((accumulator, currentItem)=>{
      return accumulator + currentItem.price;
  },0)
  const remainingMoney = IncomeInput - totalExpenses
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Depense total</div>
        <div className={`col ${s.amount}`}>{totalExpenses} FCFA</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Monnaie restante</div>
        <div className={`col ${s.amount}`}>{remainingMoney} FCFA</div>
      </div>
    </div>
  );
}
