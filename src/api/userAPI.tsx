import axios from "axios";

// const apiURL: string = `https://sociolify-be.onrender.com`;
const apiURL: string = `http://localhost:1000`;

export const createUserAPI = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/api/create`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const viewAllUserAPI = async () => {
  try {
    return await axios.get(`${apiURL}/api/views`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const likeUserAPI = async (_id: string) => {
  try {
    return await axios.post(`${apiURL}/api/${_id}/liked`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const sendFriendRequestMailAPI = async (
  _id: string,
  friendID: string
) => {
  try {
    return await axios
      .get(`${apiURL}/api/${_id}/${friendID}/send`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const acceptFriendRequestMailAPI = async (
  _id: string,
  friendID: string
) => {
  try {
    return await axios
      .get(`${apiURL}/api/${_id}/${friendID}/accepted`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const declineFriendRequestMailAPI = async (
  _id: string,
  friendID: string
) => {
  try {
    return await axios
      .get(`${apiURL}/api/${_id}/${friendID}/declined`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const beFriendAPI = async (_id: string, friendID: string) => {
  try {
    return await axios
      .patch(`${apiURL}/api/${_id}/${friendID}/be-friend`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};
