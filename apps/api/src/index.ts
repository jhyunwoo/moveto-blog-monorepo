import { Hono } from "hono";
import { HonoOptionsType } from "./types";

const app = new Hono<HonoOptionsType>();

app.get("/message", (c) => {
  return c.text("Hello Hono!");
});

export default app;
