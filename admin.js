// admin.js
function adminLogin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    // Authenticate with Firebase
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Admin login successful
            console.log('Admin login successful');
            // Redirect to admin dashboard or perform other actions
        })
        .catch((error) => {
            // Handle login errors
            console.error('Admin login error:', error.message);
        });

}
// admin.js
function addTeacher() {
    const teacherName = document.getElementById('teacherName').value;
    const teacherDepartment = document.getElementById('teacherDepartment').value;
    const teacherSubject = document.getElementById('teacherSubject').value;

    // Save teacher information to Firebase or perform necessary actions
    // (e.g., updating the database)

    console.log('Teacher added successfully');
}

