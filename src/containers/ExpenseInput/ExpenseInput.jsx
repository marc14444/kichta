import { AddExpense } from "store/expense/expense-slice";
import s from "./style.module.css";
import { useDispatch } from "react-redux";

export function ExpenseInput(props) {

  const dispatch = useDispatch();

  function submit(e){
    
    e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const name = formData.get('name');
      const price = formData.get('price');
      //console.log(name, price);
      dispatch(AddExpense({name, price}));
  }
  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Ajouter
          </button>
        </div>
      </div>
    </form>
  );
}
