import { faker } from "@faker-js/faker";
const getName = () => faker.person.fullName();
const getEmail = () => faker.internet.email();
const getPassword = () => faker.internet.password();
const getWord = () => faker.lorem.word();
const content = () => faker.lorem.paragraphs();

function createUserData() {
  return {
    name: getName(),
    email: getEmail(),
    password: getPassword(),
  };
}

function createPostData(userId) {
  return {
    title: getWord(),
    content: [{ type: "paragraph", children: [{ text: `${content()}` }] }],

    // authorId: userId,
  };
}

export { createUserData, createPostData };
