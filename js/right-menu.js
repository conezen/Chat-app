$(".icon-cross").hide();
            $(".chat-container").hide();
            $(".icon").click(function() {
            $(".chat-container").slideToggle("slow", function() {
                $(".icon").hide();
                $(".icon-cross").show();
                $(".hamburger").hide();
            });
            });

            $(".icon-cross").click(function() {
            $(".chat-container").slideToggle("slow", function() {
                $(".icon-cross").hide();
                $(".icon").show();
                $(".hamburger").show();
            });
});