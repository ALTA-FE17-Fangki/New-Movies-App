import { useEffect, useState } from "react";
import { MovieDetail } from "@/lib/apis/movies/type";
import { useParams } from "react-router-dom";
import { getData } from "@/lib/apis/movies/api";

const DetailMovies = () => {
  const { id } = useParams();
  const [data, setData] = useState<MovieDetail>();

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const fetchData = async (id: string) => {
    const response = await getData(id);
    setData(response);
    console.log(response);
  };

  return (
    <div
      onClick={() => {
        const favoriteMovie = localStorage.getItem("favoriteMovie");
        const arrFavorite = favoriteMovie ? JSON.parse(favoriteMovie) : [];
        const arrEdit = [...arrFavorite, data];
        localStorage.setItem("favoriteMovie", JSON.stringify(arrEdit));
      }}
    >
      Detail
    </div>
  );
};

export default DetailMovies;
