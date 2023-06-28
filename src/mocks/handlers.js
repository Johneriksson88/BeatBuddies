import { rest } from "msw";

const baseURL = "https://beatbuddies-api-a72df4dfc93e.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "adam",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image: "https://res.cloudinary.com/dzsyz2gkm/image/upload/v1/media/images/favicon_uhc8ob"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];