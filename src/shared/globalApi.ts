import axios from "axios";

// For some reason, the search results return places near user current location when radius is changed
// This even though I have the lat and lng hard-coded to Oakland, CA at the moment
const getGooglePlace = (category: string, radius: number) => {
  return axios.get(
    `/api/google-place?category=${category}&radius=${radius}&lat=37.804363&lng=-122.271111`
  );
};

const someOtherFunction = () => {};

export { getGooglePlace, someOtherFunction };
