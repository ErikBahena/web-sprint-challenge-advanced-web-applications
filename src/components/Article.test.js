import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";
const testArticle = {
  id: "yMotM",
  headline:
    "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
  createdOn: "2021-11-05T12:23:23-07:00",
  author: "Susan Snyder",
  image: 175,
  summary:
    "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
  body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either.",
};

test("renders component without errors", () => {
  render(<Article article={testArticle} />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={testArticle} />);

  const headline = screen.queryByTestId("headline");
  const author = screen.queryByTestId("author");

  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  testArticle.author = "";

  render(<Article article={testArticle} />);

  const author = screen.queryByText("By Associated Press");
  expect(author).toBeInTheDocument;
});

test("executes handleDelete when the delete button is pressed", () => {
  const handleDelete = jest.fn();

  render(<Article article={testArticle} handleDelete={handleDelete} />);

  const deleteButton = screen.queryByTestId("deleteButton");
  userEvent.click(deleteButton);

  expect(handleDelete.mock.calls.length).toBe(1);
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
