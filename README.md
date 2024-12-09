# Blog sharing app | Front-end

![https://react.dev/](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![https://mui.com/](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)![https://www.typescriptlang.org/](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)![https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)![https://redux-toolkit.js.org/](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

## About this project

This repository contains the front end for my blogging application project. Login status and user interface state (applied filters and notifications) are handled using Redux to avoid prop-drilling and to keep the React components as light as possible in terms of application logic.

Data fetching is managed by React Query because of how simple yet versatile it is. Maybe a bit overkill for this project, but I chose Redux for global state management because I am very familiar with it.

All token-requiring user operations are authenticated using Json Web Token.

I have also included Prettier and ESLint to maintain constant code formatting and quality across the project.

---

#### Creating new blogs

- Blogs can be created by entering required information

![](/documentation/createBlog.png)

#### Commenting

- Comments can be added

![](/documentation/addingComments.png)

#### Filtering

- Shown blogs can be filtered by different tags
- Multiple tags can be selected at once

![](/documentation/filtering.png) ![](/documentation/filtering2.png)

#### User page

- Shows user's blogs

![](/documentation/userPage.png)
