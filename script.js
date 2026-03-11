body{
margin:0;
font-family:Arial;
background:linear-gradient(#020617,#030712);
color:white;
display:flex;
justify-content:center;
}

.app{
width:100%;
max-width:500px;
padding:20px;
text-align:center;
}

h1{
font-size:40px;
margin-top:10px;
}

.subtitle{
color:#aaa;
margin-bottom:20px;
}

.search{
display:flex;
gap:10px;
margin-bottom:20px;
}

.search input{
flex:1;
padding:15px;
border-radius:20px;
border:none;
font-size:16px;
}

.search button{
width:60px;
border-radius:15px;
border:none;
background:#67e8f9;
font-weight:bold;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
}

.grid button{
padding:20px;
border-radius:20px;
border:none;
background:#0f172a;
color:white;
font-size:16px;
cursor:pointer;
}

.chat{
margin-top:30px;
}

.hidden{
display:none;
}

#messages{
text-align:left;
margin-bottom:10px;
}

.msgUser{
background:#67e8f9;
color:#000;
padding:10px;
border-radius:15px;
margin:5px 0;
}

.msgAI{
background:#1e293b;
padding:10px;
border-radius:15px;
margin:5px 0;
}

.chatInput{
display:flex;
gap:10px;
}

.chatInput input{
flex:1;
padding:12px;
border-radius:15px;
border:none;
}

.chatInput button{
padding:12px;
border:none;
border-radius:15px;
background:#67e8f9;
}
