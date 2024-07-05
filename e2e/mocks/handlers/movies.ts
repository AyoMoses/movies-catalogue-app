import { http, HttpResponse } from "msw";
import { mocksByCategories, searchMock } from "../data/movies";

const API_BASE_URL = "https://api.themoviedb.org/3";

export const moviesHandlers = [
  http.get(`${API_BASE_URL}/movie/:category`, ({ request, params }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || "1";
    const category = String(params.category);

    const mockMovies = mocksByCategories[category];

    const responseData = {
      page,
      results: mockMovies[page],
      total_pages: 2,
      total_results: mockMovies[1].length + mockMovies[2].length,
    };

    return HttpResponse.json(responseData, {
      status: 200,
    });
  }),
  http.get(`${API_BASE_URL}/search/movie`, ({ request }) => {
    const responseData = {
      page: 1,
      results: searchMock,
      total_pages: 1,
      total_results: searchMock.length,
    };

    return HttpResponse.json(responseData, {
      status: 200,
    });
  }),
];
