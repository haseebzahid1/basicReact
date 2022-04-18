import ExpenseItem from './components/ExpenseItem';
import Card from './components/card';
import React  from "react";
import Sdata from './components/listCard';
console.log(Sdata[0]);

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

       {/* <Card 
  
       imgscr="https://images.justwatch.com/poster/8589251/s592"
       title="A Netfilx Orignal Series"
       sname="DARK"
       link="https://www.netflix.com/in/title/80990668?source=35"
       />
       <Card  
       imgscr="https://wallpapercave.com/wp/wp4056410.jpg"
       title="A Netfilx Orignal Series"
       sname="extra curricular"
       link="https://www.netflix.com/in/title/80990668?source=35"
       />
       <Card 
       imgscr="https://images.justwatch.com/poster/8589251/s592"
       title="A Netfilx Orignal Series"
       sname="The Vampire Diaries"
       link="https://www.netflix.com/in/title/80990668?source=35"
       /> */}

      <Card
       imgscr={Sdata[0].imgscr}
       title={Sdata[0].title}
       sname={Sdata[0].sname}
       link={Sdata[0].link} 
      />
      <Card
       imgscr={Sdata[1].imgscr}
       title={Sdata[1].title}
       sname={Sdata[1].sname}
       link={Sdata[1].link} 
      />
      <Card
       imgscr={Sdata[2].imgscr}
       title={Sdata[2].title}
       sname={Sdata[2].sname}
       link={Sdata[2].link} 
      />

    </div>
}

export default App;