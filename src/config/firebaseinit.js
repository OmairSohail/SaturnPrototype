import firebaseConfig from './firebaseConfig'
import firebase from 'firebase'
import 'firebase/firestore'

if(!firebase.apps.length)
{
    var firebaseapp = firebase.initializeApp(firebaseConfig)
}


export default firebaseapp.firestore()