import { User } from "firebase/auth";
import { db } from "../config/firebase.config";
import { doc, setDoc } from "firebase/firestore";

export const saveUserToFireStoreDb = async (userInfo: User) => {
    console.log('saving to db')
    const userId = userInfo.uid
    const dataToSave = {
        userId: userId,
        emailId: userInfo.email,
        fullName: userInfo.displayName,
        profilePic: userInfo.photoURL
    }
    await setDoc(doc(db, "users", userId), dataToSave).then(() => console.log("user saved")
    ).catch((err) => console.log(err));
}