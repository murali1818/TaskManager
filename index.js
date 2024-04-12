const taskData = [
    {
        task: "Meeting",
        description: "team meeting",
        duration: 160
    },
    {
        task: "Personal",
        description: "Work out",
        duration: 90
    },
    {
        task: "Project",
        description: "project task",
        duration: 120
    },
    {
        task: "Meeting",
        description: "client meeting",
        duration: 45
    },
    {
        task: "Personal",
        description: "breakfast",
        duration: 75
    },
    {
        task: "Project",
        description: "Project discution",
        duration: 150
    },
    {
        task: "Meeting",
        description: "team meeting",
        duration: 30
    },
    {
        task: "Personal",
        description: "personal task",
        duration: 60
    },
    {
        task: "Project",
        description: "project task",
        duration: 180
    },
    {
        task: "Meeting",
        description: "team meeting",
        duration: 90
    },
    {
        task: "Personal",
        description: "personal task",
        duration: 120
    },
    {
        task: "Project",
        description: "project task",
        duration: 75
    },
    {
        task: "Meeting",
        description: "Project meetin",
        duration: 60
    },
    {
        task: "Personal",
        description: "personal task",
        duration: 30
    },
    {
        task: "Project",
        description: "project task",
        duration: 150
    },
    {
        task: "Meeting",
        description: "team meeting",
        duration: 120
    }
];


const filter=()=>{
    const select=document.getElementById("taskSelect").value;
    let filteredData;
        if (select === "all") {
            filteredData = taskData;
        } else {
            filteredData = taskData.filter(entry => entry.task === select);
        }    
        showdata(filteredData);
   
}

const showdata=(filteredData)=>{
    const tabledata=document.getElementById("tabledata");
    tabledata.innerHTML="";
    filteredData.map((tasks)=>{
        const row = document.createElement("tr");
        row.innerHTML =`<td>${tasks.task}</td>
                        <td>${tasks.description}</td>
                        <td>${tasks.duration}</td>`
        tabledata.appendChild(row)
})}
showdata(taskData)



