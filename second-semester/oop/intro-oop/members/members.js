main();

async function main() {
  await buildMembersList();
  displayMembers(members);
}

const members = [];

async function fetchMembers() {
  const resp = await fetch("members.json");
  const data = await resp.json();
  return data;
}

async function buildMembersList() {
  const originalObjects = await fetchMembers();
  for (const orgobj of originalObjects) {
    const memberObj = constructMember(orgobj);
    members.push(memberObj);
  }
}

const dateDisplayOptions = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  timeZone: "Europe/Copenhagen",
};
function displayMembers(members) {
  const table = document.querySelector("table#members tbody");
  table.innerHTML = "";
  for (const member of members) {
    const html = /*html*/ `
    <tr>
      <td>${member.name}</td>
      <td>${member.active}</td>
      <td>${member.birthday.toLocaleString("da-DK", dateDisplayOptions)}</td>
      <td>${member.getAge()}</td>
      <td>${member.getJuniorSeniorStatus()}</td>
      <td>${member.email}</td>
    </tr>`;

    table.insertAdjacentHTML("beforeend", html);
  }
}

function constructMember(memberdata) {
  const MemberObject = {
    name: memberdata.firstName,
    active: memberdata.isActiveMember,
    competitive: memberdata.isCompetitive,
    birthday: new Date(memberdata.dateOfBirth),
    email: memberdata.email,
    gender: memberdata.gender,
    image: memberdata.image,
    hasPayed: memberdata.hasPayed,
    getAge() {
      const today = new Date();
      const dob = this.birthday;
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const dayDiff = today.getDate() - dob.getDate();
      // The function assumes that dob <= today
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
      return age;
    },
    isJunior() {
      return this.getAge() < 18 ? true : false;
    },
    isSenior() {
      return this.getAge() < 18 ? false : true;
    },
    getJuniorSeniorStatus() {
      return this.getAge() < 18 ? "Junior" : "Senior";
    },
  };

  return MemberObject;
}
