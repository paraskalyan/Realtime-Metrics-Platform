import { Request, Response, NextFunction } from "express";
import * as metricsService from "./metrics.service";

export const ingestMetric = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const metric = await metricsService.ingestMetric(req.body);

    res.status(202).json({
      success: true,
      data: metric,
    });
  } catch (error) {
    next(error);
  }
};
