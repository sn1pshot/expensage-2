import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { Prisma } from "@prisma/client";


export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    // Signed in
    const userId = session.user.id;
    const { itemname, catname, price, total_amount } = req.body;
    const newBill = await Prisma.bill.create({
      data: {
        Total_amount: total_amount,
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });
    const newcat = await Prisma.category.create({
        data:{
            catname:catname,
            Bill:{
                connect: {
                    billId: newBill.billId
                }
            }
        }
    })
    const newItem = await Prisma.item.create({
        data:{
            itemname:itemname,
            Price: price,
            Category:{
                connect: {
                    catid: newcat.catid
                }
            }
        }
    })

    console.log("Session", JSON.stringify(session, null, 2));
  } else {
    // Not Signed in
    res.status(401).json("User unauthorized");
  }
  res.end();
};