import axios from "axios";

import baseURL from "../configs/urlsCars";
import baseURL1 from "../configs/urlsJSONPlaceholder";

export const axiosService = axios.create({baseURL});
export const axiosService1 = axios.create({baseURL:baseURL1});
