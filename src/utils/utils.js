import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

// fetch more data for the infinite scroll component takes the 10 next instances (pagination defined in the Django REST API)

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

// helper function for following users
export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on,
      // update its followers count and set its following id
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id,
      }
    : profile.is_owner
    ? // This is the profile of the logged in user
      // update its following count
      { ...profile, following_count: profile.following_count + 1 }
    : // this is not the profile the user clicked on or the profile
      // the user owns, so just return it unchanged
      profile;
};

export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on,
      // update its followers count and set its following id
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
      }
    : profile.is_owner
    ? // This is the profile of the logged in user
      // update its following count
      { ...profile, following_count: profile.following_count - 1 }
    : // this is not the profile the user clicked on or the profile
      // the user owns, so just return it unchanged
      profile;
};

// set the refresh token timestamp in local storage
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

// return a boolean thas says whether the token should be refreshed or not
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

// remove the token timestamp varable, used on logout
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
