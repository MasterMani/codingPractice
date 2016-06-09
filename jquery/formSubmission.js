$(document).ready(function(){
  $('#formContainer footer').text('Form Submission Example page - footer');
});

function subCll(){
  console.log("You have sucessfully submited");
  $('#formContainer form').submit(function(ev){
    ev.preventDefault()
  })

}