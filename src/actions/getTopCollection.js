import API from "../api/api.js";

const getTopCollection = ({ day, setData }) => {
  API.get(`/top_collection/${day}/100`)
    .then((res) => setData(res.data.list))
    .catch((err) => console.error(err));
};

export default getTopCollection;
