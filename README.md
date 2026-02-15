# 🎮 Game Dev Learning

A collection of browser-based games built while learning game development with JavaScript and Phaser 3. This repository showcases my journey from vanilla JavaScript canvas games to more complex Phaser-powered projects.

## 🚀 Live Demo

Open `index.html` in your browser to access the game arcade portal, which provides links to all games.

## 🎯 Games Included

### 1. **Breakout** (Vanilla JavaScript)
A classic brick-breaking game built with pure JavaScript and HTML5 Canvas.

**Features:**
- Paddle movement with arrow keys or WASD
- Ball physics and collision detection
- Brick destruction mechanics
- Score tracking
- Win/lose conditions

**Tech Stack:** Vanilla JavaScript, HTML5 Canvas

**File:** `breakout.html`, `game.js`

---

### 2. **Phaser Breakout**
A reimagined version of the classic Breakout game, powered by Phaser 3.

**Tech Stack:** Phaser 3, JavaScript

**Location:** `phaser-learning/`

---

### 3. **Platformer**
A jump-and-collect platformer game with physics-based gameplay.

**Features:**
- Jump mechanics
- Star collection
- Platform physics

**Tech Stack:** Phaser 3, JavaScript

**Location:** `phaser-platformer/`

---

### 4. **Space Shooter**
Defend the galaxy in this action-packed space shooter!

**Features:**
- Player ship movement (arrow keys)
- Shooting mechanics (spacebar)
- Enemy AI with movement patterns
- Enemy bullets
- Collision detection (player-enemy, bullet-enemy)
- Score system
- Game over conditions

**Tech Stack:** Phaser 3, JavaScript

**Location:** `phaser-shooter/`

## 🛠️ Technologies Used

- **HTML5** - Structure and canvas rendering
- **CSS3** - Styling and animations
- **JavaScript (ES6)** - Game logic
- **Phaser 3** - Game framework for advanced games
- **HTML5 Canvas API** - For vanilla JavaScript games

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samshatan/Game-Dev-Learning.git
   cd Game-Dev-Learning
   ```

2. **Open in browser:**
   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required!
   - All Phaser games use CDN links

3. **Or use a local server (recommended):**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
   Then navigate to `http://localhost:8000`

## 🎮 How to Play

### Breakout (Vanilla)
- **Move Paddle:** Arrow keys or WASD
- **Objective:** Break all bricks without letting the ball fall

### Space Shooter
- **Move Ship:** Arrow keys
- **Shoot:** Spacebar
- **Objective:** Destroy enemies and survive as long as possible

### Platformer
- **Move:** Arrow keys
- **Jump:** Up arrow
- **Objective:** Collect all stars

## 📁 Project Structure

```
Game-Dev-Learning/
├── index.html              # Main arcade portal
├── breakout.html           # Vanilla JS breakout game
├── game.js                 # Breakout game logic
├── phaser-learning/        # Phaser breakout
│   └── index.html
├── phaser-platformer/      # Platformer game
│   ├── index.html
│   └── assets/
├── phaser-shooter/         # Space shooter game
│   └── index.html
└── README.md
```

## 🎨 Features

- **Retro Arcade Aesthetic** - Dark theme with vibrant colors
- **Responsive Design** - Works on desktop browsers
- **No Dependencies** - All games run directly in the browser
- **Progressive Learning** - From vanilla JS to Phaser framework

## 🧠 Learning Outcomes

Through building these games, I've learned:

- ✅ HTML5 Canvas API and 2D rendering
- ✅ Game loop architecture
- ✅ Collision detection algorithms
- ✅ Physics simulation
- ✅ Event handling and user input
- ✅ Phaser 3 framework fundamentals
- ✅ Sprite management and animation
- ✅ Game state management
- ✅ Object pooling for performance

## 🚧 Future Enhancements

- [ ] Add sound effects and background music
- [ ] Implement local high score storage
- [ ] Add more levels and difficulty progression
- [ ] Create mobile-responsive controls
- [ ] Add particle effects
- [ ] Implement power-ups and special abilities

## 📚 Resources

- [Phaser 3 Documentation](https://photonstorm.github.io/phaser3-docs/)
- [MDN Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Phaser Examples](https://phaser.io/examples)

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this repository and experiment with the games! If you have suggestions or improvements, pull requests are welcome.

## 👨‍💻 Author

**Samee**

Learning game development one pixel at a time! 🎮

---

*Built with ❤️ and JavaScript*
