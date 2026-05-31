
  /*var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      }
    }
  });*/
 /*var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
    });*/
    
/*var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }
  }
});*/
 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev  ",
      },
      thumbs: {
        swiper: swiper,
      },
    });


    function showTab(tabId){

    // Hide all content
    document.querySelectorAll('.tab_content').forEach(content =>{
        content.classList.remove('active');
    });

    // Remove active from buttons
    document.querySelectorAll('.tab_btn').forEach(btn =>{
        btn.classList.remove('active');
    });

    // Show selected content
    document.getElementById(tabId).classList.add('active');

    // Active button
    event.target.classList.add('active');
}