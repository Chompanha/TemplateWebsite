const col1 = document.querySelector("#col1");
const col2 = document.querySelector("#col2");
const h3 = document.querySelector("#hi");
const b=document.querySelector(".generator_container");


function setGradient()
{
    b.style.background ="linear-gradient(to right ," + col1.value + "," + col2.value + ")";
    h3.textContent = b.style.background + ";"
}
col1.addEventListener("input",setGradient);
   
col2.addEventListener("input",setGradient);
    
