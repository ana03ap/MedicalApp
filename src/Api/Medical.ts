import axios from "axios";

const ApiMedical = axios.create({
  baseURL: "https://a-pi-medical.vercel.app/",
  //   baseURL: "https://facelessapi.kiura.co",
  // baseURL: "https://vbvwnx94-4000.use2.devtunnels.ms/",
});

export default ApiMedical;
