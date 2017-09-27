$(document).ready(function(){
       $('#joinForm').submit(function(event){
          event.preventDefault();
          var name = $("#name").val();
          console.log(name);
          
          $.post("http://httpbin.org/post",
                { name:name },
                function(data){
                   //서버로부터 응답을 받으면
                   //alert(data.form.id + '님 로그인 되었습니다.');   
                   var joinModal = $('#joinModal');
                   joinModal.modal();
                   
                   joinModal.find('.modal-body').text(data.form.name + '님 회원가입되었습니다.');
                });
       });
    });