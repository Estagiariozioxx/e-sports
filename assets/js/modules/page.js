(function ($) {
  var containerinstruction = $(".instruction__slick");
  var containerstep = $(".slick__step");
  var containertop = $(".slick__top");
  var containerslick =$(".center");
  var containercuriositybasketball =$(".slick_basket");
  var containerslicknav =$(".center__nav");

  containerslick.slick({
    autoplay: false,
    autoplaySpeed: 4000,
    asNavFor:'.center__nav',
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
  containerslicknav.slick({
      centerMode: true,
      asNavFor: '.center',
      slidesToShow:5,
      arrows: true,
      dots: false,
      focusOnSelect: true,
  prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="icon-arrow-left"/></button>',
  nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="icon-arrow-right"></button>',
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: true,
              centerMode: true,
              slidesToShow: 1,
      prevArrow: '<button class="slick-prev slick-arrow" type="button"><img class="icon-arrow-left" src="https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/copa-do-mundo/seta_esquerda.svg"></button>',
           nextArrow: '<button class="slick-next slick-arrow" type="button"><img class="icon-arrow-right" src="https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/copa-do-mundo/seta_direita.svg">'
          }
      }]
  });

 /* $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });*/

/*   containerBolas.slick({
    autoplay: false,
    asNavFor: '.bola__nav',
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
        }
    }]
}); */

containercuriositybasketball.slick({
  autoplay: false,
  autoplaySpeed: 4000,
  pauseOnFocus: false,
  pauseOnHover: false,
  arrows: true,
  dots: false,
  adaptiveHeight: true,
  prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="icon-arrow-left"/></button>',
  nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="icon-arrow-right"></button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

  
  containerinstruction.slick({
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  containerstep.slick({
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  containertop.slick({
    autoplay: false,
    autoplaySpeed: 4000,

    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });



    // Function to handle smooth scrolling to anchor
  function scrollToAnchor(anchorID) {
    const element = document.getElementById(anchorID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Event listener to handle anchor clicks
  document.addEventListener("DOMContentLoaded", function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(anchor) {
      anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetID = this.getAttribute("href").substring(1);
        scrollToAnchor(targetID);
      });
    });
  });


  // Function to handle smooth scrolling to anchor
function scrollToAnchor(anchorID) {
  const element = document.getElementById(anchorID);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

  // Event listener to handle div clicks
  document.addEventListener("DOMContentLoaded", function() {
    const futebolDiv = document.getElementById('fut');
    const basqueteDiv = document.getElementById('basq');
    const baseballDiv = document.getElementById('base');

    futebolDiv.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToAnchor('futebol');
    });

    basqueteDiv.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToAnchor('basquete');
    });

    baseballDiv.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToAnchor('baisebol');
    });
  });



  $('.name-cupom').on('click', function () {
    var $el = $(this);

    var texto = $el.find('.cupom').text();

    $('.input-transfer').val(texto).select();

    document.execCommand("copy");


    $el.addClass('copied');
    setTimeout(function () {
        $el.removeClass('copied');
    }, 3000);
});
  




  var produto = [120960, 114348, 114386, 117476, 114394, 116495];

  var template_produtos =
  '<div class="item">' +
    '<a class="link">' +
      '<div class="foto"><span class="discount d-none"></span>' +
        '<span class="thumb">' +
          '<img class="lozad img-fluid" src="assets/img/pixel-2.png">' +
        '</span>' +
      '</div>' +
      '<div class="tags"></div>' +
      '<h2 class="title"></h2>' +
      '<div class="price"></div>' +
      '<div class="product-variants">' +
        '<div class="variants-slider"></div>' +
      '</div>' +
      '<div class="product-actions"></div>' +
    '</a>' +
  '</div>';

  var vitrine = $('#vitrine-fut');
  var itens = $('#vitrine-fut').attr('data-products');

	$.getJSON('https://www.futfanatics.com.br/web_api/products?id=' + produto, '', function (data) {
		if (data) {
			var variants = [];

			data.Products.forEach(function(dataProduct){

				var product = dataProduct.Product

				if (product.available != 0) {
					var template = jQuery(template_produtos);

					var link = product.url.https;
					var img = product.ProductImage[0].thumbs[180].https;
					var title = product.name;
					var pricePromo = product.promotional_price;
					var price = product.price;
					var percentDiscount = 100 - (pricePromo/price) * 100;
					var payment = product.payment_option;
					var personalization = product.Properties['Permite Personalização'] == 'Sim' ? true : false;
					var release = product.release == "1" ? true : false;

					template.find('.link').attr('href', link);
					template.find('.foto span img').attr('src', img);
					template.find('.title').html(title);

					if (percentDiscount < 100) {
						template.find('.foto .discount').html('<i class="icon-arrow-down-fill"></i>' + percentDiscount.toFixed() + '%').removeClass('d-none');
					}

					// lozad('.lozad', {
					//     load: function(target)
 
					//             target.src = target.dataset.src;
					//             target.onload = function() {
					//                 target.classList.add('fadein');
					//             }
					//     }
					// }).observe();

					if (release && pricePromo != 0 && personalization) {
						template.find('.tags').html('<span class="lancamento">Lançamento</span> <span class="oferta">Oferta</span>');
					} else if (pricePromo != 0 && personalization) {
						template.find('.tags').html('<span class="oferta">Oferta</span> <span class="personalize">Personalize</span>');
					} else if (product.release && pricePromo != 0) {
						template.find('.tags').html('<span class="lancamento">Lançamento</span><span class="oferta">Oferta</span>');
					} else {

						if (release) {
							template.find('.tags').html('<span class="lancamento">Lançamento</span>');
						} else if (pricePromo != 0) {
							template.find('.tags').html('<span class="oferta">Oferta</span>');
						} else if (personalization) {
							template.find('.tags').html('<span class="personalize">Personalize</span>');
						}
					}

					if (pricePromo != 0) {
						template.find('.price').html('<div class="old-price">R$ ' + price.replace('.', ',') + '</div><div class="current-price">R$ ' + pricePromo.replace('.', ',') + '</div>');
					} else {
						template.find('.price').html('<div class="current-price">R$ ' + price.replace('.', ',') + '</div>');
					}
					if (payment) {
						template.find('.price').append('<div class="installments">' + payment.replace('Sem juros', '').replace('desconto', 'desconto via PIX') + '</div>');
					}

					
					// variants[0].forEach(function(row){
					//     if (row) {
					//         template.find('.variants-slider').append(
					//             '<div class="variants-item">' +
					//                 '<button type="button" data-variant="'+ row.Variant.id +'">' + 
					//                     row.Variant.Sku[0].value + 
					//                 '</button>' +
					//             '</div>'
					//         );
					//     }
					// });

					// template.find('.product-actions').html(
					//     '<a href="#" class="bt_comprar d-flex justify-content-center" title="Adicionar este item ao seu carrinho">' +
					//         '<i></i>' +
					//         '<span>Comprar</span>' +
					//     '</a>'
					// );

	//                vitrine.append(template);
					vitrine.slick('slickAdd', template);
				}
			});

			// jQuery.ajax({
			//     url: "https://www.futfanatics.com.br/web_api/variants?product_id=" + product.id,
			//     //context: document.body,
			//     async: false,
			//     method: "GET",
			//     crossDomain: true,
			//   }).done(function(data) {
			//       console.log("Data:",data);
			//     variants.push(data.Variants);
			//   });
				
			
		}
	});
 

  vitrine.html("");

  if (isMobile()) {
    vitrine.slick({
      autoplay: false,
      infinite: true,
      speed: 500,
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      //        lazyLoad: 'ondemand',
      prevArrow: $(".slick-nav_vitrine").find(".slick-prev"),
      nextArrow: $(".slick-nav_vitrine").find(".slick-next"),
    });
  } else {
    vitrine.slick({
      autoplay: false,
      infinite: true,
      speed: 500,
      arrows: true,
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 2,

      prevArrow: $(".slick-nav_vitrine").find(".slick-prev"),
      nextArrow: $(".slick-nav_vitrine").find(".slick-next"),
    });
  }

  function isMobile() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

 

  $('.c-newsletter form').on('submit', function(event) {
    event.preventDefault();
  
    var form = $(this);
    var formData = form.serialize();
    var url = 'https://microservicos.futfanatics.com.br/api/v1/futfanatics-nacional/dinamizeAjax?url=' + encodeURIComponent(form.attr('action'));
  
    form.find('.msg-resp').html('').removeClass('text-success text-danger text-info').slideUp();
  
    if (!form.find('select').val()) {
      form.find('.msg-resp').html('Escolha o seu time.').addClass('text-info').slideDown();
      return false;
    }
    
    $.post(url, formData, function(response) {
      if (response.status) {
        form.find('.msg-resp').html('Boa jogada, e-mail cadastrado com sucesso!').addClass('text-success').slideDown();
  
        window.location = 'https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/supercraquemarta/super-craque-wallpapers.zip'
      } else {
        form.find('.msg-resp').html('Desculpe-nos, ocorreu um erro ao cadastrar.').addClass('text-danger').slideDown();
        console.log('Error form dinamize: ' + response.error_msg.result);
      }
    });
  
    return false;
  });
  
  
})(jQuery);
