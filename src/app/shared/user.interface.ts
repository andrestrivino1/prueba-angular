export interface User {
  id: string;
  email: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
}