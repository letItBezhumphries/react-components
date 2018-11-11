
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>{this.props.value}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem key={item.toString()} value={item} />
    )}
  </ul>
);

// function ListItem(props) {
//   return <li>{props.value}</li>
// }

// function GroceryList(props) {
//   const items = props.items;
//   const listItems = items.map((item) =>
//     <ListItem key={item.toString()} value={item}/>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

const items = ["Maple Syrup", "Waffle Maker", "Orange Juice", "Fried French Toast", "Advil"];
ReactDOM.render(
  <GroceryList items={items} />,
  document.getElementById('app'));








