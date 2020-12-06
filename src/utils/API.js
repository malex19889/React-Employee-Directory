import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function() {
    return axios({
      method: 'get',
      url: "https://randomuser.me/api/?results=120",
      responseType: 'json'
    })
  }
};
