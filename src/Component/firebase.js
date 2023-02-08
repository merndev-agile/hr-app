/**
 * Import the functions you need from the SDKs you need
 */

import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc, addDoc, collection,query, getDocs } from "firebase/firestore";


/**
 * this is  config of firebase
 */
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
const db = getFirestore(app)
const auth = getAuth();
const firestore = firebase.firestore();

/**
 * this function create user collection in firebase
 * @param {*} user 
 * @param {*} password 
 * @param {*} role 
 */
const createUserCollection = async (user, password, role) => {
  console.log("credential Firebase", role);
  console.log("credential Firebase", user);
  console.log("credential Firebase", password);

  let obj = {
    uid: user.uid,
    companyName: user.displayName,
    companyImage: user.photoURL,
    Useremail: user.email,
    pasword: password,
    role: role
  }
  console.log("obj", obj)
  const response = await addDoc(collection(db, 'users'), obj)
  console.log("response", response);

}


/**
 * this function create employee collection in firebase ans store data
 * @param {*} employee 
 */
const createEmployeeCollection = async (employee) => {
  console.log(employee)
  let obj = { ...employee }
  console.log("emp_id",employee.uid)
  console.log("employee", employee.uid);
  console.log(obj)
  const collection = firebase.firestore().collection('employee');
  let response = await collection.doc().set(obj).catch((err) => {
    console.log("error", err)
  })
  console.log("response", response);

}


/**
 * this function create leave collection in firebase
 * @param {*} leaveData 
 */
const createLeaveDataCollection = async (leaveData) => {
  console.log("leaveData", leaveData);
  let obj = { ...leaveData };
  console.log("leaveObj", obj)
  const collection = firebase.firestore().collection('LeaveData');
  let response = await collection.doc().set({ ...obj }).catch((err) => {
    console.log("error", err)
  })
  console.log("res", response)

}

/**
 * this function create attendance collection in firebase
 * @param {*} attendanceData 
 */
const createAttendanceDataCollection = async (attendanceData) => {
  console.log("att", attendanceData);
  let obj = { ...attendanceData };
  console.log("att", obj)
  const collection = firebase.firestore().collection('AttendanceData');
  let response = await collection.doc().set({ ...obj }).catch((err) => {
    console.log("error", err)
  })
  console.log("res", response)

}

/**
 * this function return all employee info from employee collection
 * @param {*} setAllEmp 
 */
const getDatafromUserCollection = async (setAllEmp) => {
  console.log("getDatafromUserCollection")
  const getPostfromFirebase = [];
  
  console.log("docsnap=================")
  const docRef= query(collection(db,"employee"))
  const querySnapshot = await getDocs(docRef);
  const data=querySnapshot.docs.map((doc)=>({
    ...doc.data(),
    id:doc.id,
  }))

  console.log("getDatafromUserCollection----Data-----------",data);
  setAllEmp(data)
  
}


/**
 * this function return single employee info based on uid from employee collection
 * @param {*} uid 
 * @param {*} setPost 
 */
const getSingleEmpInfo = async (uid,setPost) => {
  console.log("---------UID---------->",uid)
  const getPostfromFirebase = [];
  
  console.log("docsnap=================")
  const docRef= query(collection(db,"employee"))
  const querySnapshot = await getDocs(docRef);
  const data=querySnapshot.docs.map((doc)=>({
    ...doc.data(),
    id:doc.id,
  }))
  console.log("-ALL EMP emp",data)

  let singleEmp=[];
  data.map((item)=>{
    if(item.uid==uid){
      console.log("------------singel emp",item)
      // singleEmp=item
      singleEmp.push(item)
    }

  })
  console.log("single emp-----------",singleEmp);
  setPost(singleEmp)
  
}
export { app, auth, db, createUserCollection, getSingleEmpInfo,createEmployeeCollection, createLeaveDataCollection, createAttendanceDataCollection, getDatafromUserCollection };