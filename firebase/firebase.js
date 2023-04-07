import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, onValue, push, ref, runTransaction, set, child, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"

//Config của database
const firebaseConfig = {
  apiKey: "AIzaSyAXfFJoFEHP_nfNVQwlD3yEYZHukg95NKM",
  authDomain: "phuclong-70ead.firebaseapp.com",
  databaseURL: "https://phuclong-70ead-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "phuclong-70ead",
  storageBucket: "phuclong-70ead.appspot.com",
  messagingSenderId: "435494295521",
  appId: "1:435494295521:web:e0c30456ca17e0b09c24a0",
  measurementId: "G-2H6T7NJ2QY"
};

// Initialize kết nối Firebase
const app = initializeApp(firebaseConfig);
//kết nối database
const database = getDatabase(app);

//Thêm dữ liệu
var AddUser = function (user) {
  set(ref(database, 'users/' + user.phone), {
    phone: user.phone,
    password: user.pass
  });
}

//đọc dữ liệu từ database
var CheckUser = function (user, callback) {
  get(child(ref(database), 'users/' + user.phone)).then((snapshot) => {
    if (snapshot.exists() && snapshot.val().password && user.pass == snapshot.val().password) {
      callback(snapshot.val());
    } else {
      callback(undefined);
    }
  }).catch((error) => {
    console.error(error);
    callback(undefined);
  });
}



export { AddUser, CheckUser };