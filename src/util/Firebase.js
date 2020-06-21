const firebase = require('firebase');
require('firebase/firestore');
export class Firebase{

    constructor(){

        this._firebaseConfig = {
            apiKey: "AIzaSyDhRN5HAdXudcSmiCk9q9ACn6VlnN89RmI",
            authDomain: "whatsapp-clone-62f83.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-62f83.firebaseio.com",
            projectId: "whatsapp-clone-62f83",
            storageBucket: "whatsapp-clone-62f83.appspot.com",
            messagingSenderId: "208123888935",
            appId: "1:208123888935:web:b6d7c3379835571593d502",
            measurementId: "G-F332ECQB5G"
          }

        this.init();
    }

    init(){

        if(!window._initializedFirebase){
            firebase.initializeApp(this._firebaseConfig);
            firebase.firestore();
            
            // firebase.firestore().settings({
            //     timestampsInSnapshots: true
            // });
            window._initializedFirebase = true;
        }


    }

    static db(){

        return firebase.firestore();
    }

    static hd(){

        return firebase.storage();

    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result =>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user,
                    token
                });

            })
            .catch(err=>{
                f(err);
            });

        });

    }

}