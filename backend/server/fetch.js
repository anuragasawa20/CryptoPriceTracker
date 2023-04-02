
const API = "https://api.wazirx.com/api/v2/tickers";

async function getapi(url) {

    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    // if (response) {
    //     hideloader();
    // }
    // show(data);
}

getapi(api_url);

// Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// Function to define innerHTML for HTML table
// function show(data) {
//     let tab =
//         `<tr>
//           <th>Name</th>
//           <th>Office</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>`;

//     // Loop to access all rows
//     for (let r of data.list) {
//         tab += `<tr>
//     <td>${r.name} </td>
//     <td>${r.office}</td>
//     <td>${r.position}</td>
//     <td>${r.salary}</td>
// </tr>`;
//     }
    // Setting innerHTML as tab variabl