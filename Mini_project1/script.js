const output = document.getElementById("output");

const fetchBtn = document.getElementById("fetchBtn");
const handleFetch = async () => {
  output.innerHTML = "";
  const apiUrl = "https://jsonplaceholder.typicode.com/users"; 
  try {
    const fetchedData = await fetch(apiUrl);
    const result = await fetchedData.json();
    console.log("Fetched Data:", result);
    output.innerHTML = result.map(user=>
        `
    <div class="card">
      <div class="skeleton" style="width: 80%">${user.name}</div>
      <div class="skeleton" style="width: 60%">${user.email}</div>
      <div class="skeleton" style="width: 90%">${user.address.city}</div>
    </div>
    `
    ).join("");
    console.log(output.innerHTML)
  } catch (error) {
    console.error("Failed to get and display data:", error);
    output.innerHTML = `<h1>Failed to Get Data</h1>`
}};
fetchBtn.addEventListener("click", handleFetch);