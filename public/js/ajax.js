$(document).ready(function () {
    $("#email").on('keyup', function (e) {
        e.preventDefault();
        var data = $('#email').val();
        $.ajax({
            url: '/user/checkemail',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ email: data }),
            success: function (response) {

                if (response == 'taken') {
                    $('#emaillabel').html('Email already exists ');
                    $('#emaillabel').css("color", "red");
                    const pass=document.getElementById('email');
                    const formc=pass.parentElement;
                    formc.className='textfield failed';
                }
                 else if(response == 'available'){
                      $('#emaillabel').html('Email is available');
                      $('#emaillabel').css("color", "green");
                      const pass=document.getElementById('email');
                      const formc=pass.parentElement;
                      formc.className='textfield success';
                 }else{
                    $('#emaillabel').html('Email is Invalid');
                    $('#emaillabel').css("color", "red");
                    const pass=document.getElementById('email');
                    const formc=pass.parentElement;
                    formc.className='textfield failed';

                 }
             
            },
            error:function(err){

            }
        });
    });
});
/////////////////////////////////////////////////////

$(document).ready(function () {
    $("#signInform").on('submit', function (e) {
        e.preventDefault();
        const data = { 
         firstname:  $('#firstname').val(),
         lastname: $('#lastname').val(),
         email: $('#email').val(),
         password: $('#password').val(),
         confirmpassword: $('#confirmpassword').val(),
         phone: $('#phone').val()
    };
    let c=0;
        $.ajax({
            url: '/user',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ inputs: data }),
            success: function (response) {
                 if(response.passerror != undefined)
                 {
                        $('#passlabel').html( response.passerror);
                        const pass=document.getElementById('password');
                        const formc= pass.parentElement;
                        formc.className='textfield failed';
                        c++;
                 }
                 else{
                    $('#passlabel').html( '');
                    const pass=document.getElementById('password');
                    const formc= pass.parentElement;
                    formc.className='textfield success';
                 }
            
                 if(response.firsterror != undefined)
                 {
                     $('#firstnamelabel').html( response.firsterror);
                     const pass=document.getElementById('firstname');
                     const formc= pass.parentElement;
                     formc.className='textfield failed';
                     c++;
                 }else{

                    $('#firstnamelabel').html('');
                    const pass=document.getElementById('firstname');
                    const formc= pass.parentElement;
                    formc.className='textfield success';
                 }
                 if(response.lasterror != undefined)
                 {
                    $('#lastnamelabel').html( response.lasterror);
                    const pass=document.getElementById('lastname');
                    const formc= pass.parentElement;
                    formc.className='textfield failed';
                    c++;
                 }else{

                    $('#lastnamelabel').html('');
                    const pass=document.getElementById('lastname');
                    const formc= pass.parentElement;
                    formc.className='textfield success';
                 }

                 if(response.confirmpasserror != undefined)
                 {
                    $('#confirmpasslabel').html( response.confirmpasserror);
                    const pass=document.getElementById('confirmpassword');
                    const formc= pass.parentElement;
                    formc.className='textfield failed';
                    c++;
                 }else{

                    $('#confirmpasslabel').html( '');
                    const pass=document.getElementById('confirmpassword');
                    const formc= pass.parentElement;
                    formc.className='textfield success';
                 }
                 if(response.phoneerror != undefined)
                 {
                    $('#phonelabel').html( response.phoneerror);
                    const pass=document.getElementById('phone');
                    const formc= pass.parentElement;
                    formc.className='textfield failed';
                    c++;
                 }else{

                    $('#phonelabel').html( '');
                    const pass=document.getElementById('phone');
                    const formc= pass.parentElement;
                    formc.className='textfield success';
                 }
                 if(response.emailerror != undefined)
                 {
                    $('#emaillabel').html(response.emailerror);
                    const pass=document.getElementById('email');
                    const formc= pass.parentElement;
                    formc.className='textfield failed';
                    c++;
                 }


                    if(c==0){
                        $.ajax({
                            url: '/',
                            method: 'GET',
                            success: function (response) {
                 
                                window.location.href = '/';

                            },
                            error:function(err){
                            }
                        });
                    }
            },
            error:function(err){
            }
        });
    });
});







