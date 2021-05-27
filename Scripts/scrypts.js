function ScrollToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function ScrollToMiddle()
{
    window.scrollTo({top: (window.innerWidth * 100) / 160, behavior: 'smooth'});
}

function ScrollToBottom()
{
    window.scrollTo({top: 999999 , behavior: 'smooth'});
}


