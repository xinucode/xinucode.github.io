<html>
<!--if you need to look up a reference: explore https://www.w3schools.com/html/default.asp -->
<head>
	<title>xinu-code</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/my_styles.css">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3pro.css">
	<link rel="icon" href="MeLogo3-purple-circle2.png">
	
</head>
	
<body class=code>

	<!--this div box contains all things on the page. It's useful to keep everything in a box so that you can format it easily-->
	<div class="allthings">
	
		<!--This begins the different boxes you can have. The first box has a different style than the rest-->
		<div id="title" class="header3"><!--to modify the style, look at div.header in the style section-->
			<!-- <img src="MeLogo3.png" alt="Xinu" class="melogo2"> -->
			<div>
				<h1 class="code">xinu-code</h1>
				<h3>Online project-based coding lessons</h3>
				<p id="github"><p>
			</div>
			<!-- <img src="MeLogo3.png" alt="Xinu" class="placeholder"> -->
		</div>
		<div class="header">
			<hr>
		</div>
		
		<div class="contentbox">
			<div id="item0" class="header2"> <!--to modify the style, look at div.content in the style section-->
				<!-- <a href="https://github.com/sssm8d" target="_blank"><img src="github.png" alt="Github" class="logo"></a> -->
				<h3>Have some coding projects, but don't know how to code?</h3>
				<h3>Unfamiliar with how to develop a project?</h3>
				<h3>Check out xinu-code!<h3>
			</div>
			<div id="item2" class="header2"> <!--to modify the style, look at div.content in the style section-->
				<!-- <a href="https://github.com/sssm8d" target="_blank"><img src="github.png" alt="Github" class="logo"></a> -->
				<h3>What is xinu-code?</h3>
				<p>Xinucode is a one-on-one flexible teaching program. Rather than the usual introductory course structure, Xinucode focuses on a single project (though I will make sure to go through the all the basics throughout). 
				Xinucode will certainly not make you a professional, but it will teach you the basics of coding while completing a deliverable (Github) that you can put on your resume. We meet weekly. There's no homework. No grading.</p>
			</div>
			<div id="item1"  class="header2"> <!--to modify the style, look at div.content in the style section-->
				<div class="logobar">
					<acronym title="Python"><img src="logos/python.png" alt="Python" class="logo"></acronym>
					<acronym title="C++"><img src="logos/cplusplus.png" alt="C++" class="logo"></acronym>
					<acronym title="Fortran"><img src="logos/fortran.png" alt="Fortran" class="logo"></acronym>
					<acronym title="HTML5"><img src="logos/html5.png" alt="HTML5" class="logo"></acronym>
					<acronym title="Bash/Batch Scripting"><img src="logos/script.png" alt="Bash/Batch Scripting" class="logo"></acronym>
				</div>
				<h3>xinu-code primary coding languages</h3>
			</div>
			<div id="item4" class="header2"> <!--to modify the style, look at div.content in the style section-->
				<acronym title="See my site!"><a href="https://sssm8d.github.io/" target="_blank"><img src="MeLogo3.png" alt="Xinu" class="logo"></a></acronym>
				<h3>Who am I?</h3>
				<p>My name is Sarah Skinner. You can see my personal page by clicking my logo. I have experience tutoring code to a wide range of age groups. It's never too early
				nor too late.</p>
			</div>
			<div id="item5" class="header2"> <!--to modify the style, look at div.content in the style section-->
				<!-- <acronym title="See my site!"><a href="https://sssm8d.github.io/" target="_blank"><img src="MeLogo3.png" alt="Xinu" class="logo"></a></acronym> -->
				<h3>How long is this program?</h3>
				<p>The length of the program is dependent on the project we choose. Depending on you experience, projects can range from a few weeks to a few months.</p>
			</div>
			<div id="item3"  class="header2"> <!--to modify the style, look at div.content in the style section-->
				<div class="logobar">
					<acronym title="Github"><img src="logos/github.png" alt="Github" class="logo"></acronym>
					<acronym title="Jupyter"><img src="logos/jupyter.png" alt="Jupyter" class="logo"></acronym>
					<acronym title="Notepad++"><img src="logos/notepadpp.png" alt="Notepad++" class="logo"></acronym>
					<acronym title="Cygwin"><img src="logos/cygwin.png" alt="Cygwin" class="logo"></acronym>
					<acronym title="Putty"><img src="logos/putty.png" alt="Putty" class="logo"></acronym>
				</div>
				<h3>xinu-code featured software</h3>
			</div>
			<div id="item6" class="header2"> <!--to modify the style, look at div.content in the style section-->
				<!-- <acronym title="See my site!"><a href="https://sssm8d.github.io/" target="_blank"><img src="MeLogo3.png" alt="Xinu" class="logo"></a></acronym> -->
				<h3>How much?</h3>
				<p>Prices are subject to change as I fine tune this program. You may get my current pricing by filling out the form below.</p>
			</div>
			<div id="item7" class="header2"> <!--to modify the style, look at div.content in the style section-->
				<!-- <acronym title="See my site!"><a href="https://sssm8d.github.io/" target="_blank"><img src="MeLogo3.png" alt="Xinu" class="logo"></a></acronym> -->
				<h3>Interested?</h3>
				<p>Fill out this form to get in touch with me!</p>
				<form action="xinucode.php" method="POST">
				<div class="allthings">
					<input type="text" name="email" style="width:50%;" placeholder="Your Email">
					<textarea rows="4" name="comment" maxlength=2000 placeholder="Your Message" style="width:50%;"></textarea>
					<input type="submit" value="Submit" class="tm-bg-green tm-text-white d-block ml-auto tm-subscribe-btn">
				</div>
				</form>
				
			</div>
		</div>
		<div class="header">
			<hr>
			<div id="tim" class="randomemoji"></div><!--this div is empty on purpose. The javascript code is going to put something here-->
			<a href="#title" class="backtotop" style="color:black;">Back to top</a>
		</div>
	
	</div>
	<!--id is used to specify a single element. Only this div will have this id "tim"-->
	
</body>

<script src="js/insert_random_emoji.js"></script>
<script src="js/insert_joke.js"></script>

</html>