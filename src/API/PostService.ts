import axios, { AxiosResponse } from "axios";

export class PostService {

  static async getAll(limit: number = 10, skip: number = 0) {
    const response = await axios.get('https://dummyjson.com/posts', {
      params: {
        limit,
        skip,
      }
    });
    return response.data;
  }

  static async getById(id: string) {
    const response = await axios.get(`https://dummyjson.com/posts/${id}`);
    return response.data;
  }

  static async getCommentsById(id: string) {
    const response = await axios.get(`https://dummyjson.com/posts/${id}/comments`);
    return response;
  }
};