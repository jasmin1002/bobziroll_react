import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

function App() {
  console.log(data[0])
  const list = data.map(
    item => <Card 
      key={item.id}
      item={item}
    />
  )
  return (
    <div className="container">
      <Header />
      {list}
    </div>
  );
}

export default App;
