$(".cross").hide();
            $(".menu").hide();
            $(".hamburger").click(function() {
            $(".menu").slideToggle("slow", function() {
                $(".hamburger").hide();
                $(".cross").show();
                $(".icon").hide();
            });
            });

            $(".cross").click(function() {
            $(".menu").slideToggle("slow", function() {
                $(".cross").hide();
                $(".hamburger").show();
                $(".icon").show();
            });
});