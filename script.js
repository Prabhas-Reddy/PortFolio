// Function to fetch project data and display it
function viewProject(id) {
    fetch(`http://localhost:3000/api/project/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Project not found');
            }
            return response.json();
        })
        .then(data => {
            // Display project data in the 'project-details' div
            const projectDetails = document.getElementById('project-details');
            projectDetails.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching project data:', error);
            const projectDetails = document.getElementById('project-details');
            projectDetails.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
