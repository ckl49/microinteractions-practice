// this is for a single card 
// toggle active class on click, and if active, toggle off

// const ing_card = document.querySelector(".ing-card-div");

// ing_card.addEventListener("click", () => {
//     ing_card.classList.toggle("active");
// });

// for multiple cards


 const ing_cards = document.getElementsByClassName("ing-card-div");

 for (let card of ing_cards) {
     card.addEventListener("click", () => {
         card.classList.toggle("active");
     });
}

const primaryButton = document.getElementsByClassName("primary-button");

for (let button of primaryButton) {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
}

const tipButton = document.getElementsByClassName("tip-button");

for (let button of tipButton) {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
}

const applyRewardButton = document.querySelector(".primary-button.reward");

const rewardText = applyRewardButton.querySelector(".apply-reward-text");
const appliedRewardText = applyRewardButton.querySelector(".applied-text");

applyRewardButton.addEventListener("click", () => {
    if (applyRewardButton.classList.contains("active")) {
        rewardText.classList.remove("active");
        rewardText.classList.add("inactive");

        appliedRewardText.classList.remove("inactive");
        appliedRewardText.classList.add("active");
        return;
    } else {
        rewardText.classList.remove("inactive");
        rewardText.classList.add("active");

        appliedRewardText.classList.remove("active");
        appliedRewardText.classList.add("inactive");
    }
});


const timeRadios = document.querySelectorAll('[name="pickup-time"]');
const labelText = document.querySelector(".time-label-text");

timeRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    labelText.textContent = `Pickup Time: ${radio.value}`;
  });
});
