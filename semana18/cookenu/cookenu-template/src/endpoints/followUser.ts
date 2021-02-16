import { Request, Response } from "express";

export const followUser = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string

    const userToFollowId = req.body.userToFollowId
}