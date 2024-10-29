const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const cardsContainerEl = document.querySelector("#cardsContainer");
const inputFullNameEl = document.querySelector("#input-fullName");
const inputRoleEl = document.querySelector("#input-role");
const inputEmailEl = document.querySelector("#input-email");
const inputImgEl = document.querySelector("#input-img");
const submitInputsEl = document.querySelector("#submit-inputs");

function generateCards(list) {
  let htmlCards = ``;
  list.forEach((member) => {
    const memberCard = `
        <div class="col">
        <div class="card flex-row w-100">
        <img
        src="./${member.img}"
        class="rounded-start w-25"
        alt="..."
        />
        <div class="card-body text-bg-dark rounded-end">
        <h3 class="card-title fw-bold">${member.name}</h3>
        <p class="card-text fw-semibold h5">${member.role}</p>
        <a href="mailto:${member.email}" class="fw-semibold fs-6">${member.email}</a>
        </div>
        </div>
        </div>
        `;

    htmlCards += memberCard;
  });
  return htmlCards;
}

cardsContainerEl.innerHTML = generateCards(teamMembers);

submitInputsEl.addEventListener("click", () => {
  const name = inputFullNameEl.value.trim();
  const role = inputRoleEl.value.trim();
  const email = inputEmailEl.value.trim();
  const img = inputImgEl.value.trim();

  const isNameValid = name.length > 2;
  const isRoleValid = role.length > 2;
  const isEmailValid =
    email.length > 5 && email.includes("@") && email.includes(".");
  const isImgValid = img.length > 7 && img.includes("/") && img.includes(".");

  if (isNameValid && isRoleValid && isEmailValid && isImgValid) {
    inputFullNameEl.value = "";
    inputRoleEl.value = "";
    inputEmailEl.value = "";
    inputImgEl.value = "";

    teamMembers.push({ name, role, email, img });

    cardsContainerEl.innerHTML = generateCards(teamMembers);
  } else alert("Wrong Input");

  console.log(" ".length);
});
