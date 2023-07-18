import { lists } from "./keystone/schema";
import { getContext } from "@keystone-6/core/context";
import { resetDatabase } from "@keystone-6/core/testing";
import path from "node:path";
import * as PrismaModule from ".prisma/client";
import baseConfig from "./keystone";
import { CREATE_USER, GET_USER_BY_ID } from "./gql";
import { createUserData } from "./keystone/utils";
import { createUser, getUserById, createPost } from "./keystone/test.utils";

const dbUrl = `file:./keystone/test-keystone.db`;
const prismaSchemaPath = path.join(__dirname, "schema.prisma");

const config = { ...baseConfig, db: { ...baseConfig.db, url: dbUrl } };

beforeEach(async () => {});

let createdUser;

beforeAll(async () => {
  await resetDatabase(dbUrl, prismaSchemaPath);
  createdUser = await createUser();
  console.log(createdUser);
  // userData: {
  //   name: 'Phyllis Haley',
  //   email: 'Roel85@hotmail.com',
  //   password: 'KzIpeajRkLMA6te'
  // },
  // createUserResult: [Object: null prototype] {
  //   createUser: [Object: null prototype] {
  //     id: 'clk8agq4p0002wnyg9inqehrm',
  //     name: 'Phyllis Haley',
  //     email: 'Roel85@hotmail.com'
  //   }
  // }
});

export const context = getContext(config, PrismaModule);

describe("Keystone Tests", () => {
  createUser();
  it("should create a new user", async () => {
    const {
      userData: { name, email },
      createUserResult,
    } = await createUser();

    // Проверяем, что запрос выполнился без ошибок
    expect(createUserResult.errors).toBeUndefined();

    // Проверяем, что пользователь был успешно создан
    expect(createUserResult.createUser).toMatchObject({
      name: name,
      email: email,
    });
  });

  it("should retrieve a user by ID", async () => {
    const {
      userData: { name, email },
      createUserResult,
    } = await createUser();

    const {
      createUser: { id },
    } = createUserResult;

    const data = await getUserById(id);

    // Проверяем, что запрос выполнился без ошибок
    expect(data.errors).toBeUndefined();

    // Проверяем, что полученный пользователь соответствует ожидаемым значениям
    expect(data.user).toMatchObject({
      id,
      name: name,
      email: email,
    });
  });

  it("should create a new post", async () => {
    const { createPostResult, post } = await createPost(
      createdUser?.createUser?.id
    );
    console.log(createPostResult);
  });
  it("should return an error when creating a user with a duplicate email", async () => {
    const { userData } = await createUser();

    try {
      const a = await createUser(userData);
      console.log("createUser", a);
    } catch (error) {
      console.log(error);
      expect(error).toBeDefined();
    }
  });
});
