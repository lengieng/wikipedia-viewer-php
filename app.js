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
    
    // Random button click event
    $("#random-btn").click(function() {
        window.open('http://en.wikipedia.org/wiki/Special:Random');
    });
    
    // Update the result div when ajax is complete
    $(document).ajaxStop(function () {
        $("#main").css({"top":"initial",
                        "position":"initial",
                        "-webkit-transform":"initial",
                        "-moz-transform":"initial",
                        "-ms-transform":"initial",
                        "transform":"initial"
                       });
        $("#result").html(result);
    });
    
    // When user presses ENTER key in the search box
    $("#search-box").keypress(function(event) {
        if (event.which == 13) {
            if ($("#search-box").val() != '') {
                wikiSearch($("#search-box").val());
            } else {
                result = '<div class="col-xs-12"><p class="text-danger">';
                result += 'Please input your search.</p></div>';
                $("#result").html(result);
            }
        }
    });
    
    // Search button click event
    $("#search-btn").click(function() {
        if ($("#search-box").val() != '') {
            wikiSearch($("#search-box").val());
        } else {
            result = '<div class="col-xs-12"><p class="text-danger">';
            result += 'Please input your search.</p></div>';
            $("#result").html(result);
        }
    });
    
    // Search wiki function
    function wikiSearch(searchText) {
        result = '';
        
        var parm = "what=" + searchText;
        $.getJSON("app.php", parm, function(data) {
            if (data.error) {
                result = '<div class="col-xs-12"><p class="text-danger">' + data.error.message + '</p></div>';
            } else {
                $.each(data.query.pages, function(k, v) {
                    result += '<div class="col-xs-12 result-item">';
                    result += '<a target="_blank" href="http://en.wikipedia.org/?curid=';
                    result += v.pageid + '">' + '<h2>' + v.title + '</h2>';
                    result += '<p>' + v.extract + '</p></div></a>';
                });
            }
        })
    }
});