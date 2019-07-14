export default async function (context) {
  // This is a good place for actions that have to be executed before every page/route change, both server and client-side
  console.log("(Global Middleware) SSR: " + process.server);
}

