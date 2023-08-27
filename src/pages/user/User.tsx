import "./user.scss"
import Single from "../../components/single/Single.tsx";
import {singleUser} from "../../data";

const User = () => {
    return (
        <div>
            <Single {...singleUser}/>
        </div>
    );
};

export default User;