import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params : {
        key: "6ded8adacc7c427b927ad410807f67c9"
    }
    
})