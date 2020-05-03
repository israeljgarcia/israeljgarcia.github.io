let d = new Date();
document.getElementById("footer-info").innerHTML += " | Last Updated " + document.lastModified.split(" ")[0];
document.getElementById("year").innerHTML += "" + d.getFullYear();