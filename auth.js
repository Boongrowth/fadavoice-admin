// auth.js
// Import Firebase if not already imported
// Make sure firebaseConfig is loaded before this script

// Protect pages - only allow authenticated users
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // Not logged in -> redirect to login page
    window.location.href = "login.html"; 
  } else {
    console.log("User authenticated:", user.email);
    // Optional: check for admin role or specific claims
  }
});

// Logout function (optional, can be called from navbar button)
function logout() {
  firebase.auth().signOut()
    .then(() => {
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Logout error:", error.message);
    });
}