// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAtHuRQJuradwziXx7shpLoSncKsLFFBaM",
      authDomain: "kwitter-app-dede7.firebaseapp.com",
      databaseURL: "https://kwitter-app-dede7-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-dede7",
      storageBucket: "kwitter-app-dede7.appspot.com",
      messagingSenderId: "19671169748",
      appId: "1:19671169748:web:b97c221670bae1fe83d941"
    };

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row= "<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}