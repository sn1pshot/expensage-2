import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { Prisma } from "@prisma/client";

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    // Signed in
    const userId = session.user.id;
    const data = await Prisma.bill.findMany({where:{userId:userId}})
    console.log("Session", JSON.stringify(session, null, 2))
  } else {
    // Not Signed in
    res.status(401).json("User unauthorized")
  }
  res.end()
}