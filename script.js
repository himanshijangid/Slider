let Index = 1;
show_image(Index);




function show_image(i){
     i ;
    Index += Index;
    let image =document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");
    if(i > image.length-1){
        Index = 0;

    }
    if(Index < 0){
        Index = image.length - 1;
    }
    for (i = 0 ; i < image.length ;  i++){
        image[i].style.display = "none";
    }
    for(i = 0 ; i < dots.length ; i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    image[Index].style.display = "block";
    dots[Index].style.className  = "active";
    }
