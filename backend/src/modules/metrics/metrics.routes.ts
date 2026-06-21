import { Router } from "express";
import { ingestMetric } from "./metrics.controller";

const router = Router();

router.post('/metrics', ingestMetric);

export default router;