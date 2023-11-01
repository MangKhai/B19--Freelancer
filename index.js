// Arrays for names and occupations
const names = ["Alice", "Bob", "Carol", "David", "Eva"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant"];

// Array to hold freelancers
let freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 }
  ];
// Function to display freelancers
function displayFreelancers() {
  const freelancersList = document.getElementById("freelancersList");
  freelancersList.innerHTML = ''; // Clear the previous content

  freelancers.forEach(freelancer => {
    const listItem = document.createElement("li");
    listItem.innerText = `${freelancer.name} - ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
    freelancersList.appendChild(listItem);
  });
}

// Function to calculate and update the average starting price
function updateAverageStartingPrice() {
  const averagePriceDisplay = document.getElementById("averageStartingPrice");
  const totalStartingPrice = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0);
  const averagePrice = totalStartingPrice / freelancers.length || 0; // To avoid NaN if no freelancers are present
  averagePriceDisplay.innerText = `$${averagePrice.toFixed(2)}`;
}

// Function to add a new random freelancer
function addNewFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20;
  const newFreelancer = { name: randomName, occupation: randomOccupation, startingPrice: randomPrice };
  freelancers.push(newFreelancer);

  displayFreelancers();
  updateAverageStartingPrice();
}

// Display initial data
displayFreelancers();
updateAverageStartingPrice();

// Generate a new freelancer every 5 seconds (5000 milliseconds)
setInterval(addNewFreelancer, 5000);
