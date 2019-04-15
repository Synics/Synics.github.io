function highlightIcon(iconName){
    document.getElementById("homeIcon").classList.remove('highlighted');
    document.getElementById("aboutIcon").classList.remove('highlighted');
    document.getElementById("resumeIcon").classList.remove('highlighted');
    document.getElementById("projectsIcon").classList.remove('highlighted');
    document.getElementById(iconName).classList.add('highlighted');
}

function onLoad(){
    window.scrollTo(0,0);
    document.getElementById("homeIcon").classList.add('highlighted');
}

window.addEventListener ("scroll", function(ev){
    const pages = document.getElementsByClassName("Page");
    var offsets = new Array(pages.length);

    for (let i = 0; i < pages.length; i++)
    {
        console.log(pages[i].offsetHeight);
    }
    console.log("_______________________________________________________________________________________________");
}
)