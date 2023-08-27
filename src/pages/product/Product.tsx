import "./product.scss"
import Single from "../../components/single/Single.tsx";
import {singleProduct} from "../../data";

const Product = () => {

    //fetch data and send to a single component
    return (
        <div>
            <Single {...singleProduct}/>
        </div>
    );
};

export default Product;