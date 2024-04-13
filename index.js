let user=[
  {
    "userId": "001",
    "username": "Murali",
    "password": "murali123",
    "email": "murali@example.com"
  },
  {
    "userId": "002",
    "username": "Revanth",
    "password": "rev456",
    "email": "revanth@example.com"
  },
  {
    "userId": "003",
    "username": "Sathish",
    "password": "sathish789",
    "email": "sathish@example.com"
  },
  {
    "userId": "004",
    "username": "Srikath",
    "password": "srikath@123",
    "email": "srikath@example.com"
  },
  {
    "userId": "005",
    "username": "Barath",
    "password": "barathPwd",
    "email": "barath@example.com"
  },
  {
    "userId": "006",
    "username": "Selva",
    "password": "selvaPwd",
    "email": "selva@example.com"
  }
]

let taskData = [
  {
    "userId": "001",
    "task": "Meeting",
    "time": "05:30:00",
    "description": "Team meeting"
  },
  {
    "userId": "002",
    "task": "Personal",
    "time": "02:15:00",
    "description": "Work out"
  },
  {
    "userId": "003",
    "task": "Project",
    "time": "03:45:00",
    "description": "Project task"
  },
  {
    "userId": "004",
    "task": "Meeting",
    "time": "01:15:00",
    "description": "Client meeting"
  },
  {
    "userId": "005",
    "task": "Personal",
    "time": "01:45:00",
    "description": "Breakfast"
  },
  {
    "userId": "006",
    "task": "Project",
    "time": "02:45:00",
    "description": "Project discussion"
  },
  {
    "userId": "001",
    "task": "Meeting",
    "time": "01:30:00",
    "description": "Project meeting"
  },
  {
    "userId": "002",
    "task": "Personal",
    "time": "01:30:00",
    "description": "Personal task"
  },
  {
    "userId": "003",
    "task": "Project",
    "time": "02:15:00",
    "description": "Project task"
  },
  {
    "userId": "004",
    "task": "Meeting",
    "time": "02:00:00",
    "description": "Team meeting"
  },
  {
    "userId": "005",
    "task": "Personal",
    "time": "03:00:00",
    "description": "Gym session"
  },
  {
    "userId": "006",
    "task": "Meeting",
    "time": "04:00:00",
    "description": "Client presentation"
  },
  {
    "userId": "001",
    "task": "Personal",
    "time": "05:00:00",
    "description": "Morning jog"
  },
  {
    "userId": "002",
    "task": "Project",
    "time": "06:00:00",
    "description": "Planning session"
  },
  {
    "userId": "003",
    "task": "Meeting",
    "time": "07:00:00",
    "description": "Team briefing"
  },
  {
    "userId": "004",
    "task": "Personal",
    "time": "08:00:00",
    "description": "Reading"
  },
  {
    "userId": "005",
    "task": "Project",
    "time": "09:00:00",
    "description": "Coding task"
  },
  {
    "userId": "006",
    "task": "Meeting",
    "time": "10:00:00",
    "description": "Weekly review"
  },
  {
    "userId": "001",
    "task": "Personal",
    "time": "11:00:00",
    "description": "Lunch break"
  },
  {
    "userId": "002",
    "task": "Project",
    "time": "12:00:00",
    "description": "Design discussion"
  },
  {
    "userId": "003",
    "task": "Meeting",
    "time": "13:00:00",
    "description": "Client call"
  },
  {
    "userId": "004",
    "task": "Personal",
    "time": "14:00:00",
    "description": "Yoga"
  },
  {
    "userId": "005",
    "task": "Project",
    "time": "15:00:00",
    "description": "Testing task"
  },
  {
    "userId": "006",
    "task": "Meeting",
    "time": "16:00:00",
    "description": "Monthly review"
  },
  {
    "userId": "001",
    "task": "Personal",
    "time": "17:00:00",
    "description": "Evening walk"
  },
  {
    "userId": "002",
    "task": "Project",
    "time": "18:00:00",
    "description": "Implementation task"
  },
  {
    "userId": "003",
    "task": "Meeting",
    "time": "19:00:00",
    "description": "Brainstorming session"
  },
  {
    "userId": "004",
    "task": "Personal",
    "time": "20:00:00",
    "description": "Cooking dinner"
  },
  {
    "userId": "005",
    "task": "Project",
    "time": "21:00:00",
    "description": "Documentation task"
  },
  {
    "userId": "006",
    "task": "Meeting",
    "time": "22:00:00",
    "description": "Quarterly review"
  },
  {
    "userId": "001",
    "task": "Personal",
    "time": "23:00:00",
    "description": "Reading"
  },
  {
    "userId": "002",
    "task": "Project",
    "time": "00:00:00",
    "description": "Research task"
  },
  {
    "userId": "003",
    "task": "Meeting",
    "time": "01:00:00",
    "description": "Project kickoff"
  },
  {
    "userId": "004",
    "task": "Personal",
    "time": "02:00:00",
    "description": "Listening to music"
  },
  {
    "userId": "005",
    "task": "Project",
    "time": "03:00:00",
    "description": "Code review"
  },
  {
    "userId": "006",
    "task": "Meeting",
    "time": "04:00:00",
    "description": "Team building activity"
  },
  {
    "userId": "001",
    "task": "Personal",
    "time": "05:00:00",
    "description": "Cooking"
  }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "murali1818" && password === "100") {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("taskManager").style.display = "block";
  } else {
      alert("Invalid username or password");
  }
}

function logout() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("taskManager").style.display = "none";
}
// Filter the selected task
const filter = () => {
  const select = document.getElementById("taskSelect").value;
  let filteredData;
  if (select === "all") {
      filteredData = taskData;
  } else {
      filteredData = taskData.filter(entry => entry.task === select);
  }
  showData(filteredData);
};
// Delete the task
const deleteTask = (index) => {
  if (confirm("Are you sure you want to delete the task?")) {
      taskData.splice(index, 1);
      filter();
  }
};
// Edit task
let i;
const editTask = (index) => {
  i=index;
  const data = taskData[index];
  const task = document.getElementById("taskSel");
  const dis = document.getElementById("taskDes");
  const btn = document.getElementById("btnn");
  const head = document.getElementById("addtask");
  const cancel = document.getElementById("cancel");
  head.innerHTML = "Edit Task";
  task.value = data.task;
  dis.value = data.description;
  btn.innerHTML="Update"
  const cancelBtn = document.createElement("button");
  cancelBtn.innerText = "Cancel";
  cancelBtn.style.backgroundColor = "red";
  cancel.appendChild(cancelBtn);
  cancelBtn.onclick = cancelEdit;
};
//cancel edit
const cancelEdit = () => {
  document.getElementById("addtask").innerText = "Add Task";
  document.getElementById("btnn").innerText = "Submit";
  document.getElementById("cancel").remove();
  i = undefined;
};
// Handle update
const handleUpdate = (index,e) => {
  e.preventDefault();
  const task = document.getElementById("taskSel").value;
  const dis = document.getElementById("taskDes").value;
  const btn = document.getElementById("btnn");
  document.getElementById("cancel").remove();
  btn.innerText = "Submit";
  taskData[index].task = task;
  taskData[index].description = dis;
  filter();
  alert("Task Updated")
  document.getElementById("addtask").innerText = "Add Task";
  i = undefined;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const task = document.getElementById("taskSel").value;
  const dis = document.getElementById("taskDes").value;
  const newTask = {
      task: task,
      time: displayTime,
      description: dis
  };
  if (confirm("Are you sure want to submit task?")) {
      taskData.push(newTask);
      filter();
  }
};
const checkbtn=(e)=>{
  e.preventDefault();
  const btn = document.getElementById("btnn");
  if(btn.innerText=="Submit"){
    handleSubmit(e)
   console.log(btn.innerText)
  }
  if(btn.innerText=="Update"){
    console.log(btn.innerText)
    handleUpdate(i,e);
    
   }
}
document.getElementById("taskForm").addEventListener("submit",checkbtn);

// Task show
const showData = (filteredData) => {
  const tabledata = document.getElementById("tabledata");
  tabledata.innerHTML = "";
  filteredData.forEach((task, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${index + 1}</td>
                      <td>${task.task}</td>
                      <td>${task.description}</td>
                      <td>${task.time}</td>
                      <td><button onclick="deleteTask(${index})" class="deleteBtn lightred">Delete</button><button  onclick="editTask(${index})">Edit</button></td>`;
      tabledata.appendChild(row);
  });
};

// Timer function
let timer = null;
let isRunning = false;
let secondsValue = 0;
let minutesValue = 0;
let hoursValue = 0;
let displayTime = "00:00:00";

// Start stop
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

// Update timer
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

// Reset function
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

filter(); // Initial filtering
