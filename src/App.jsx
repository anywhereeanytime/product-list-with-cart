import "./index.css";
import data from './data.json';
import Card from "./components/Card";
import waffleWithBerries from "./../assets/images/image-waffle-desktop.jpg";

function App() {
  return (
    <>
      <Card
        image={waffleWithBerries}
        cartIcon={}
        subtitle="Waffle"
        maintitle="Waffle with berries"
        price="$5.50"
      />
    </>
  );
}

export default App;
