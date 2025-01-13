import { User } from "firebase/auth";
import { db } from "../config/firebase.config";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { toast } from "react-toastify";

// function to save user info into database after successful authetication
export const saveUserToFireStoreDb = async (userInfo: User) => {
    const userId = userInfo.uid
    const dataToSave = {
        userId: userId,
        emailId: userInfo.email,
        fullName: userInfo.displayName,
        profilePic: userInfo.photoURL
    }
    await setDoc(doc(db, "users", userId), dataToSave).then(() => console.log("user saved")
    ).catch(() => toast.error("Error while saving user to database"));
}


// function for save trips to database
export const addToTripHistory = async (tripDetails: string, userEmail: string) => {
    console.log('saving to db')
    const docId = Date.now().toString()
    await setDoc(doc(db, "generated_plans", docId), {
        emailId: userEmail,
        generated_responses: tripDetails,
        created_at: Date.now()
    }).then(() => console.log("user saved")
    ).catch((err) => console.log(err));
}

export const getTripsByEmail = async (email_id: string) => {
    try {
        const q = query(collection(db, "generated_plans"), where("emailId", "==", email_id));

        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) return []

        // const plans = []
        // console.log(querySnapshot)
        // querySnapshot.docs.map(doc => {
        //     plans.push({ id: doc.id, ...doc.data() })
        // })
        // return plans
    } catch (error) {
        console.log("failed retrieve data from database")
    }
}