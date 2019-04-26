/**
 * Api.js
 *
 * Users api
 */
import http from "./http";

export default {
  getUsers: async () => {
    let res = await http.get("/users");
    return res.data;
  },
  findUser: async id => {
    let res = await http.get("/users/" + id);
    return res.data;
  },
  createUser: async user => {
    let res = await http.post("/users/", user);
    return res.data;
  },
  updateUser: async user => {
    let res = await http.put("/users/" + user.id, user);
    return res.data;
  },
  throwError: async () => await http.get("/asdfasdf")
};
