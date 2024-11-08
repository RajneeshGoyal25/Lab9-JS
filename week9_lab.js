// Q1: Player Constructor and Methods
function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

// Method to gain experience points and level up if points reach 10 or more
Player.prototype.gainXp = function (xp) {
    if (xp >= 1 && xp <= 10) {
        this.points += xp;
        while (this.points >= 10) {
            this.lvl += 1;
            this.points -= 10;
        }
    } else {
        console.log("XP must be between 1 and 10.");
    }
};

// Method to describe the player's stats
Player.prototype.describe = function () {
    console.log(`Name: ${this.name}, Level: ${this.lvl}, Points: ${this.points}`);
};

// Example usage for Q1
const player1 = new Player("Alice");
player1.gainXp(5);
player1.describe(); // Name: Rajneesh, Level: 1, Points: 5
player1.gainXp(7);
player1.describe(); // Name: Mandeep, Level: 2, Points: 2

// --------------------------------------------------------------------------------------------------------

// Q2: User Class for College Website
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method to view website data
    viewData() {
        console.log("Viewing website data...");
    }
}

// Example usage for Q2
const user1 = new User("John Doe", "johndoe@example.com");
user1.viewData(); 
console.log(user1.name); // Rajneesh Goyal
console.log(user1.email); // Rajneesh@example.com

// --------------------------------------------------------------------------------------------------------

// Q3: Admin Class Extending User
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    // Method to edit website data
    editData() {
        console.log("Editing website data...");
    }
}

// Example usage for Q3
const admin1 = new Admin("Admin User", "admin@example.com");
admin1.viewData(); 
admin1.editData(); 
