
$(document).ready(_=>{
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
    $(".home-li").hover(function(){
        $(this).animate({'letter-spacing':'4.5pt'},250);
    },
    function(){
        $(this).animate({'letter-spacing':'0pt'},250);
    }
    );
});

let x = screen.width;