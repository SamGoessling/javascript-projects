window.onload = function() {
    const apiUrl = 'https://handlers.education.launchcode.org/static/astronauts.json';
    function createAstronautHTML(astronaut) {
        return `
        <div class="astronaut">
        <div class="bio">
        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
        <ul>
        <li>Hours in space: ${astronaut.hoursInSpace}</li>
        <li>Active: <span class="${astronaut.active ? 'active' : ''}">${astronaut.active}</span></li>
        <li>Skills: ${astronaut.skills.join(', ')}</li>
        </ul>
        </div>
        <img class="avatar" src="${astronaut.picture}">
        </div>
      `;
    }
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(astronauts => {
        astronauts.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
  
        let astronautsHTML = '';
        let astronautCount = 0;
        
        astronauts.forEach(astronaut => {
            astronautsHTML += createAstronautHTML(astronaut);
            astronautCount++;
        });
        
        document.getElementById('container').innerHTML = astronautsHTML;
        const countElement = document.createElement('h2');
        countElement.textContent = `Astronaut Count: ${astronautCount}`;
        document.body.insertBefore(countElement, document.getElementById('container'));
    })
    
    .catch(error => {
        console.error('Error fetching astronauts:', error);
        document.getElementById('container').innerHTML = '<p>Error loading astronauts. Please try again later.</p>';
    });
  };
  
  