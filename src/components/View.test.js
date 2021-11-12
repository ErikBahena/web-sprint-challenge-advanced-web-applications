import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import View from "./View";
import articleService from "../services/articleServices";
jest.mock("../services/articleServices");

const testArticles = [
  {
    id: "DYusJ",
    headline:
      "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
    createdOn: "2021-11-05T12:59:06-07:00",
    author: "Susan Snyder",
    image: 175,
    summary:
      "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
    body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either.",
  },

  {
    headline:
      "A tropical depression could form in the next few days, forecasters say",
    id: "Px6Ms",
    createdOn: "2021-11-08T12:59:06-08:00",
    author: "Alex Harris",
    image: 171,
    summary:
      "Forecasters said the system will likely turn into a tropical depression late this weekend or early next week as it moves west-northwest.",
    body: "Forecasters continue to monitor a disturbance in the far eastern Atlantic that has a high chance of turning into a tropical depression in the next few days. They’re also watching another system that’s quickly moving across the Atlantic, though its formation chances remain fairly low.",
  },

  {
    id: "p3cq2",
    createdOn: "2021-11-11T12:59:06-08:00",
    author: "Jordan Mcpherson",
    image: 338,
    headline: "How Hialeah’s Ariel Torres won a bronze metal",
    summary:
      "South Florida found its way to the podium in karate’s first-ever showing in the Olympics.",
    body: "Torres, who entered the Olympics ranked No. 6 in the world and as the top male Team USA Olympian in kata, reached his bronze medal bout by finishing second in his pool in each of the first three rounds behind eventual silver medalist Damian Quintero of Spain. Torres outscored Venezuela’s Antonio Jose Diaz Fernandez 26.72-26.34 for the bronze. Japan’s Ryo Kiyuna won gold, while Turkey’s Ali Sofuoglu beat South Korea’s Heejun Park for the second bronze of the event.",
  },
];

test("renders zero articles without errors", async () => {
  // The test still passes and the articles are being ran through the view component properly.

  articleService.mockResolvedValueOnce([]);
  render(<View />);
});

test("renders three articles without errors", async () => {
  // The test still passes and the articles are being ran through the view component properly.
  articleService.mockResolvedValueOnce(testArticles);
  render(<View />);
});

// Task List
// 1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
