import axios from "axios";
import { notFound } from "next/navigation";

export const checkIp = async () => {
  const { data: ip } = await axios.get("https://api.ipify.org/?format=json");
  return ip;
};
