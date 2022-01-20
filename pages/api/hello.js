import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // req - pre-builtin-middleware - cookies, query, body

  //   console.log("## nest api routes hello api request headers", req.headers);
  console.log(req.query);

  // https://nextjs.org/docs/api-routes/response-helpers
  // res - status, json, send, redirect

  res.status(200).json({ text: "Hello " + (req.query.name || "") });
}

export default handler;
