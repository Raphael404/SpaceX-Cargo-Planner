import { baseApiUrl } from "@/api/host";
import axios from "axios";

const axiosRemote = axios.create({
  baseURL: baseApiUrl,
});

export { axiosRemote };
