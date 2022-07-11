import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default class FirebaseUserService {

  static signUp = (
		auth,
		login,
		password,
		callback,
	)=>{
		createUserWithEmailAndPassword(auth, login, password, callback)
			.then((userCredential) => {
				callback(true, userCredential.user)
			})
			.catch((err) => {
				callback(false, err.code)
				console.error(err)
			})
	}

  static login = (auth, login, password, callback) => {
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        callback(userCredential.user);
      })
      .catch((err) => {
        console.log(err);
        callback(null);
      });
  };

  static logout = (auth, callback) => {
    signOut(auth)
      .then(() => {
        callback(true);
      })
      .catch((err) => {
        console.log(err);
        callback(false);
      });
  };
}
