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


document.querySelectorAll('#complete-btn').forEach(button => {
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        alert("Board Updated Successfully");

        updatedValueById('task-container', -1);
        updatedValueById('nav-number', 1);
        const container = document.getElementById('activity-detail');
       
        const div = document.createElement('div');
        div.innerHTML=`
        <p>You have completed task at ${new Date().toLocaleTimeString()}</p>
        `
        container.appendChild(div);

        
    })
  
})


function updatedValueById(id, value){
    const taskAssigned = document.getElementById(id).innerText;
    const convertedValue = parseInt(taskAssigned);
    const sum = convertedValue + value;
    document.getElementById(id).innerText= sum;
    
}



