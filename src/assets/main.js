$(function() {

    // Ajax request
    $.ajax({
        url: 'https://www.codeschool.com/users/3000988.json',
        dataType: 'jsonp',
        success: function(response) {
          console.log(response.courses.completed);
          // handle response
          var i;
          var html;
            
          for(i =0; i < response.courses.completed.length; i++ ){
           var course = response.courses.completed[i];   
    
           html = '<div class="course">';
           html += '<h3>' + course.title + '</h3>';
           html += '<img src="' + course.badge + '" />';
           html += '<a href=" ' + course.url + ' " target="_blank" class="btn btn-primary" >See Course</a>';
           html += '</div>';
          
           $('#badges').append(html);
          }//for loop
            
        }//succes funtion
    });

});
