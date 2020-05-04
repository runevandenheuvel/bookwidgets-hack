// Deel 2
document.addEventListener("click", e)
function e() {
    window.open("https://bit.ly/10mail-nl","_blank");
    let emailTeacher = prompt(`Plak de email hier:`);
    let nameStudent = "Smart teachers has left the chat.";
    document.getElementById("student_label").style.display = "block";
    document.getElementById("student").style.display = "block";
    document.getElementById("student").value = nameStudent;
    document.getElementById("email").value = emailTeacher;
    document.removeEventListener("click", e)
}
