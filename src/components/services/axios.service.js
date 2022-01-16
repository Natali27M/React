import axios from "axios";

import baseUrl from "../../configs/urls";

export const axiosService = axios.create({
    baseUrl
});


// import axios from "axios";
// import baseURL from "../configs/urls";
//
// const axiosService = axios.create({
//     baseURL
// });
//
// export default axiosService