import { faker } from "@faker-js/faker";

const generateMockMovie = (movieTitle?: string) => ({
  id: faker.string.uuid(),
  poster_path: faker.image.avatar,
  title: movieTitle || faker.person.firstName(),
  release_date: faker.date.anytime().toString(),
});

export const generateMockMovies = (amount: number) => {
  let mockMovies;

  for (let i = 0; i < amount; i++) {
    if (i) {
      mockMovies.push(generateMockMovie());
    } else {
      mockMovies = [generateMockMovie()];
    }
  }

  return mockMovies;
};

export const USER_DEFINED_MOVIE_TITLE = "Mock Movie";

export const userDefinedMock = generateMockMovie(USER_DEFINED_MOVIE_TITLE);

export const popularMoviesMock = [
  ...generateMockMovies(19),
  generateMockMovie("popular"),
];
export const upcomingMoviesMock = [
  ...generateMockMovies(19),
  generateMockMovie("upcoming"),
];
export const topRatedMoviesMock = [
  ...generateMockMovies(19),
  generateMockMovie("top_rated"),
];
export const secondPageMock = generateMockMovies(5);
export const searchMock = [userDefinedMock];

export const mocksByCategories = {
  popular: { "1": popularMoviesMock, "2": secondPageMock },
  upcoming: { "1": upcomingMoviesMock, "2": secondPageMock },
  top_rated: { "1": topRatedMoviesMock, "2": secondPageMock },
};
