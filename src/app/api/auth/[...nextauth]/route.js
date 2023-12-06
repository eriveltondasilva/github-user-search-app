import NextAuth from 'next-auth';
import { authOptions } from './providers';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
