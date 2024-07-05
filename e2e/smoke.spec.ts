import { test, expect } from "./setup-tests";
import {
  USER_DEFINED_MOVIE_TITLE,
  mocksByCategories,
  searchMock,
} from "./mocks/data/movies";

test.describe("Movie Shelf Smoke Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load popular movies on initialisation", async ({ page }) => {
    const firstPage = mocksByCategories["popular"][1];

    const movies = page.getByRole("listitem");

    await expect(movies).toHaveCount(firstPage.length);
  });

  test("should load more movies once page is scroll to last movie", async ({
    page,
  }) => {
    const firstPage = mocksByCategories["popular"][1];
    const secondPage = mocksByCategories["popular"][2];

    const movies = page.getByRole("listitem");

    await expect(movies).toHaveCount(firstPage.length);

    await page.getByTestId("lastElement").scrollIntoViewIfNeeded();

    await expect(movies).toHaveCount(firstPage.length + secondPage.length);
  });

  test("should load movie categories when category filter is clicked", async ({
    page,
  }) => {
    // Popular Category
    const firstPage = mocksByCategories["popular"][1];

    await page.getByRole("button", { name: "Categories" }).click();

    const sortItems = page.getByRole("checkbox");
    await expect(sortItems).toHaveCount(3);

    await expect(page.getByRole("listitem")).toContainText(
      firstPage.map((item) => item.title)
    );

    const allNames = page.getByTestId("movieName");

    // Top Rated Category

    const topRatedPage = mocksByCategories["top_rated"][1];

    const topRatedCheckbox = page.getByRole("checkbox", {
      name: "Top Rated",
    });
    await topRatedCheckbox.click();
    await expect(topRatedCheckbox).not.toBeVisible();

    await expect(allNames).toContainText(
      topRatedPage.map((item) => item.title)
    );

    // Upcoming Category

    const upcomingPage = mocksByCategories["upcoming"][1];

    await page.getByRole("button", { name: "Categories" }).click();

    const upcomingCheckbox = page.getByRole("checkbox", {
      name: "Upcoming",
    });
    await upcomingCheckbox.click();
    await expect(upcomingCheckbox).not.toBeVisible();

    await expect(allNames).toContainText(
      upcomingPage.map((item) => item.title)
    );
  });

  test("should search by name", async ({ page }) => {
    const firstPage = mocksByCategories["popular"][1];

    const input = page.getByPlaceholder("Enter movie name");
    expect(input).not.toBeVisible();

    await page.getByRole("button", { name: "Filters" }).click();
    expect(input).toBeVisible();

    const movies = page.getByRole("listitem");

    expect(movies).toHaveCount(firstPage.length);

    await input.fill(USER_DEFINED_MOVIE_TITLE);

    await expect(movies).toHaveCount(searchMock.length);

    // Clearing Input
    page.getByRole("button", { name: "clear input" }).click();

    await expect(movies).toHaveCount(firstPage.length);
  });
});
