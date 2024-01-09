import { Response } from "@/lib/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { Movie, MovieDetail } from "./type";

export const getNowPlaying = async () => {
  try {
    const response = await axiosWithConfig.get(`movie/now_playing`);
    return response.data as Response<Movie[]>;
  } catch (error: any) {
    throw Error("failed to get NowPlaying movies");
  }
};

export const getPopular = async (page: number) => {
  try {
    const response = await axiosWithConfig.get(`movie/popular?page=${page}`);
    return response.data as Response<Movie[]>;
  } catch (error: any) {
    throw Error("failed to get NowPlaying movies");
  }
};

export const getData = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`/movie/${id}`);

    return response.data as MovieDetail;
  } catch (error: any) {
    throw Error("failed to get NowPlaying movies");
  }
};
