import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // auth = user's session
    // request = incoming request
    authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        const isOnRecipes = nextUrl.pathname.startsWith('/recipes');
        if (isOnRecipes) {
            if (isLoggedIn) return true;
            return false;
        } else if (isLoggedIn) {
            return Response.redirect(new URL('/recipes', nextUrl));
        }
        return true;
    },
},
providers: [],
secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;