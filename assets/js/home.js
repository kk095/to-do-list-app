
jQuery(function ($) {
    
    function main() {
        $(".sortable").sortable()
        checkbox_change();
        checkToptasks();
    }
    main();
    $("input[type=checkbox]").change(checkbox_change);

    $(".filter button").click(filter_click);
    $(".plus").click(plus_clicked);
    $("#cancel").click(cancel_clicked);
    $(".dropdown a").click(dropdown_anchor_clicked);
    $(".dropdown select").change(dropdown_select_clicked);
  
    

    function checkbox_change () {
        let label = $(`label[for=${this.id}]`);
        if (this.checked) {
            label.addClass("checkbox-checked");
        }
        else {
            label.removeClass("checkbox-checked");
            
        }
    }

    function filter_click(){
        $(".dropdown").toggleClass("dropdown-clicked");
    }

    function dropdown_anchor_clicked(e){
        console.log($(this).data("val"));
        $(".dropdown").toggleClass("dropdown-clicked");
    }
    function dropdown_select_clicked(e){
        $(".dropdown").toggleClass("dropdown-clicked");
    }

    function plus_clicked(){
        $(".to-do-inputs").removeClass("animate__fadeOutDown").addClass("animate__fadeInUpBig").css("visibility", "visible");
    }

    function cancel_clicked(){
        $(".to-do-inputs").removeClass("animate__fadeInUpBig").addClass("animate__fadeOutDown").css("visibility", "hidden");
        
    }
    function checkToptasks(){
       if( ($(".top-todos ul li").length)==0){
           console.log("top-todos")
           $(".top-todos").css("display","none");
       };
       if( ($(".top-todos ul li").length)===3){
           console.log("top-todos-length");
           $(".todos .star").css("display","none");
       };
       if( ($(".todos ul li").length)==0){
           console.log("todos")
           $(".todos").css("display","none");
       };
    }
})