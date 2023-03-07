// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from "../../lib/queryApi"
import admin from "firebase-admin"
import { adminDb } from '../../firebaseAdmin'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body
    if (!prompt){
        res.status(400).json({answer: "Please provide a prompt!"})
    }
    
    if (!chatId){
        res.status(400).json({answer: "Please provide a chat ID!"})
    }

    const response = await query(prompt,chatId, model)

    const message: Message ={
        text: response || "ChatGPT was unable to find an answer for that!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: "ChatGPT",
            avatar: "https://firebasestorage.googleapis.com/v0/b/chatgpt-clone-767f1.appspot.com/o/ChatGPT-Icon-Logo.png?alt=media&token=94a1af08-f1c6-4c7a-b68e-cd16c862bb9a",
        },
    }

    await adminDb.collection('users').doc(session?.user?.email)
    .collection("chats").doc(chatId)
    .collection("messages").add(message)

    res.status(200).json({ answer: message.text })
}
