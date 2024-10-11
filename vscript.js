// Candidate Vote Counts
let votes = {
    candidate1: 0,
    candidate2: 0,
    candidate3: 0
};

// Get HTML Elements
const dobInput = document.getElementById("dob");
const verifyAgeBtn = document.getElementById("verify-age-btn");
const ageMessage = document.getElementById("age-message");
const votingSection = document.getElementById("voting-section");
const voteButtons = document.querySelectorAll(".vote-btn");

// Event Listener for Age Verification
verifyAgeBtn.addEventListener("click", function() {
    const dobValue = new Date(dobInput.value);
    const age = calculateAge(dobValue);

    if (age >= 18) {
        ageMessage.textContent = "You are eligible to vote!";
        ageMessage.style.color = "green";
        votingSection.style.display = "block";
    } else {
        ageMessage.textContent = "You must be 18 years or older to vote.";
        ageMessage.style.color = "red";
        votingSection.style.display = "none";
    }
});

// Function to Calculate Age from Date of Birth
function calculateAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

// Event Listeners for Vote Buttons
voteButtons.forEach(button => {
    button.addEventListener("click", function() {
        const candidate = this.dataset.candidate;
        votes[candidate]++;
        updateVoteCount(candidate);
    });
});

// Function to Update Vote Count Display
function updateVoteCount(candidate) {
    const voteDisplay = document.getElementById(`${candidate}-votes`);
    voteDisplay.textContent = `Votes: ${votes[candidate]}`;
}