// Deel 1
let fullURL = window.location.href
if (fullURL.includes("smartschool_platform")) {
    window.alert(`We hebben gedetecteerd dat je op je eigen account (met Smartschool) zit. \nJe kunt eventueel in een ander tabblad de bookwidget nog eens openen (op de normale manier) om dan af te kijken als je de oplossingen hebt "gekregen".`)
    let questionMarkPosition = fullURL.indexOf("?");
    let urlWithoutSmartschool = fullURL.substring(0, questionMarkPosition);
    window.open(urlWithoutSmartschool,"_blank");
} else {
    window.alert(`U kan doorgaan naar de volgende stap.`)
}
