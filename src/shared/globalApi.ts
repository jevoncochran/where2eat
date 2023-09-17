import axios from "axios";

// TODO: Fix this!!!
// For some reason, the search results return places near user current location when radius is changed
// This even though I have the lat and lng hard-coded to Oakland, CA at the moment
// This is only happening when raidus is undefined or 0 I believe
const getGooglePlace = (
  category: string,
  radius: number,
  lat: number,
  lng: number
) => {
  return axios.get(
    `/api/google-place?category=${category}&radius=${radius}&lat=${lat}&lng=-${lng}`
  );
};

const someOtherFunction = () => {};

export { getGooglePlace, someOtherFunction };
