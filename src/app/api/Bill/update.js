import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { Prisma } from "@prisma/client";

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    // Signed in
    const userId = session.user.id;
    // 
    const{total_amount} = req.body
    // const thisbill = 
    await Prisma.bill.update({where:{userId:userId},
        data:{
        Total_amount:total_amount
    }})
    // const thiscat = await Prisma.category.findMany({where:{Bill_id:thisbill.billId}})
    // const newItem = await Prisma.item.update({where:{cat_id:thiscat.catid},data:{
    //     itemname:itemname,
    //     price:price
    // }})
    console.log("Session", JSON.stringify(session, null, 2))
  } else {
    // Not Signed in
    res.status(401).json("User unauthorized")
  }
  res.end()
}