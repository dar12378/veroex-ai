const screen = document.getElementById("screen")

let reminders=[]

function openAI(){

screen.innerHTML=`
<h3>Chat with AI</h3>

<div id="chat"></div>

<input id="chatInput" placeholder="Type message"/>
<button onclick="sendChat()">Send</button>
`

}

function sendChat(){

const input=document.getElementById("chatInput")

const chat=document.getElementById("chat")

const text=input.value

chat.innerHTML+=`<p><b>You:</b> ${text}</p>`

let reply="I can help with reminders, time, translation and summaries."

if(text.toLowerCase().includes("time"))
reply="London time: "+getLondonTime()

if(text.toLowerCase().includes("summary"))
reply="Summary: meeting tomorrow at 10 and bring the updated file."

if(text.toLowerCase().includes("translate"))
reply="Hola, llegaré en 30 minutos."

chat.innerHTML+=`<p><b>AI:</b> ${reply}</p>`

input.value=""

}

function summary(){

screen.innerHTML="Summary: meeting tomorrow at 10 and bring the updated file."

}

function openReminder(){

screen.innerHTML=`

<h3>Create Reminder</h3>

<input id="remText" placeholder="Reminder text"/>

<input id="remTime" placeholder="Time"/>

<button onclick="saveReminder()">Save</button>

`

}

function saveReminder(){

const text=document.getElementById("remText").value

const time=document.getElementById("remTime").value

reminders.push({text,time})

alert("Reminder saved")

}

function openTasks(){

let html="<h3>My Tasks</h3>"

reminders.forEach(r=>{
html+=`<p>${r.text} - ${r.time}</p>`
})

screen.innerHTML=html

}

function openTranslate(){

screen.innerHTML=`

<h3>Translate</h3>

<textarea id="text">Hello I will arrive in 30 minutes</textarea>

<select id="lang">
<option>Spanish</option>
<option>Hebrew</option>
<option>French</option>
</select>

<button onclick="translate()">Translate</button>

<div id="result"></div>

`

}

function translate(){

const lang=document.getElementById("lang").value

let result="Hola, llegaré en 30 minutos."

if(lang==="Hebrew")
result="שלום אגיע בעוד 30 דקות"

if(lang==="French")
result="Bonjour j'arriverai dans 30 minutes"

document.getElementById("result").innerText=result

}

function openClock(){

screen.innerHTML=`<h3>World Clock</h3>
<p>London: ${getLondonTime()}</p>
`

}

function getLondonTime(){

return new Intl.DateTimeFormat('en-GB',{
hour:'2-digit',
minute:'2-digit',
timeZone:'Europe/London'
}).format(new Date())

}

function sendMessage(){
openAI()
}
