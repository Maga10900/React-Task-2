function ServicesItem({ obj }) {
  
    return (
      <li>
        <h2>{obj.product_name}</h2>
        <h3>{obj.product_description}</h3>
        <h3>{obj.product_price}</h3>
        <h4>{obj.store_name}</h4>
        <h5>{obj.store_address}</h5>
      </li>
    );
  }
  
  export default ServicesItem;