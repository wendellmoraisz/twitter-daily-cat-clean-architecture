import { Router } from "express"
import { makeTweetMediaController } from "../factories/register";
import { expressRouteAdapter } from "../adapters/express-route-adapter";

const router = Router();

router.get("/tweet-media", expressRouteAdapter(makeTweetMediaController()));

export default router;