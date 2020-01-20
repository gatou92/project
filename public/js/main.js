$(document).ready(function(){
    $('.delete-article').on('click',function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        console.log(id);
        $.ajax({
            type:'DELETE',
            url:'/articles/'+id,
            success: function(response){
                alert('DELETE');
                window.location.href = "/";
            },
            error : function(err){
                console.log(err);
            }
        });
    });
});