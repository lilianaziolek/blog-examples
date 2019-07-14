export default async function (context) {
  //This might be a good place to check if user is logged in and redirect to login page if not (could use router guards too)
  console.log("(Local Middleware) SSR: " + process.server);
}

