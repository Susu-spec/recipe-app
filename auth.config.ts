import type { NextAuthConfig } from 'next-auth';
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"


const githubConfig = {
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  enterprise: {
    baseUrl: 'https://github.com/Susu-spec'
  }
};

const googleConfig = {
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  authorization: {
    params: {
      prompt: "client",
      access_type: "offline",
      response_type: "code",
    }
  }
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
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
providers: [GitHub(githubConfig), Google(googleConfig)],
secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;