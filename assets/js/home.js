let topTasks = [
    {
        'id': 1,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'school',
        'done': false,
    },
    {
        'id': 2,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'home',
        'done': false,
    },
    {
        'id': 3,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    }
]

let tasks = [
    {
        'id': 4,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
    {
        'id': 5,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
    {
        'id': 6,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
    {
        'id': 7,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
    {
        'id': 8,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
    {
        'id': 9,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
    {
        'id': 10,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
    {
        'id': 11,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
    {
        'id': 12,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
    {
        'id': 13,
        'task': 'Complete your To Do App',
        'date': 'may 2,2021',
        'tag': 'profesional',
        'done': false,
    },
]
jQuery(function ($) {
    
    function main() {
        top_tasks();
        normal_tasks();
        $(".sortable").sortable()
    }
    main();
    
    $("input[type=checkbox]").change(checkbox_change);

    $(".filter button").click(filter_click);
    $(".plus").click(plus_clicked);
    $("#cancel").click(cancel_clicked);
    $(".dropdown a").click(dropdown_anchor_clicked);
    $(".dropdown select").change(dropdown_select_clicked);
  
    function top_tasks() {
        if (topTasks.length === 0) {
            $(".top-todos").css("display", "none");
        }
        else {

            topTasks.forEach((ele) => {
                let card = `<li> <div class="card">
                <div class="my-info">
                <div class="checkbox">
                <input type="checkbox" name="my-task-1" id="${ele.id}">
                </div>
                <div class="task-info">
                <label for="${ele.id}">${ele.task}</label><br>
                <span class="task-date"><i class="fas fa-calendar-alt"></i> ${ele.date}</span>
                </div>
                </div>
                <div class="tasks-category">
                <div class="tags ${ele.tag}">
                ${ele.tag}
                </div>
                </div>
                </div> </li>`

                $(".top-todos ul").append(card);
            })
        }
    }

    function normal_tasks() {
        tasks.forEach((ele) => {
            let card = `<li> <div class="card">
            <div class="my-info">
            <div class="checkbox">
            <input type="checkbox" name="my-task-1" id="${ele.id}">
            </div>
            <div class="task-info">
            <label for="${ele.id}">${ele.task}</label><br>
            <span class="task-date"><i class="fas fa-calendar-alt"></i> ${ele.date}</span>
            </div>
            </div>
            <div class="tasks-category">
            <div class="tags ${ele.tag}">
            ${ele.tag}
            </div>
            </div>
            </div> </li>`

            $(".todos ul").append(card);
        })
    }

    function checkbox_change () {
        let label = $(`label[for=${this.id}]`);
        if (this.checked) {
            label.addClass("checkbox-checked");
            topTasks.forEach((ele)=>{
                if(ele.id==this.id){
                    console.log("matched :",ele.id);
                    ele.done=true
                }
            })
            tasks.forEach((ele)=>{
                if(ele.id==this.id){
                    console.log("matched :",ele.id);
                    ele.done=true
                }
            })
        }
        else {
            label.removeClass("checkbox-checked");
            topTasks.forEach((ele)=>{
                if(ele.id==this.id){
                    console.log("matched :",ele.id);
                    ele.done=false;
                }
            })
            tasks.forEach((ele)=>{
                if(ele.id==this.id){
                    console.log("matched :",ele.id);
                    ele.done=false;
                }
            })
        }
        console.log(topTasks);
    }

  

    function filter_click(){
        $(".dropdown").toggleClass("dropdown-clicked");
    }

    function dropdown_anchor_clicked(e){
        e.preventDefault();
        console.log($(this).data("val"));
        $(".dropdown").toggleClass("dropdown-clicked");
    }
    function dropdown_select_clicked(e){
        console.log(this.value);
        $(".dropdown").toggleClass("dropdown-clicked");
    }

    function plus_clicked(){
        $(".to-do-inputs").removeClass("animate__fadeOutDown").addClass("animate__fadeInUpBig").css("visibility", "visible");
    }

    function cancel_clicked(){
        $(".to-do-inputs").removeClass("animate__fadeInUpBig").addClass("animate__fadeOutDown").css("visibility", "hidden");
        
    }
})