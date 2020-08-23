import app from "firebase/app";
import "firebase/auth";
import 'firebase/database';
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xx",
    storageBucket: "xx",
    messagingSenderId: "xx",
    appId: "xxxx"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        /* Helper */

        this.serverValue = app.database.ServerValue;
        this.emailAuthProvider = app.auth.EmailAuthProvider;

        /* Firebase APIs */

        this.auth = app.auth();
        this.db = app.database();
        // this.firestore = app.firestore();

        /* Social Sign In Method Provider */

        this.googleProvider = new app.auth.GoogleAuthProvider();
        this.facebookProvider = new app.auth.FacebookAuthProvider();
        this.twitterProvider = new app.auth.TwitterAuthProvider();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignInWithGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);

    doSignInWithFacebook = () =>
        this.auth.signInWithPopup(this.facebookProvider);

    doSignInWithTwitter = () =>
        this.auth.signInWithPopup(this.twitterProvider);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doSendEmailVerification = () =>
        this.auth.currentUser.sendEmailVerification({
            url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
        });

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** Merge Auth and DB User API *** //

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();

                        // default empty roles
                        if (!dbUser.roles) {
                            dbUser.roles = [];
                        }

                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            providerData: authUser.providerData,
                            ...dbUser,
                        };

                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    chatRef = (chatId) => this.db.ref(`chat/${chatId}`);

    // *** Todo API ***

    todos = uid => this.db.ref(`todos/${uid}`);
}

export default new Firebase();

// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const db = firebase.database();
// export const firestore = firebase.firestore();