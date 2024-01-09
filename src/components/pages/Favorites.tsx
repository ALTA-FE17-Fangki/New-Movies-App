import React from "react";
import CardMovie from "../CardMovie";
import { MovieDetail } from "@/lib/apis/movies/type";

const Favorites = () => {
  const favoriteMovie = localStorage.getItem("favoriteMovie");
  const arrFavorite: MovieDetail[] = favoriteMovie ? JSON.parse(favoriteMovie) : [];
  return (
    <div>
      <div className="grid grid-cols-4 justify-items-center text-center gap-8 overflow-hidden">
        {arrFavorite &&
          arrFavorite.map((item, index) => {
            return <CardMovie key={index} data={item} />;
          })}
      </div>
    </div>
  );
};

export default Favorites;
