$(document).ready(_=>{
    $(window).resize(function(){
        let x = window.innerWidth;
        document.querySelector(".content").textContent=x;
        if(x>842){
            $(".temat2").hover(
                function(){
                    $(".temat2-menu").slideDown()
                },
                function(){
                    $(".temat2-menu").slideUp()
                });
            $(".temat3").hover(
                function(){
                    $(".temat3-menu").slideDown()
                },
                function(){
                    $(".temat3-menu").slideUp()
                });
            $(".temat1").hover(
                function(){
                    $(".temat1-menu").slideDown()
                },
                function(){
                    $(".temat1-menu").slideUp()
                });
        }
        else{
            $(".temat2").off("mouseenter mouseleave");
            $(".temat3").off("mouseenter mouseleave");
            $(".temat1").off("mouseenter mouseleave");
        }
    });
    
    $(".home-li").hover(function(){
        $(this).animate({'letter-spacing':'4.5pt'},250);
    },
    function(){
        $(this).animate({'letter-spacing':'0pt'},250);
    }
    );
});

