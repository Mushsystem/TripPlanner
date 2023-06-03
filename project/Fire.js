// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore,collection,addDoc,query,orderBy,onSnapshot,doc,updateDoc,deleteDoc} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Votre configuration Firebase pour votre application web
const firebaseConfig = {
  // Placez ici vos identifiants Firebase (SDK) 
  apiKey: "AIzaSyDAIEzXGoizDTWX0vdrEnGjnUY0LlliggY",
  authDomain: "tripplanner-ce0d2.firebaseapp.com",
  projectId: "tripplanner-ce0d2",
  storageBucket: "tripplanner-ce0d2.appspot.com",
  messagingSenderId: "16356849101",
  appId: "1:16356849101:web:c417f8e3da9b64e8e64084"
}

// Initialisez Firebase avec la configuration
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tripsCollection = collection(db, 'trips');

// Fonction pour obtenir la liste des voyages depuis Firestore
export const getTrips = callback => {
  const q = query(tripsCollection, orderBy('title', 'asc'));
  onSnapshot(q, snapshot => {
    let trips = [];
    snapshot.forEach(doc => {
      trips.push({ id: doc.id, ...doc.data() });
    });
    callback(trips);
  });
};

// Fonction pour ajouter un voyage à Firestore
export const addTrip = trip => {
  addDoc(tripsCollection, trip);
};

// Fonction pour mettre à jour un voyage dans Firestore
export const updateTrip = trip => {
  updateDoc(doc(db, 'trips', trip.id), trip);
};

// Fonction pour supprimer un voyage de Firestore
export const deleteTrip = trip => {
  deleteDoc(doc(db, 'trips', trip.id));
};