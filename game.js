document.addEventListener('DOMContentLoaded', function () {
  const scene = document.querySelector('a-scene');
  const numObstacles = 100; // Number of obstacles
  const obstacleRange = 20; // Range of obstacle positions (from -obstacleRange/2 to obstacleRange/2)
  // Wait for the A-Frame scene to load
  
      
  

  
  // Create randomly scattered obstacles
  for (let i = 0; i < numObstacles; i++) {
    const x = (Math.random() - 0.5) * obstacleRange; // Random x position within range
    const y = Math.random() * 3; // Random y position
    const z = -Math.random() * 100; // Random z position (spread across space)

    createObstacle(x, y, z); // Create obstacle at calculated position
  }

  // Function to create an obstacle
  function createObstacle(x, y, z) {
    const obstacle = document.createElement('a-box');
    obstacle.setAttribute('width', '1');
    obstacle.setAttribute('height', '1');
    obstacle.setAttribute('depth', '1');
    obstacle.setAttribute('color', 'red');
    obstacle.setAttribute('position', `${x} ${y} ${z}`);

    scene.appendChild(obstacle);
  }
});




  function movePlayer() {
    // Move player based on keyboard input
    if (scene.keyboard.isPressed('A') || scene.keyboard.isPressed('ArrowLeft')) {
      player.object3D.position.x -= playerSpeed;
    }
    if (scene.keyboard.isPressed('D') || scene.keyboard.isPressed('ArrowRight')) {
      player.object3D.position.x += playerSpeed;
    }
    if (scene.keyboard.isPressed('W') || scene.keyboard.isPressed('ArrowUp')) {
      player.object3D.position.z -= playerSpeed; // Move forward
    }
    if (scene.keyboard.isPressed('S') || scene.keyboard.isPressed('ArrowDown')) {
      player.object3D.position.z += playerSpeed; // Move backward
    }
  }
// Wait for the A-Frame scene to load
document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var player = scene.querySelector('#player');
    var scoreDisplay = scene.querySelector('#score');
    var score = 0; // Initialize score variable
    var totalCubes = 100; // Total number of cubes the player needs to cross
    var cubesCrossed = 0; // Counter for cubes crossed by the player

    // Display score function
    function displayScore() {
        if (scoreDisplay) {
            scoreDisplay.setAttribute('text', {
                value: 'Score: ' + score,
                color: '#000'
            });
        }
    }

    // Function to check if all cubes are crossed
    function checkCubesCrossed() {
        // Example condition: check if player has moved to a certain position
        var playerPosition = player.getAttribute('position');
        if (playerPosition.z < -100) { // Adjust position condition as needed
            cubesCrossed++;
            if (cubesCrossed >= totalCubes) {
                console.log('All cubes crossed! Showing button...');
                showButton();
            }
        }
    }

    // Function to show a button at the end of 100 cubes
    function showButton() {
        // Create a button entity
        var button = document.createElement('a-entity');
        button.setAttribute('geometry', {
            primitive: 'plane',
            width: 2,
            height: 0.5
        });
        button.setAttribute('material', {
            color: 'blue'
        });
        button.setAttribute('position', { x: 0, y: 1, z: -105 }); // Adjust position as needed
        button.setAttribute('text', {
            value: 'Show Fact',
            align: 'center',
            color: '#FFF'
        });
        button.addEventListener('click', function() {
            showRandomFact();
        });
        scene.appendChild(button);
    }

    // Function to show a random fact
    function showRandomFact() {
        var facts = [
            "The human brain is more active during sleep than during the day when awake.",
            "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
            "A group of flamingos is called a 'flamboyance'.",
            "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes."
            // Add more interesting facts here
        ];
        var randomIndex = Math.floor(Math.random() * facts.length);
        var fact = facts[randomIndex];

        // Display the fact in some way (e.g., console log for demonstration)
        console.log('Random Fact:', fact);
        // Replace with your actual display logic (e.g., show on screen, alert, etc.)
        alert(fact);
    }

    // Update score and check cubes crossed every frame
    scene.addEventListener('renderstart', function() {
        checkCubesCrossed();
        displayScore();
    });

    // Initial score display
    displayScore();
});
