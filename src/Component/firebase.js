// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import {getAuth} from "firebase/auth";
import 'firebase/compat/firestore';
import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"

const firebaseConfig = {
  apiKey: "AIzaSyDCdsQIXlRrAUs2TZoiCsQ3dfw4oQOs-Ss",
  authDomain: "hr-app-a86d2.firebaseapp.com",
  projectId: "hr-app-a86d2",
  storageBucket: "hr-app-a86d2.appspot.com",
  messagingSenderId: "173523817402",
  appId: "1:173523817402:web:ebcb7a655c82dd53e38383",
  measurementId: "G-388MZW8Y12"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth=getAuth();
const firestore=firebase.firestore();
const createUserCollection=(user,password,role)=>{
  // console.log("credential",credential);
 
  let obj={
    uid:user.uid,
    companyName:user.displayName,
    companyImage:user.photoURL,
    Useremail:user.email,
    pasword:password,
    role:role
  }
  console.log("obj",obj)
  if(!user)return;
  firestore.collection('users')
  .doc(user.uid)
  .set(
    {
     ...obj,
    }
  )
}

const createEmployeeCollection= async(employee)=>{
  console.log(employee)
  let obj={...employee}
  console.log("employee",employee.uid);
  console.log(obj)
  const collection=firebase.firestore().collection('employee');
  let response =await collection.doc().set(obj).catch((err)=>{
    console.log("error",err)
  })
  console.log("response",response);
  
}
const createLeaveDataCollection=async(leaveData)=>{
    console.log("leaveData",leaveData);
    let obj={...leaveData};
    console.log("leaveObj",obj)
    const collection=firebase.firestore().collection('LeaveData');
  let response =await collection.doc().set({...obj}).catch((err)=>{
    console.log("error",err)
  })
  console.log("res",response)

}
const createAttendanceDataCollection=async(attendanceData)=>{
  console.log("att",attendanceData);
  let obj={...attendanceData};
  console.log("att",obj)
  const collection=firebase.firestore().collection('AttendanceData');
let response = await collection.doc().set({...obj}).catch((err)=>{
  console.log("error",err)
})
console.log("res",response)

}

export {app,auth,createUserCollection,createEmployeeCollection,createLeaveDataCollection,createAttendanceDataCollection};