function createProfile() {
    const name = document.getElementById('name').value;
    const academicRecord = document.getElementById('academicRecord').value;
    const achievements = document.getElementById('achievements').value;
    const profilePictureInput = document.getElementById('profilePicture');

    if (name && academicRecord && achievements) {
        const profileList = document.getElementById('profileList');

        // Create a new list item for the profile
        const listItem = document.createElement('li');

        // Display the profile picture if provided
        if (profilePictureInput.files.length > 0) {
            const profilePicture = document.createElement('img');
            profilePicture.src = URL.createObjectURL(profilePictureInput.files[0]);
            listItem.appendChild(profilePicture);
        }

        // Display other profile details
        listItem.innerHTML += `
            <strong>${name}</strong><br>
            <em>Academic Record:</em> ${academicRecord}<br>
            <em>Achievements:</em> ${achievements}
            <button onclick="deleteProfile(this)">Delete</button>
        `;

        // Append the list item to the profile list
        profileList.appendChild(listItem);

        // Clear the form fields and profile picture input
        document.getElementById('profileForm').reset();
        profilePictureInput.value = '';
    } else {
        alert('Please fill in all fields');
    }
}

function deleteProfile(button) {
    const listItem = button.parentNode;
    const profileList = document.getElementById('profileList');
    profileList.removeChild(listItem);
}
