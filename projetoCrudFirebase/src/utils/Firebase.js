import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../keys/firebase_key";
import { getAuth } from "firebase/auth";

export default class Firebase {
  static user = null;
  constructor() {
    this.app = initializeApp(firebaseConfig);
  }

  getFirestoreDb() {
    return getFirestore(this.app);
  }

  getAuth() {
    return getAuth(this.app);
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
}
