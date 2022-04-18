import ExpenseItem from './components/ExpenseItem';
import Card from './components/card';
function App(){
    let expenseDate = new  Date(2022, 4, 18);
    let expenseTitle = "School Fee";
    let expenseAmout = 300;
    return <div>
       <ExpenseItem
           date={expenseDate}
           title={expenseTitle}
           amout={expenseAmout}>
       </ExpenseItem>

       <Card 
       imgscr="https://wallpapercave.com/wp/wp4056410.jpg"
       title="A Netfilx Orignal Series"
       sname="DARK"
       link="https://www.netflix.com/in/title/80990668?source=35"
       />
       <Card 
       imgscr="https://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_1544944.jpg"
       title="A Netfilx Orignal Series"
       sname="extra curricular"
       link="https://www.netflix.com/in/title/80990668?source=35"
       />
       <Card 
       imgscr="https://images.justwatch.com/poster/8589251/s592"
       title="A Netfilx Orignal Series"
       sname="The Vampire Diaries"
       link="https://www.netflix.com/in/title/80990668?source=35"
       />

        

    </div>
}

export default App;