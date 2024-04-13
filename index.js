let taskData=[
    {
      "task": "Meeting",
      "time": "05:30:00",
      "description": "team meeting"
    },
    {
      "task": "Personal",
      "time": "02:15:00",
      "description": "Work out"
    },
    {
      "task": "Project",
      "time": "03:45:00",
      "description": "project task"
    },
    {
      "task": "Meeting",
      "time": "01:15:00",
      "description": "client meeting"
    },
    {
      "task": "Personal",
      "time": "01:45:00",
      "description": "breakfast"
    },
    {
      "task": "Project",
      "time": "02:45:00",
      "description": "Project discussion"
    },
    {
      "task": "Meeting",
      "time": "01:30:00",
      "description": "Project meeting"
    },
    {
      "task": "Personal",
      "time": "01:30:00",
      "description": "personal task"
    },
    {
      "task": "Project",
      "time": "02:15:00",
      "description": "project task"
    },
    {
      "task": "Meeting",
      "time": "02:00:00",
      "description": "team meeting"
    }
  ] 
// Declaring taskData as a global variable
// const tasks = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/tasks');
//         taskData = response.data;
//         filter();
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//     }
// };
// tasks();

//filter the selected task
const filter = () => {
    const select = document.getElementById("taskSelect").value;
    let filteredData;
    if (select === "all") {
        filteredData = taskData;
    } else {
        filteredData = taskData.filter(entry => entry.task === select);
    }
    showdata(filteredData);
};
//delete the task
const deleteTask = (index) => {
  taskData.splice(index, 1);
  filter();
};
//task show
const showdata = (filteredData) => {
    const tabledata = document.getElementById("tabledata");
    tabledata.innerHTML = "";
    filteredData.map((task,index) => {
        const row = document.createElement("tr");
        row.innerHTML =`<td>${index+1}</td>
                        <td>${task.task}</td>
                        <td>${task.description}</td>
                        <td>${task.time}</td>
                        <td><button onclick=deleteTask(${index}) class="deleteBtn lightred">Delete</button><button  onclick=editTask(${index})>Edit</button></td>`;
        tabledata.appendChild(row);
    });
};
filter()
//timer funtion
let timer = null;
let isRunning = false;
let secondsValue = 0;
let minutesValue = 0;
let hoursValue = 0;
let displayTime = "00:00:00";
//start stop
const startStop = () => {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopBtn").innerText = "Start";
    document.getElementById("startStopBtn").style.backgroundColor = "green";
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById("startStopBtn").innerText = "Stop";
    document.getElementById("startStopBtn").style.backgroundColor = "red";
  }
  isRunning = !isRunning;
};
//update timer
const updateDisplay = () => {
  secondsValue++;
  if (secondsValue === 60) {
    secondsValue = 0;
    minutesValue++;
    if (minutesValue === 60) {
      minutesValue = 0;
      hoursValue++;
    }
  }
  displayTime = `${String(hoursValue).padStart(2, '0')}:${String(minutesValue).padStart(2, '0')}:${String(secondsValue).padStart(2, '0')}`;
  document.getElementById("display").innerText = displayTime;
};
//reset funtion
const reset = () => {
  clearInterval(timer);
  isRunning = false;
  secondsValue = 0;
  minutesValue = 0;
  hoursValue = 0;
  displayTime = "00:00:00";
  document.getElementById("display").innerText = displayTime;
  document.getElementById("startStopBtn").innerText = "Start";
};

//add task funtion
document.getElementById('taskForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const task=document.getElementById("taskSel").value;
  const dis=document.getElementById("taskDes").value;
  const newTask = {
    task:task,
    time:displayTime,
    description:dis
};
if(confirm("Are you confirm submit")){
  taskData.push(newTask);
  filter()
}

})
