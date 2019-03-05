function highlightIcon(iconName){
    document.getElementById("homeIcon").classList.remove('highlighted');
    document.getElementById("aboutIcon").classList.remove('highlighted');
    document.getElementById("resumeIcon").classList.remove('highlighted');
    document.getElementById("COOPIcon").classList.remove('highlighted');
    document.getElementById("projectsIcon").classList.remove('highlighted');
    document.getElementById(iconName).classList.add('highlighted');
}

function onLoad(){
    window.scrollTo(0,0);
    document.getElementById("homeIcon").classList.add('highlighted');
}