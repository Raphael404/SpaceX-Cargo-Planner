import { get } from "@/api/dataProvider";
import { config } from "./config";

export const getShipsList = () => {
  return get(config.ships);
};
