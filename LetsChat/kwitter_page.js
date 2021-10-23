var firebaseConfig = {
      apiKey: "AIzaSyC9s-6VS9w54M0NFzsSpRrxKnS8xziqXr8",
      authDomain: "kwitter-e2b11.firebaseapp.com",
      databaseURL: "https://kwitter-e2b11-default-rtdb.firebaseio.com",
      projectId: "kwitter-e2b11",
      storageBucket: "kwitter-e2b11.appspot.com",
      messagingSenderId: "595362035762",
      appId: "1:595362035762:web:1e065d1b2308559804642b"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}