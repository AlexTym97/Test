// 2 Завдання
(function ($) {
    $("document").ready(function(){

        var regexp = /\bangular\b/gi;
        $("#editor").text("This text can change color when you typing word 'angular'. Try this.... ");
        $("#editor").keyup(function(){
            colorize(regexp);
        });
    });
    function colorize(r){

        let foo = $("#editor").text();
        let match, matches = [];

        while ((match = r.exec(foo)) != null) {
            matches.push(match.index);
        }

        let i;
        let start = 0;
        let content = "";
        let element = "<span style='color:blue;'>angular</span>";

        for(i = 0; i < matches.length; i++){
            content += "<span>" + foo.substring(start,matches[i]) + "</span>" + element;
            start = matches[i] + 7;
        }
        content += "<span>"+foo.substring(matches[i-1]+7,foo.length)+"</span>";

        $("#editor").html(content).focus();
        placeCaretAtEnd( document.getElementById("editor") );
    }

    function placeCaretAtEnd(el) {
        el.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }
})(jQuery);
