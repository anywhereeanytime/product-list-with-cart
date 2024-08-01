const Card = ({ image, cartIcon, subtitle, maintitle, price }) => {
  return (
    <div>
      <img src={image} alt="Dessert Image" />
      <button>
        <img src={cartIcon} alt="Cart icon" />
        Add to cart
      </button>
      <p>{subtitle}</p>
      <h4>{maintitle}</h4>
      <p>{price}</p>
    </div>
  );
};
export default Card;
