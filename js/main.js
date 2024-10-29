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

const cardsContainer = document.querySelector("#cardsContainer");

let htmlCards = ``;

teamMembers.forEach((member) => {
  const memberCard = `
    <div class="col-md-6 col-lg-4 p-0">
        <div class="card flex-row border-0 m-1">
        <img
            src="./${member.img}"
            class="rounded-start img-fluid"
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

cardsContainer.innerHTML = htmlCards;
