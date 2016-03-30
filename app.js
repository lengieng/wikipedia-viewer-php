$(document).ready(function() {
    $("#search-box").focus(function() {
        if ($(window).width() >= 480) {
            $("#search-box").css({"width":"400px",
                                  "animation-duration":"0.5s",
                                  "animation-name":"expand"});
        }
    });
    
    $("#search-box").blur(function() {
        if ($("#search-box").val() == '') {
            if ($(window).width() >= 480) {
                $("#search-box").css({"width":"300px",
                                      "animation-duration":"0.5s",
                                      "animation-name":"shrink"});
            }
        }
    });

    // Clear button click event
    $("#clear-btn").click(function() {
        $("#search-box").val("").focus();
        $("#result").html("");
        
        // Center everything
        $("#main").css({"top":"50%",
                        "position":"relative",
                        "-webkit-transform":"translateY(-50%)",
                        "-moz-transform":"translateY(-50%)",
                        "-ms-transform":"translateY(-50%)",
                        "transform":"translateY(-50%)"});
    });
});