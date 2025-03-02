document.getElementById('theme-btn').addEventListener('click', function(){
    let color = '#';
    color = color + Math.random().toString(16).slice(2,8);
      document.body.style.backgroundColor= color;
      console.log(color);
})



document.getElementById('discover-bar').addEventListener('click', (event) =>{
    event.preventDefault();
    window.location.href="discover.html"
})


document.querySelectorAll('.complete-button').forEach(button => {
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        alert("Board Updated Successfully");
        
        
        updatedValueTaskById('task-container', 1);
        updatedValueById('nav-number', 1);
        const container = document.getElementById('activity-content');
       
        const div = document.createElement('div');
        div.innerHTML=`
        <p>You have completed task at ${new Date().toLocaleTimeString()}</p>
        `
        container.appendChild(div);  
    })
  
})
document.getElementById('clear-histry').addEventListener('click', () =>{
    const activityClear = document.getElementById('activity-content');
     console.log(activityClear)
    activityClear.innerText = "";
})

function updatedValueById(id, value){
    const valueAssigned = document.getElementById(id).innerText;
    const convertedValue = parseInt(valueAssigned);
    const sum = convertedValue + value;
    document.getElementById(id).innerText= sum;  
}
function updatedValueTaskById(id, value){
    const taskAssigned = document.getElementById(id).innerText;
    const convertedValue = parseInt(taskAssigned);
    const sum = convertedValue - value;
    document.getElementById(id).innerText= sum;  
}

