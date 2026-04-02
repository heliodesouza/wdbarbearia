import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  return result.user;
  
}