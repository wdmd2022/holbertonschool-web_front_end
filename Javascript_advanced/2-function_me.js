function welcomeMessage(fullName) {
    return () => {alert(`Welcome ${fullName}`);};
}
const guillame = welcomeMessage("Guillame");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");