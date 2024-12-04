import { useState } from "react"
import { goods } from "../../public/data"
import Services from "./Services/Services"
function MainComp() {
    let [goodArray, setGoods] = useState(goods)

    function handleSearch(event) {
        let value = event.target.value.toLowerCase();
        let filteredArray = goods.filter((item) => 
            item.product_name.toLowerCase().includes(value)
        );
        setGoods(filteredArray);
    }

    return (
        <main>
            <input type="text" onChange={handleSearch}/>
            <Services setServices={setGoods} servicesArray={goodArray} />
        </main>
    )
}

export default MainComp