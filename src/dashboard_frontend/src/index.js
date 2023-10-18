import { dashboard_backend } from "../../declarations/dashboard_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const icrc1_token_info = await dashboard_backend.icrc1_token_info();

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = convertE8sToNumber(icrc1_token_info[1]+"    "+icrc1_token_info[0]);;

  return false;
});
function convertE8sToNumber(e8sValue) {
  // assuming e8sValue is a string, you might need to adjust the conversion logic based on actual data type
  // and format of e8sValue
  
  const scaleFactor = Math.pow(10, 8); // e8s has a scale factor of 10^8
  return parseFloat(e8sValue) / scaleFactor;
}
// document.getElementById("对比").addEventListener("click", async ()=>{
//   let first_num=parseInt(document.getElementById("num1").value,0)
//   let last_num=parseInt(document.getElementById("num2").value,0)
//   let bigNum=await dashboard_backend.bigInt(first_num,last_num);
//   document.getElementById("big").textContent=bigNum;
// })