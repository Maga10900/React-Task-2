import ServicesItem from "./ServicesItem";
function Services({servicesArray,setServices}) {
    return (
      <section className="services-list">
        <ul>
          
          {servicesArray.map((item) => (
            <ServicesItem
              key={item.id}
              obj={item}
            />
          ))}
        </ul>
      </section>
    );
  }
  
  export default Services;