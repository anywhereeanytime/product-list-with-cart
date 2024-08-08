import "./index.css";
import data from "./.././data.json";
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  return (
    <div className=" bg-customRose100 grid grid-cols-1 md:grid-cols-[70%_30%] md:p-5">
      <h1 className="text-4xl font-bold p-5 md:col-start-1 md:col-end-2">
        Desserts
      </h1>
      <section className="p-5 pt-0 grid grid-cols-1 gap-4 md:grid-cols-3 md:col-start-1 md:row-start-2 md:col-end-2">
        {data.map((item, index) => {
          console.log("Item data:", item); // Проверка данных
          return (
            <Card
              key={item.id}
              id={`item-${index}`}
              image={item.image.desktop}
              subtitle={item.category}
              maintitle={item.name}
              price={`$${item.price.toFixed(2)}`}
            />
          );
        })}
      </section>
      <div className="md:col-start-2 md:row-start-1 md:row-span-2 md:mt-8 flex justify-center items-start">
        <Cart />
      </div>
    </div>
  );
}

export default App;
