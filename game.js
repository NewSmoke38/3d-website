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

  // Calculate button position along the Z-axis in front of the ball
const ballPosition = document.getElementById('player').getAttribute('position');
const ballZ = parseFloat(ballPosition.z);
const distanceInMeters = 1; // 1 unit (meter) in front of the ball

// Position the button container
const buttonContainer = document.getElementById('endGameButtonContainer');
buttonContainer.style.top = `calc(50vh + 5px)`; // Adjust as per your layout

// Calculate Z position for the button container
const buttonZ = ballZ - distanceInMeters;
buttonContainer.style.transform = `translateZ(${buttonZ}m)`;
