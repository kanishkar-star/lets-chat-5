  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAEG5v_yiJeuiEIb9jn4bjosP5O4nlvx-g",
    authDomain: "kwitter-let-s-chat.firebaseapp.com",
    databaseURL: "https://kwitter-let-s-chat.firebaseio.com",
    projectId: "kwitter-let-s-chat",
    storageBucket: "kwitter-let-s-chat.appspot.com",
    messagingSenderId: "163618188930",
    appId: "1:163618188930:web:ffe6af781484fa8a5ace9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username")

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose :"Adding Roomname"});

    localStorage.setItem("roomname", room_name);

    window.location = "kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
  Room_names = childKey;
 
  console.log("Roomname = " + Room_names);

  row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";

  document.getElementById("output").innerHTML += row;

 });});}

getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("Roomname", name);
    window.location = "kwitter_page.html";
};

function logout(){
  localStorage.removeItem("Username");
  localStorage.removeItem("roomname");
  window.location = "index.html";
};