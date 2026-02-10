
let tbody = document.getElementById("tbody");

fetch("http://localhost:3000/user")
  .then(res => res.json())
  .then(json => {
    json.forEach(data => {
      console.log(data)
      tbody.append(td_fun(data));
    });
  })
  .catch(err => console.error(err));

function td_fun(name) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <img src="img/ramin.webp"
             class="h-10 w-10 rounded-full">
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">${name}</div>
          <div class="text-sm text-gray-500">
  
          </div>
        </div>
      </div>
    </td>

    <td class="px-6 py-4 whitespace-nowrap">
      <span class="bg-green-100 text-green-800 px-2 rounded-full text-xs">
     
      </span>
    </td>

    <td class="px-6 py-4 whitespace-nowrap text-gray-500">
      
    </td>
  `;
  return tr;
}

