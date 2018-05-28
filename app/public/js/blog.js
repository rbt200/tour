$(function() {
  $.getJSON('api', updateFeedback);
  
  $('.feedback-form').submit(function(e) {
    e.preventDefault();
    $.post('api', {
      target: $(this).parent().parent().find('.blog-title').text(),
      name: $(this).find('.feedback-form__name').val(), // Array.from(document.getElementsByClassName('feedback-form__name'))[1].value,
      content: $(this).find('.feedback-form__content').val()// Array.from($('.feedback-form__content'))[1].value
    }, updateFeedback);
    $(this).trigger('reset'); // clear the form's fields
  });

  $('.feedback-form-group').on('click', function(e) {
    if(e.target.className === 'recent-feedbacks__feedback-remove') {
      $.ajax({
         
      });
    }
  });

  function updateFeedback(data) {
    const blog = $(".blog");  
  $.each(blog, (key,value) => {
    const title = $(value).find("div").find(".blog-title").text();
    const feedback = $(value).find("div").find(".feedback-form__recent-feedbacks");
    let output = "";
    $.each(data[title], (val1, val2) => {
      output += `
      <h6 class='recent-feedbacks__name'>${val2.name}</h6>
      <p class='recent-feedbacks__feedback'>${val2.content}</p>
      `;
    });    
    feedback.html(output);   
  });
  }
});