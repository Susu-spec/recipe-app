import { serialize } from 'cookie';
import NextCrypto from 'next-crypto'; 
import { NextApiRequest, NextApiResponse } from "next";
import { signIn } from "@/auth"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const sessionData = req.body;
    const authSecret = process.env.NEXTAUTH_SECRET;
    const crypto = new NextCrypto('x1BHVT7xYQeSiAzL60VBX+hH+zyYrjT3CujdWechVBM');
    const encryptedSessionData = await crypto.encrypt(JSON.stringify(sessionData));;

    
    try {
        const { email, password } = req.body;
        await signIn('credentials', { email, password })
        res.status(200).json({ success: true })
    } catch (error) {
        if ((error as { type: string }).type === 'CredentialsSignin') {
            res.status(401).json({ error: 'Invalid Credentials.'})
        } else {
            res.status(500).json({ error: 'Something went wrong'})
        }
    }
    const cookie = serialize('session', encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
      })
      res.setHeader('Set-Cookie', cookie)
      res.status(200).json({ message: 'Successfully set cookie!' })
}