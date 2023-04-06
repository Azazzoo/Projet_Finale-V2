$("#telephone").blur(function (){
    let $telephone = $("#telephone").val();
    var regex = /^\d{3}-\d{3}-\d{4}$/;
    var inputField = $('#telephone');
    if ($telephone === ""){
        $("#erreurtelephone").addClass("visible")
        $("#erreurtelephone").prop("disabled", false)
    }
    else if ($telephone !== regex )
    {
        $("#erreurtelephone").removeClass("visible")
        inputField.addClass('is-invalid');
    }
    else{
        $("#erreurtelephone").addClass("visible")
        $("#erreurtelephone").prop("disabled", false)
        inputField.removeClass('is-invalid');
    }
})