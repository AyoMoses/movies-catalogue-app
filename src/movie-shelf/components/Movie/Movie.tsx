import { Movie as MovieType } from "../../types";
import play from "./play.svg";

export const Movie = (props: MovieType) => {
  return (
    <>
      <div className="h-[152px] w-[152px] lg:h-[215px] lg:w-[215px] relative">
        <img
          src={`https://image.tmdb.org/t/p/w200/${props.poster_path}`}
          alt={props.title}
          className="h-full w-full object-cover object-top rounded-sm overflow-hidden drop-shadow-sm"
        />
        <div className="absolute bottom-[6px] right-[6px] w-[35px] h-[35px] grid place-items-center rounded-full bg-black border border-2 border-white border-opacity-50">
          <img role="presentation" src={play} alt="" />
        </div>
      </div>

      <div className="mt-4 text-center">
        <p
          data-testid={"movieName"}
          className="text-sm text-grey-dark font-sans-bold leading-[19.12px]"
        >
          {props.title}
        </p>
        <div className="w-full px-[6px] flex items-center justify-center font-sans leading-[13.66px]">
          <p className="text-xs text-opacity-40 text-black">
            {props.release_date
              ? new Date(props.release_date).getFullYear()
              : "Unknown"}
          </p>
        </div>
      </div>
    </>
  );
};