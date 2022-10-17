jQuery(document).ready(function($){
    $('form.ajax').on('submit', function(e){
        e.preventDefault();
        var that = $(this),
            url = that.attr('action'),
            type = that.attr('method');
        var first_name = $('.first_name').val();
        var email = $('.email').val();
        var last_name = $('.last_name').val();
        $.ajax({
            url: cpm_object.ajax_url,
            type:"POST",
            dataType:'type',
            data: {
                action:'set_form',
                first_name:first_name,
                email:email,
                last_name:last_name,
            },   success: function(response){
                $(".error_msg").css("display","block");

            }, error: function(data){
                $(".success_msg").css("display","block");
                $("form.ajax").css("display","none");      }
        });
        $('.ajax')[0].reset();
    });

    /**
     * Shortcode form submission ajax
     */
    $('.mrm-form-form-wrapper form').on('submit', function (e) {
        e.preventDefault();
        jQuery(".response").html('')
        jQuery.ajax({
            type : "post",
            dataType : "json",
            url : MRM_Frontend_Vars.ajaxurl,
            data : {action: "mrm_submit_form" , post_data : jQuery("#mrm-form").serialize()},
            success: function(response) {
                jQuery(".response").html(response.message)
            }
        })
    })


});