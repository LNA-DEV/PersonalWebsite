function ScrollToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onload=function(){
    SetText();
}

function SetText()
{    
    var para = document.getElementById("value");
    var output = window.location.href;
    output = output.substring(output.indexOf("?")+1);
    output = output.replace("&","\n");
    para.innerText = output;
}

function DropDown()
{
    var root = document.getElementById('myDropdown');
    if(!root.classList.contains("dropdown-contentE"))
    {
        root.classList.add("dropdown-contentE");
    }
    else
    {
        root.classList.remove("dropdown-contentE");
    }
}

