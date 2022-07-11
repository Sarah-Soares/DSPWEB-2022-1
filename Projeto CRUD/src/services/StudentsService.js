import { collection, getDocs } from "firebase/firestore";

export default class StudentsService {
	static unscribe = null;

	static list = (firestore, callback) => {
		getDocs(collection(firestore, "students"))
			.then((querySnapshot) => {
				let students = [];
				querySnapshot.forEach((doc) => {
					const { name, course, ira } = doc.data();
					students.push({
						_id: doc.id,
						name,
						course,
						ira,
					});
				});
				callback(students);
			})
			.catch((err) => console.error(err));
	};
}
