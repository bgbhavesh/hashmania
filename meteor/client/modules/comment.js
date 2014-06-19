Comment = {};

Comment.tapOnSubmitComment = function (event){
        var data = {};
        var date = new Date().getTime();
        var likeid = Session.get("currentBig");
        var input = $(this).parent().find("input");
        var value= input.val();
        if(!value)
            return;
        // console.log(value)
        // console.log(likeid);
        // console.log(value);
        data.likeid =likeid;
        data.clientid = Session.get("clientid");
        data.value = value;
        data.date= date;
        Meteor.myElement = this;
        // console.log($(this).sibling(".commentWrapper"))
        $(this).parent()
                .siblings(".commentWrapper")
                .append('<h4 class="ui header"><mark>'+value +'</mark></h4>');
        // $(".field[likeid='" +likeid+"']").css("display","none");
        HashComment.insert(data);
        input.val("");
        onScore(10);
    }