
  

  // Wait for the scene to load
  document.querySelector('a-scene').addEventListener('loaded', function () {
    // Get references to elements
    const scene = document.querySelector('a-scene');
    const player = document.getElementById('player');
    const enemies = [];

    // Variables for player movement
    const playerSpeed = 0.1; // Adjust as needed
    const enemySpeed = 0.05; // Adjust enemy speed

    // Function to handle player movement
    function movePlayer() {
      // Move player forward automatically
      player.object3D.position.z -= playerSpeed;

      // Move player based on keyboard input
      if (scene.keyboard.isPressed('A') || scene.keyboard.isPressed('ArrowLeft')) {
        player.object3D.position.x -= playerSpeed;
      }
      if (scene.keyboard.isPressed('D') || scene.keyboard.isPressed('ArrowRight')) {
        player.object3D.position.x += playerSpeed;
      }
    }

    // Function to create enemies
    function createEnemies() {
      for (let i = 0; i < 100; i++) { // Adjust enemy count and spread as needed
        const x = Math.random() * 20 - 10; // Random x position
        const y = Math.random() * 20 - 10; // Random y position
        const z = -Math.random() * 1000; // Random z position (spread across space)

        const enemy = document.createElement('a-entity');
        enemy.setAttribute('class', 'enemy');
        enemy.setAttribute('position', `${x} ${y} ${z}`);
        enemy.setAttribute('geometry', 'primitive: box; width: 1; height: 1; depth: 1');
        enemy.setAttribute('material', 'color: red');

        scene.appendChild(enemy);
        enemies.push(enemy);
      }
    }

    // Function to move enemies towards the player
    function moveEnemies() {
      enemies.forEach(enemy => {
        enemy.object3D.position.z += enemySpeed; // Move towards player

        // Check for collision with player
        const distance = player.object3D.position.distanceTo(enemy.object3D.position);
        if (distance < 1) {
          // Handle collision (e.g., reset player position, decrease health)
          player.object3D.position.set(0, -5, -10); // Reset player position to bottom of screen
        }
      });
    }

    // Update game state every frame
    scene.addEventListener('enterframe', function () {
      movePlayer();
      moveEnemies();
    });

    // Create enemies when scene is loaded
    createEnemies();
  });
