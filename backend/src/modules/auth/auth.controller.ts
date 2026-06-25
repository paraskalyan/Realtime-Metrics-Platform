import { NextFunction, Request, Response } from "express";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};
