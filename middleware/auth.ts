import jwt from 'jsonwebtoken';

export interface DecodedToken {
  userId: string;
  role: 'user' | 'admin';
  email: string;
}

export function verifyToken(req: Request): DecodedToken | null {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  
  try {
    const token = authHeader.split(' ')[1];
    return jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
  } catch {
    return null;
  }
}