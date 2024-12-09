const quizQuestions = [
    {
        question: "The passenger entry and service door evacuation slide/rafts are disarmed by:",
        answers: {
            A: "Pulling the arm/disarm lever to the disarmed position.",
            B: "Pushing the arm/disarm lever to the disarmed position.",
            C: "Resetting the slide detachment handle."
        },
        correct: "A"
    },
    {
        question: "What powers the passenger cabin emergency lights?",
        answers: {
            A: "The aircraft battery.",
            B: "Each light has its own battery.",
            C: "Battery packs in each passenger cabin zone."
        },
        correct: "C"
    },
    {
        question: "The LT OVRD p/b switch overrides normal controls for the pilot's instrument flood lights, forward and aft dome lights, and sets the brightness level of these lights to:",
        answers: {
            A: "A pre-selected intensity.",
            B: "An intensity dependent upon light sensors.",
            C: "Maximum brightness."
        },
        correct: "C"
    },
    {
        question: "With the NO SMOKING PASS SIGNS selector positioned to AUTO, the NO SMOKING signs illuminate when the:",
        answers: {
            A: "Flaps are down.",
            B: "Landing gear is down.",
            C: "Landing gear is up."
        },
        correct: "B"
    },
    {
        question: "With the SEATBELTS PASS SIGNS selector positioned to AUTO, the SEATBELT and RETURN TO SEAT signs illuminate when the:",
        answers: {
            A: "Flaps are not up, or the landing gear is down.",
            B: "Flap handle disagrees with flap position.",
            C: "Landing gear is unsafe."
        },
        correct: "A"
    },
    {
        question: "The emergency lights UNARMED light illuminates when:",
        answers: {
            A: "The aircraft has lost standby DC power.",
            B: "The EMER LIGHTS switch is not in the ARMED position.",
            C: "The EMER LIGHTS switch is in the ARMED position."
        },
        correct: "B"
    },
    {
        question: "The arm/disarm lever release p/b on the door/slide control panel is pushed to:",
        answers: {
            A: "Detach the slide/raft.",
            B: "Deploy the slide/raft.",
            C: "Release the arm/disarm lever from the SLIDE DISARMED position."
        },
        correct: "C"
    },
    {
        question: "What does it mean when the EMER LIGHTS switch is in the ON position?",
        answers: {
            A: "The interior lights are on.",
            B: "All interior and exterior lights will illuminate if DC power fails.",
            C: "All emergency lights illuminate."
        },
        correct: "C"
    },
    {
        question: "Both the FASTEN SEAT BELTS and the NO SMOKING signs will illuminate if the cabin altitude exceeds 10 000 ft., regardless of switch position. A low chime will sound at the turn ON.",
        answers: {
            A: "True.",
            B: "False."
        },
        correct: "A"
    },
    {
        question: "Is an aircraft or cabin altitude change necessary if the outer pane of the left windshield shatters?",
        answers: {
            A: "Yes.",
            B: "No."
        },
        correct: "B"
    },
    {
        question: "What does the PASS OXY p/b indicate when the ON light is illuminated?",
        answers: {
            A: "The passenger oxygen system masks have dropped.",
            B: "The oxygen lights at the passenger seats are on.",
            C: "The passenger oxygen system is ready for pilot activation."
        },
        correct: "A"
    },
    {
        question: "What does the flight crew oxygen mask vent valve showing red mean?",
        answers: {
            A: "The valve is open.",
            B: "The mask is inoperable.",
            C: "The valve is closed."
        },
        correct: "A"
    },
    {
        question: "The passenger oxygen system uses the same source as the cockpit crew.",
        answers: {
            A: "True.",
            B: "False."
        },
        correct: "B"
    },
    {
        question: "The crew can escape from the cockpit using the cockpit window emergency pneumatic slide.",
        answers: {
            A: "True.",
            B: "False."
        },
        correct: "B"
    },
    {
        question: "Where are the two emergency locator transmitters located?",
        answers: {
            A: "In the cockpit.",
            B: "Close to door 21 and 23.",
            C: "One in cockpit, one in aft galley."
        },
        correct: "B"
    },
    {
        question: "The flow indicator from the oxygen mask/regulator shows a yellow cross when oxygen is flowing.",
        answers: {
            A: "True.",
            B: "False."
        },
        correct: "A"
    },
    {
        question: "All doors are equipped with a dual lane pneumatic escape slide/raft.",
        answers: {
            A: "True.",
            B: "False."
        },
        correct: "A"
    },
    {
        question: "Where are the flashlights kept?",
        answers: {
            A: "In every lavatory.",
            B: "On the aft wall of the forward lavatory.",
            C: "At each C/A station."
        },
        correct: "C"
    },
    {
        question: "Where is the crash axe stowed?",
        answers: {
            A: "Behind the first officer.",
            B: "In closet with dinghies.",
            C: "In the forward galley."
        },
        correct: "A"
    },
    {
        question: "When the emergency handle on the overwing hatch is pulled, it retracts the inboard spoiler (hatch side), deploys the overwing ramp/slide, illuminates the exterior emergency lights (hatch side) and opens the hatch.",
        answers: {
            A: "True.",
            B: "False."
        },
        correct: "A"
    },
    {
        question: "Emergency locator transmitter(s) broadcast on frequencies of 121 ,5 and 243,0 whenever the transmitter is:",
        answers: {
            A: "Switched on by the flight crew.",
            B: "Submerged in any liquid containing water.",
            C: "Inverted."
        },
        correct: "A"
    },
    {
        question: "The EVAC horns cannot be silenced.",
        answers: {
            A: "False.",
            B: "True."
        },
        correct: "A"
    },
    {
        question: "What action inflates the cockpit crew oxygen mask harness?",
        answers: {
            A: "Push the harness inflation button.",
            B: "Push the NORMAL / 100% selector.",
            C: "Squeeze the red release levers and remove the mask from stowage."
        },
        correct: "C"
    },
    {
        question: "Four 114 cu ft. cylinders supply passenger oxygen.",
        answers: {
            A: "True.",
            B: "False."
        },
        correct: "B"
    },
    {
        question: "Which oxygen pressure is shown on the EICAS status display?",
        answers: {
            A: "Passenger oxygen pressure.",
            B: "Cockpit crew oxygen pressure.",
            C: "C/A oxygen pressure."
        },
        correct: "B"
    },
    {
        question: "What does the yellow cross in the oxygen mask/regulator flow indicator mean?",
        answers: {
            A: "That oxygen is flowing.",
            B: "The oxygen mask is inoperative.",
            C: "Oxygen has been cut off."
        },
        correct: "A"
    },
    {
        question: "What does pulling the alternate deployment handle for the overwing emergency exit do?",
        answers: {
            A: "Opens the door.",
            B: "Deploys the slide if the normal system fails.",
            C: "Removes the door jettison cover."
        },
        correct: "B"
    },
    {
        question: "Activating the EVAC COMMAND switch from cockpit or cabin (door 11) will cause the EVAC light to flash and the horns to sound at all locations.",
        answers: {
            A: "True.",
            B: "False."
        },
        correct: "A"
    }
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz() {
    const output = quizQuestions.map((currentQuestion, questionIndex) => {
        const answers = Object.keys(currentQuestion.answers)
            .map(letter => `
                <label>
                    <input type="radio" name="question${questionIndex}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>
            `).join("");

        return `
            <div class="question">Question ${questionIndex + 1}: ${currentQuestion.question}</div>
            <div class="answers">${answers}</div>
        `;
    });

    quizContainer.innerHTML = output.join("");
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionIndex) => {
        const answerContainer = answerContainers[questionIndex];
        const selector = `input[name=question${questionIndex}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionIndex].style.color = "green";
        } else {
            answerContainers[questionIndex].style.color = "red";
        }
    });

    resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} correct.`;
}

buildQuiz();
submitButton.addEventListener("click", showResults);
