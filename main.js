

let tbody = document.getElementById("tbody")
tbody.append(td_fun());
td_fun()

// fech function
fetch("http://localhost:3000/user")
.then(res => res.json())
.then(json => console.log(json))
//create td
function td_fun(){
    let td = document.createElement('tr');
        td.innerHTML=`
         <td class="px-6 py-4 whitespace-nowrap">
                    <div class=" flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            <img src="IMG_20250822_170257_952.webp" class="h-10 w-10 rounded-full" alt="">
                        </div>
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                               Ramin Atayee
                            </div>
                            <div class="text-sm text-gray-500">
                                raminatayeeofficial@gmial.com
                            </div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap"> 
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="text-sm text-gray-500">Admin</span>
                </td>
        `;

    return td
}