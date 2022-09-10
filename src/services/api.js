import axios from "axios";

function apiHelper() {
  let occ = axios.create({baseURL:"https://api.github.com/"});
  return occ;
}

export { apiHelper };
