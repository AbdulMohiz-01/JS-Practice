let links = document.links;
Array.from(links).forEach(link => {

    if(link.href.includes('fjords'))
    console.log(link.href);
})