'use strict';

var auth = firebase.auth();
var storageRef = firebase.storage().ref();

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  var file = evt.target.files[0];

  var metadata = {
    'contentType': file.type
  };

  // Push to child path.
  storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    console.log('File metadata:', snapshot.metadata);
    // Let's get a download URL for the file.
    snapshot.ref.getDownloadURL().then(function(url) {
      console.log('File available at', url);
      document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
    });
  }).catch(function(error) {
    console.error('Upload failed:', error);
  });
}

window.onload = function() {
  document.getElementById('file').addEventListener('change', handleFileSelect, false);
  document.getElementById('file').disabled = true;

  auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log('Anonymous user signed-in.', user);
      document.getElementById('file').disabled = false;
    } else {
      console.log('There was no anonymous session. Creating a new anonymous user.');
      // Sign the user in anonymously since accessing Storage requires the user to be authorized.
      auth.signInAnonymously().catch(function(error) {
        if (error.code === 'auth/operation-not-allowed') {
          window.alert('Anonymous Sign-in failed. Please make sure that you have enabled anonymous ' +
              'sign-in on your Firebase project.');
        }
      });
    }
  });
}