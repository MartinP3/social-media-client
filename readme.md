# Workflow CA

## About
This project was a part of the workflow course, we were meant to add tests to various parts of the code to verify them working as intended, unit testing with Jest and end to end testing with Cypress both locally and through actions. </br>
This is a fork off of a teacher's example project for this course that we could use, it uses pre-commit hooks to run Prettier, ESlint and Jest to make sure the files are up to standard with formatting through Prettier, no redundant code through ESlint and no faulty unit-tests through Jest. <br/>
There are github actions in place to check my files with tests before letting them merge into the main branch.

## Status badges

[![Deploy static content to Pages](https://github.com/MartinP3/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/MartinP3/social-media-client/actions/workflows/pages.yml)

60% given up

[![Automated E2E Testing](https://github.com/MartinP3/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/MartinP3/social-media-client/actions/workflows/e2e-test.yml)

99% given up, works perfectly locally but no matter how I go about it even when reading the errors, looking them up and adding wait everywhere to see if it works.

[![Automated Unit Testing](https://github.com/MartinP3/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/MartinP3/social-media-client/actions/workflows/unit-test.yml)

## install guide
npm i </br>
npm run build </br>
npm run test
