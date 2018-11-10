function ListItem(props) {
  return <li>{props.item}</li>;
}; 

var GroceryList = () => (
  <div> 
    <h1> My Badass & Simple Grocery list </h1> 
    <ul>
      <ListItem item="Maple Syrup"/>
      <ListItem item="Waffle Maker"/>
      <ListItem item="Orange Juice"/>
      <ListItem item="Fried-French Toast"/>
    </ul>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
