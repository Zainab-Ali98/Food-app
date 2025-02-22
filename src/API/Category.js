import instance from "./index";

const getAllCategory = async () => {
  const res = await instance.get("/category");
  return res.data;
};

const getAllResturants = async () => {
  const res = await instance.get("/resturant");
  return res.data;
};

const getAllResturantsByID = async (id) => {
  const res = await instance.get(`/resturant/${id}`);
  return res.data;
};

const getAllRestaurantsItem = async (id) => {
  console.log(`ID : ${id}`);
  const res = await instance.get(`/resturant/${id}/items`);
  console.log("res");
  console.log(res);

  return res.data;
};

export {
  getAllCategory,
  getAllResturants,
  getAllResturantsByID,
  getAllRestaurantsItem,
};
