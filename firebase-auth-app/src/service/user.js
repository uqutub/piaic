import Firebase from './firebase';

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = Firebase.user(user.uid);
    const { email, displayName, photoURL } = user;
    try {
        await userRef.set({
            displayName,
            email,
            photoURL,
            ...additionalData
        });
    } catch (error) {
        console.error("Error creating user document", error);
    }

    return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await Firebase.user(uid).once('value');
        return {
            uid,
            ...userDocument.val()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};