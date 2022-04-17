import ExpenseItem from './components/ExpenseItem';
function App(){
    let expenseDate = new Date(4, 17, 2022);
    let expenseTitle = "School Fee";
    let expenseAmout = 300;
    return <div>
       <ExpenseItem
           date={expenseDate}
           title={expenseTitle}
           amout={expenseAmout}>
       </ExpenseItem>
    </div>
}

export default App;