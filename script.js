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

const rewardCards = document.querySelectorAll(".reward-checkout-button");

rewardCards.forEach(card => {
  const button = card.querySelector(".primary-button.reward");

  button.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    // Reset all cards
    rewardCards.forEach(c => {
      c.classList.remove("active", "inactive");
    });

    // If clicked card was NOT active, activate it and deactivate others
    if (!isActive) {
      card.classList.add("active");

      rewardCards.forEach(c => {
        if (c !== card) {
          c.classList.add("inactive");
        }
      });
    }
  });
});


/// TIME SELECTION
const dropdown = document.querySelector(".dropdown-time-selection");
const labelText = document.querySelector(".time-label-text");
const timeRadios = document.querySelectorAll('input[name="pickup-time"]');
const trigger = document.querySelector(".time-selection");

// Toggle open/close
trigger.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("open");
});

// Update label + close on selection
timeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    labelText.textContent = radio.value;
    dropdown.classList.add("has-value"); // NEW
    dropdown.classList.remove("open");
  });
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.target === '_blank' || this.href.includes('#')) return;

        e.preventDefault();
        const url = this.href;

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = url;
        }, 400);
    });
});


