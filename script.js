$(function() {
    $("#nu_datebirth").datepicker({
    onSelect: function(value, ui) {
        var today = new Date(),
            age = today.getFullYear() - ui.selectedYear;
        $('#a_ge').val(age);
    },
       
    dateFormat: 'dd-mm-yy',changeMonth: true,changeYear: true,yearRange:"c-100:c+0"
    });

    $.get("https://restcountries.eu/rest/v2/all", function(data, status){
        console.log(data);
        var country = new Array();

        for (let i = 0; i<data.length; i++)
        {
            country.push(data[i].name)
        }
        console.log(country)
        $("#country").select2({
            data:country
        });
    });


      
});
$('#mob_frm').submit(function(e) {
    e.preventDefault();
    if(!$('#mobile').val().match('+(91)([0-9]{10})'))  {
        alert("Enter indian mobile number(+91)");
        return;
    }  

});

    
$(document).ready(function() {
$("#basic-form").validate();

});




