function Player(name){
  this.name=name;
  this.lvl=1;
this.points=0;
}

Player.prototype.gainXp = function(xp){
  this.points += xp;
  while  (this.points >= 10) {
    this.lvl += 1;
    this.points -= 10;}

};
Player.prototype.describe = function(){
  return`${this.name}  is in level  ${this.lvl}  and have ${this.points} points`;

}

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); // Bob is level 2 with 6 experience points
console.log(player2.describe()); // Alice is level 2 with 3 experience points

// You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.
// User Class
class User {
  constructor(name, email) {
      this.name = name;
      this.email = email;
  }

  // viewData Method
  viewData() {
      console.log(`Viewing website data for user: ${this.name}`);
  }
}

// Example usage
const user1 = new User("Alice", "alice@example.com");
user1.viewData();



//Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data

// Admin Class inheriting from User
class Admin extends User {
  // editData Method
  editData() {
      console.log(`Editing website data for admin: ${this.name}`);
  }
}

// Example usage
const admin1 = new Admin("Bob", "bob@example.com");
admin1.viewData(); // Inherited from User
admin1.editData(); // Specific to Admin









 

 
