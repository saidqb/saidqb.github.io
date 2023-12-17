/*
 * @author  Saidqb (Muh Nurul Khomsa)
 * @link  https://saidqb.com
 * @since Version 1.0.0
 */
 class sqjs  {

  mnav_top(){
    let getlist = $('.dnav-list-group').html()

    let list = $('.mnav-list-group').html(getlist)
    $('.mnav-list-group li').map(function(){
      $(this).removeClass('nav-item')
    })

  }

  getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
      );
  }

  getHight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
      );
  }

  addSpinner(){
    return {
      add : function(){
        $('body #app').append(`
          <div id="spinner-block">
          <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
          </div>
          </div>
          `);
      },
      remove :function(){
       $('body #app #spinner-block').remove()
     }
   }
 }

}
sqjs = new sqjs();

function width_under_768px(){

  if(sqjs.getWidth() < 768){

    if($('.sq_me_l .sq_me_l_nav a').length > 0){
      $('.dropdown .dropdown-menu').html('');

      $dropdownMenu = $('.dropdown .dropdown-menu');
      $('.sq_me_l .sq_me_l_nav a').map(function(){
        href = $(this).attr('href');
        text = $(this).html();
        $dropdownMenu.append($("<div/>").html(`<a class="dropdown-item" href="${href}">${text}</a>`)[0].innerHTML);
      })
    }
  } else {
    if($('.sq_me_l .sq_me_l_nav a').length > 0){
      $('.dropdown .dropdown-menu').html('');
    }

  }
}
function sq_on_scroll(){
  document.addEventListener("scroll", function(){
    let yoffset = window.pageYOffset;
    let xoffset = window.pageXOffset;
    if(yoffset > 56){
      $('.sq_me_l_box').addClass('me_sticky');
    } else {
      $('.sq_me_l_box').removeClass('me_sticky');

    }

  });
}

function canvasHome(){
  let elementsCC = document.querySelectorAll('.origin-center');

  elementsCC.forEach(element => {
    let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;

  //center center
  let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';
  
  element.style.setProperty("transform-origin", resultCC)
}); // forEach


  let elementsTL = document.querySelectorAll('.origin-left');

  elementsTL.forEach(element => {
    let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;

  //top left
  let resultTL = x + 'px ' + y + 'px';
  
  element.style.setProperty("transform-origin", resultTL)
}); // forEach
}

function profile__change(){
  $('[data-sqact="image--profile"]').click(function(v){
    if ( v.target.currentSrc == sq_config.site_url + 'assets/sq/images/photo.png' ) {
      $('img',$(this)).attr('src', sq_config.site_url + 'assets/sq/images/photo2.jpg');
    } else  {
      $('img',$(this)).attr('src', sq_config.site_url + 'assets/sq/images/photo.png');
    }


  })
}


function contentWait(){

  $('#app main.bmd-layout-content').removeClass('dn');
  canvasHome()
}

function homeMainIcon(){

  datafly = [
  {
    num : 1,
    image: sq_config.site_url + 'assets/sq/images/itech/nodejs.png',
    background: ''
  },
  {
    num : 2,
    image: sq_config.site_url + 'assets/sq/images/itech/vue.png',
    background: ''
  },
  {
    num : 3,
    image: sq_config.site_url + 'assets/sq/images/itech/nuxt.png',
    background: ''
  },
  {
    num : 4,
    image: sq_config.site_url + 'assets/sq/images/itech/python.png',
    background: ''
  },
  {
    num : 5,
    image: sq_config.site_url + 'assets/sq/images/itech/git.png',
    background: ''
  },
  {
    num : 6,
    image: sq_config.site_url + 'assets/sq/images/itech/laravel.png',
    background: ''
  },
  {
    num : 11,
    image: sq_config.site_url + 'assets/sq/images/itech/javascript.png',
    background: ''
  },
  {
    num : 12,
    image: sq_config.site_url + 'assets/sq/images/itech/php.png',
    background: ''
  },
  {
    num : 13,
    image: sq_config.site_url + 'assets/sq/images/itech/html.png',
    background: ''
  },
  {
    num : 14,
    image: sq_config.site_url + 'assets/sq/images/itech/css.png',
    background: ''
  },
  {
    num : 15,
    image: sq_config.site_url + 'assets/sq/images/itech/codeigniter.png',
    background: ''
  },
  {
    num : 16,
    image: sq_config.site_url + 'assets/sq/images/itech/wordpress.png',
    background: ''
  },
  ];

  myIcon = '';
  datafly.map(function(v,i){
    myIcon += `<div  data-fly="${v.num}" class="dfly unabs"><img src="${v.image}"></div>`;
  })
  $('.sq-hicon-fly').html(` <div class="sq-rel-fly">${myIcon}</div> `);


  n = 1;
  $('.sq-rel-fly [data-fly]').map(function(){
    let t = $(this)
    // console.log($(this))
    setTimeout(function(){
      t.removeClass('unabs')
      t.addClass('sq_fly_rot')
    },1300 * n)
    n++;

  })
}


copyData = ['coffee-cp1', 'coffee-cp2', 'coffee-cp3','copy-text'];
copyData.forEach(sqbClipboard);

function sqbClipboard(item){
  new ClipboardJS('.'+item);
}

function sqbClipboardRun(item){
  $('.sq-copy').click(function(){
    $.toast({
      heading: 'Notification',
      text: 'Success Copying ',
      position: 'top-center',
      stack: false
    })
    let $t = $(this);
    $t.addClass('text-secondary bg-dark')
    $t.attr('title', 'Copied!')
    $t.tooltip('show')
    setTimeout(function(){
      $t.removeClass('text-secondary bg-dark')
      $t.removeAttr('title')
      $t.tooltip('dispose')
    },1000)
  })
}



$(function () {
 $('body').bootstrapMaterialDesign({ ripples: false }); 
 sqjs.mnav_top();
 sqjs.addSpinner().add();
 width_under_768px() 
 homeMainIcon()
 sq_on_scroll()
 sqbClipboardRun();
 profile__change();


 sqjs.addSpinner().remove();
 contentWait()
 $('#bg-lblack-outer').show();


 setTimeout(function(){
   $('#app .sq-hicon-fly [data-fly]').map(function(){
    $(this).removeClass('dfly')
  })

 },1300)

})


