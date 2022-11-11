function openChat() {
    document.getElementById("chat-box").style.display = "block";
    document.getElementById("chat-box-minimized").style.display = "none";
    document.getElementById("chat-callout").style.display = "none";
  }
  
  function closeChat() {
    document.getElementById("chat-box").style.display = "none";
    document.getElementById("chat-box-minimized").style.display = "block";
    document.getElementById("chat-callout").style.display = "block";
  }

  function openFAQ1(){
    document.getElementById("faq-intro").style.display = "none";
    document.getElementById("faq-faq1").style.display = "block";
  }
  
  function openFAQ2(){
    document.getElementById("faq-intro").style.display = "none";
    document.getElementById("faq-faq2").style.display = "block";
  }

  function mainFAQ(){
    document.getElementById("faq-intro").style.display = "block";
    document.getElementById("faq-faq1").style.display = "none";
    document.getElementById("faq-faq2").style.display = "none";
  }

  function connectAgent(loggedin){
    document.getElementById("faq-intro").style.display = "none";
    document.getElementById("faq-faq1").style.display = "none";
    document.getElementById("faq-faq2").style.display = "none";

    document.getElementById("connect-chat").style.display = "block";

    const date = new Date();

    if(loggedin == 0 && (date.getHours() >= 9 && date.getHours() <= 22)){
      setTimeout(showForm, 5000);
    } else if (loggedin == 1 && (date.getHours() >= 9 && date.getHours() <= 22)){
      setTimeout(connectChatSuccessful, 5000);
    } else {
      setTimeout(outsideWorkingHours, 5000);
    }


  }

  function showForm(){
    document.getElementById("admin-icon").style.display = "none";
    document.getElementById("faq-intro").style.display = "none";
    document.getElementById("faq-faq1").style.display = "none";
    document.getElementById("faq-faq2").style.display = "none";
    document.getElementById("connect-chat").style.display = "none";

    document.getElementById("form-fill-text").style.display = "block";
    document.getElementById("show-form").style.display = "block";

  }

  function connectChatSuccessful(){
    document.getElementById("connect-chat").style.display = "none";
    document.getElementById("admin-icon").style.display = "none";

    document.getElementById("success-text").style.display = "block";
    document.getElementById("send-message-box").style.display = "block";
  }

  function outsideWorkingHours(){
    document.getElementById("connect-chat").style.display = "none";
    document.getElementById("admin-icon").style.display = "none";

    document.getElementById("outside-working-hours").style.display = "block";
    document.getElementById("show-form").style.display = "block";
  }

  function checkingForm(){
    $(function () {
      $('#submit-inquiry').validate();

      $('#submit-inquiry').on('submit', function(e){
        e.preventDefault();

        // Collect the data.
        let dataString = $(this).serialize();

        // Send data.
        $.ajax({
          // type: 'POST',
          type: $form.attr('method'),
          //url: 'include/submit-form.php',
          url: $form.attr('action'),
          data: dataString,
          success: function(){
            if(date.getHours() >= 9 && date.getHours() <= 16){
              setTimeout(successForm, 5000);
            } else if (date.getHours() >= 9 && date.getHours() <= 16){
              setTimeout(connectChatAfterForm, 5000);
            }
          }
        })
      });
    });

  }

  function checkingFormProcess(){
    if(date.getHours() >= 9 && date.getHours() <= 16){
      setTimeout(successForm, 5000);
    } else if (date.getHours() >= 9 && date.getHours() <= 16){
      setTimeout(connectChatAfterForm, 5000);
    }
  }

  function successForm(){
    document.getElementById("show-form").style.display = "none";
    document.getElementById("form-submit-success").style.display = "block";
  }

  function connectChatAfterForm(){
    document.getElementById("show-form").style.display = "none";
    document.getElementById("connect-chat").style.display = "block";
    document.getElementById("admin-icon").style.display = "block";

    setTimeout(connectChatSuccessful, 5000);
  }

  
