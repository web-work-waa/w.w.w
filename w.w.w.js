* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	height: 100vh;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #000000;
	background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
}

.noselect {
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
		-webkit-tap-highlight-color: transparent;
}

button {
	width: 150px;
	height: 50px;
	cursor: pointer;
	font-family: 'MuseoModerno', cursive;
	font-size: 20px;
	color: white;
	background: rgba(0,0,0,0.8);
	border: 2px solid white;
	border-radius: 10px;
}

button::before {
	content: '';
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,0.5);
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	transition: 1s;
}

button:hover {
	color: black;
	animation: shift 1s forwards linear;
}

button:hover::before {
	background: rgba(255,255,255,0.8);
}

@keyframes shift {
	50%{background: white}
	100%{border: 2px solid black;
	background: white;}
}

button:focus {
	outline: none;
}
