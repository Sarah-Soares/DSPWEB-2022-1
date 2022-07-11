import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    updateDoc,
} from 'firebase/firestore';

export default class TeacherService {
    
    static unscribe = null;

    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'teachers'))
            .then((querySnapshot) => {
                let teachers = [];
                querySnapshot.forEach((doc) => {
                    const { name, admission,salary } = doc.data();
                    teachers.push({
                        _id: doc.id,
                        name, 
                        admission,
                        salary
                    });
                });
                callback(teachers);
            })
            .catch((err) => console.error(err));
    };

    static listOnSnapshot = (firestore, callback) => {
        let q = query(collection(firestore, 'teachers'), orderBy('name'));
        TeacherService.unscribe = onSnapshot(q, (querySnapshot) => {
            let teachers = [];
            querySnapshot.forEach((doc) => {
                const { name, admission,salary } = doc.data();
                teachers.push({
                    _id: doc.id,
                    name,
                    admission,salary
                });
            });
            callback(teachers);
        });
    };

    static retrieve = async (firestore, callback, _id) => {
        const docRef = doc(firestore, 'teachers', _id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            callback(docSnap.data());
        } else {
            console.log('Não foi possível achar o professor!');
        }
    };

    static retrievePromisse = async (firestore, callback, _id) => {
        const docRef = doc(firestore, 'teachers', _id);
        getDoc(docRef)
            .then(() => callback(docSnap.data()))
            .catch((err) => console.error(err));
    };

    static update = (firestore, callback, _id, body) => {
        const docRef = doc(firestore, 'teachers', _id);
        updateDoc(docRef, body)
            .then(() => callback(_id))
            .catch((err) => console.error(err));
    };

    static create = (firestore, callback, body) => {
        addDoc(collection(firestore, 'teachers'), body)
            .then((doc) => callback(doc.id))
            .catch((err) => console.error(err));
    };

    static delete = (firestore, callback, _id) => {
        const docRef = doc(firestore, 'teachers', _id);
        deleteDoc(docRef)
            .then(() => callback(_id))
            .catch((err) => console.err(err));
    };
}
