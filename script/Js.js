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
       
        disableButton('complete-btn');
        
        
    })
})

function updatedValueById(id, value){
    const taskAssigned = document.getElementById(id).innerText;
    const convertedValue = parseInt(taskAssigned);
    const sum = convertedValue + value;
    document.getElementById(id).innerText= sum;
    
}

function disableButton(id){
document.getElementById(id).disabled = true;
}