//using props to pass down different data or value to its children
export const Product = ({ productName, price, Available, categories }) => {
  return (
    <div>
      <p>Product: {productName}</p>
      <p>Price: {price}</p>
      <p>Availability: {Available ? "Available" : "Out of stock"}</p>
      <p>Categories: {categories.join(", ")}</p>
    </div>
  );
};
