
let tbody = document.getElementById("tbody");

fetch("http://localhost:3000/user")
  .then(res => res.json())
  .then(json => {
    json.forEach(data => {
      console.log(~data.name)
      tbody.append(td_fun(data.profil, data.name));
    });
  })
  .catch(err => console.error(err));

function td_fun(profile,name,email,status,role) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <img src="${profile}img/ramin.webp"
             class="h-10 w-10 rounded-full">
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">${name}</div>
          <div class="text-sm text-gray-500">
            ${email}
          </div>
        </div>
      </div>
    </td>

    <td class="px-6 py-4 whitespace-nowrap">
      <span class="bg-green-100 text-green-800 px-2 rounded-full text-xs">
       ${status}
      </span>
    </td>

    <td class="px-6 py-4 whitespace-nowrap text-gray-500">
      ${role}
    </td>
  `;
  return tr;
}

