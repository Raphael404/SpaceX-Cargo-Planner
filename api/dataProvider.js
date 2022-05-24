import { axiosRemote as axios } from "@/utils/axios";
import { handleError, handleSuccess } from "./handler";

export const get = async (resource, throwError = false) => {
  return new Promise((resolve, reject) =>
    axios
      .get(`/${resource}`)
      .then(handleSuccess(resolve))
      .catch(handleError((err) => (throwError ? reject(err) : resolve({}))))
  );
};
