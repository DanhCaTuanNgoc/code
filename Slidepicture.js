var index = 0;

        showimg(index);

        function showimg(i){
            index += i;
            
            let imgs = document.getElementsByClassName('img');
            let dots = document.getElementsByClassName('dot');

            for(i = 0;i < imgs.length;i++)
                imgs[i].style.display = "none";
            for(i = 0;i < dots.length;i++)
                dots[i].className = dots[i].className.replace(" active","");
            
            if(index > imgs.length - 1)
                index = 0;
            if(index < 0)
                index = imgs.length -1;
            
            imgs[index].style.display = "block";
            dots[index].className += " active";
        }