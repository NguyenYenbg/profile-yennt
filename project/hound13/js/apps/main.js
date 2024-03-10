(function (win, $) {
  'use strict';
  win.EVENTS = win.EVENTS || {};
  win.SWIPER = win.SWIPER || {};

  win.SWIPER.common = (function () {
    var defParams = {
      jsSwiperBanner: '.js-swiper-banner',
      jsSwiperAbout: '.js-swiper-about',
      jsSwiperOffice: '.js-swiper-office',
      jsSwiperNews: '.js-swiper-news',
      jsCareerNav: '.js-career-nav',
    };
    return {
      init: function () {
        this.initOpts();
      },
      initOpts: function () {
        this.swiperBanner;
        this.swiperAbout;
        this.swiperOffice;
        this.swiperNews;
        this.swiperCareerNav;
      },
      swiperBanner: new Swiper(defParams.jsSwiperBanner, {
        centeredSlides: true,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.banner-pagination',
          clickable: true,
        },
      }),
      swiperAbout: new Swiper(defParams.jsSwiperAbout, {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.scroll-group__next',
          prevEl: '.scroll-group__prev',
        },
        scrollbar: {
          el: '.scroll-group__bar',
          hide: false,
        },
        pagination: {
          el: '.scroll-group__pagination',
          type: 'fraction',
        },
        breakpoints: {
          1024: {
            slidesPerView: 1.15,
            spaceBetween: 12,
          },
        },
      }),
      swiperOffice: new Swiper(defParams.jsSwiperOffice, {
        slidesPerView: 1,
        pagination: {
          el: '.scroll-group__pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.scroll-group__next',
          prevEl: '.scroll-group__prev',
        },
      }),
      swiperNews: new Swiper(defParams.jsSwiperNews, {
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.scroll-group__next',
          prevEl: '.scroll-group__prev',
        },
        pagination: {
          el: '.scroll-group__pagination',
          type: 'fraction',
        },
        breakpoints: {
          1024: {
            slidesPerView: 1.062,
            spaceBetween: 12,
          },
        },
      }),
      swiperCareerNav: new Swiper(defParams.jsCareerNav, {
        slidesPerView: 'auto',
        spaceBetween: 24,
        freeMode: true,
        breakpoints: {
          1024: {
            spaceBetween: 12,
          },
        },
      }),
    };
  })();

  win.EVENTS.common = (function () {
    var defParams = {
      isActive: 'is_active',
      isScroll: 'is_scroll',
      isOpenMenu: 'is_openMenu',
      isAnimate: 'is_animate',
      isHide: 'is_hide',
      playerInitialized: 'player-initialized',
      idVideoGame: '07uyx4d0DpY',
      jsSwiperGame: '.js-swiper-game',

      jsToggle: '.js_toggle',
      btnTop: '.btn-top',
      header: '.header',
      gnbList: '.gnb__list',
      gnbItem: '.gnb__item',
      language: '.language',
      languageItem: '.language__item',

      section: 'section',
      banner: '#banner',
      game: '#game',
      gameContent: '.js-swiper-game .slider-item__content',
      gameImg: '.js-swiper-game .slider-item__img img',
      gameIframe: '.js-swiper-game .swiper-slide iframe',
      player1: '#player1',
      aboutNav: '.about-nav',
      aboutNavItem: '.about-nav__item',
      aboutItem: '.about-item',
      careerNav: '.career-nav',
      careerNavItem: '.career-nav__item',
      careerPanel: '.career-panel',
      office: '.office',
      officeBoxImg: '.office-box__img',
      news: '.news',
      newsItem: '.news-item',
    };
    return {
      init: function () {
        this.setElement();
        this.initOpts();
        this.bindEvents();
      },
      setElement: function () {
        this.window = $(win);
        this.btnTop = $(defParams.btnTop);
        this.header = $(defParams.header);
        this.language = $(defParams.language);
        this.aboutNav = $(defParams.aboutNav);
        this.game = $(defParams.game);
        this.gameContent = $(defParams.gameContent);
        this.gameImg = $(defParams.gameImg);
        this.gameIframe = $(defParams.gameIframe);
        this.player1 = $(defParams.player1);
        this.careerNav = $(defParams.careerNav);
        this.section = $(defParams.section);
        this.gnbItem = $(defParams.gnbItem);
        this.jsToggle = $(defParams.jsToggle);
        this.office = $(defParams.office);
        this.officeBoxImg = $(defParams.officeBoxImg);
        this.news = $(defParams.news);
      },
      initOpts: function () {
        this.swiperGame;
      },
      bindEvents: function () {
        this.window.on('scroll', $.proxy(this.onScrollEvent, this)).scroll();
        this.language.on(
          'click',
          defParams.languageItem,
          $.proxy(
            this.languageActive,
            this,
            defParams.language,
            defParams.languageItem
          )
        );
        this.aboutNav.on(
          'click',
          defParams.aboutNavItem,
          $.proxy(
            this.aboutNavActive,
            this,
            defParams.aboutNav,
            defParams.aboutNavItem
          )
        );
        this.careerNav.on(
          'click',
          defParams.careerNavItem,
          $.proxy(
            this.careerNavActive,
            this,
            defParams.careerNav,
            defParams.careerNavItem
          )
        );
        this.btnTop.on('click', $.proxy(this.gotoTop, this));
        this.jsToggle.on('click', $.proxy(this.toggleMenu, this));
        this.office.on(
          'click',
          defParams.officeBoxImg,
          $.proxy(this.popupOffice, this)
        );
        this.news.on(
          'click',
          defParams.newsItem,
          $.proxy(this.popupNews, this)
        );
      },
      swiperGame: new Swiper(defParams.jsSwiperGame, {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 24,
        grabCursor: true,
        navigation: {
          nextEl: '.scroll-group__next',
          prevEl: '.scroll-group__prev',
        },
        scrollbar: {
          el: '.scroll-group__bar',
          hide: false,
        },
        pagination: {
          el: '.scroll-group__pagination',
          type: 'fraction',
        },
      }),
      navActive: function (list, item, target, panel) {
        $(item).find('.nav-link').removeClass('is_active');
        target.children().addClass('is_active');
        //tabs role
        if (list == '.about-nav' || list == '.career-nav') {
          $(item).attr('aria-selected', 'false');
          target.attr('aria-selected', 'true');
          var tabId = target.attr('aria-controls');
          $(panel).addClass('is_hidden');
          $('#' + tabId).removeClass('is_hidden');

          // CAREERS
          var numCareer = $(
            '.career-nav__item .nav-link.is_active .nav-link__num'
          ).text();
          if (list == '.career-nav' && Number(numCareer) > 0) {
            $('.career-hasdata').removeClass('is_hidden');
            $('.career-nodata').addClass('is_hidden');
            $('.career-data .pagination').removeClass('is_hidden');
          } else {
            $('.career-hasdata').addClass('is_hidden');
            $('.career-nodata').removeClass('is_hidden');
            $('.career-panel .pagination').addClass('is_hidden');
          }
        }
      },
      gotoTop: function () {
        window.location.href = defParams.banner;
      },
      onScrollEvent: function () {
        var top = window.scrollY;
        this.startScroll(top);
        this.createGameIframe(top);
        this.activeNavScroll(top);
      },
      startScroll: function (top) {
        if (top > 0) {
          this.btnTop.addClass(defParams.isActive);
          this.header.addClass(defParams.isScroll);
          this.header.removeClass(defParams.isOpenMenu);
        } else {
          this.btnTop.removeClass(defParams.isActive);
          this.header.removeClass(defParams.isScroll);
        }
      },
      createGameIframe: function (top) {
        var _this = this;
        if (top > this.game[0].offsetTop - 80) {
          //first slide
          this.gameContent.eq(0).addClass(defParams.isAnimate);
          setTimeout(function () {
            var player = new YT.Player(player1, {
              videoId: defParams.idVideoGame,
              playerVars: {
                controls: 0,
                showinfo: 0,
                rel: 0,
                autoplay: 1,
                mute: 1,
                playsinline: 1,
                playlist: defParams.idVideoGame,
                loop: 1,
                wmode: 'transparent',
                enablejsapi: 1,
              },
              events: {
                onReady: function (event) {
                  event.target.playVideo();
                  _this.gameImg.eq(0).addClass(defParams.isHide);
                },
              },
            });
          }, 1000);
          _this.player1.addClass(defParams.playerInitialized);
          //next slide
          _this.swiperGame.on('slideChangeTransitionEnd', function () {
            var activeIndex = this.activeIndex;
            var activeSlide = this.slides.eq(activeIndex);
            var playerId = 'player' + (activeIndex + 1);
            var playerElem = activeSlide.find('#' + playerId);
            _this.gameImg.removeClass(defParams.isHide);
            _this.gameContent.removeClass(defParams.isAnimate);
            activeSlide
              .find('.slider-item__content')
              .addClass(defParams.isAnimate);
            if (
              playerElem.length > 0 &&
              !playerElem.hasClass(defParams.playerInitialized)
            ) {
              _this.gameIframe.hide();
              setTimeout(function () {
                playerElem.addClass(defParams.playerInitialized);
                var player = new YT.Player(playerId, {
                  videoId: defParams.idVideoGame,
                  playerVars: {
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    autoplay: 1,
                    mute: 1,
                    playsinline: 1,
                    playlist: defParams.idVideoGame,
                    loop: 1,
                    wmode: 'transparent',
                    enablejsapi: 1,
                  },
                  events: {
                    onReady: function (event) {
                      event.target.playVideo();
                      activeSlide.find('.img').addClass(defParams.isHide);
                    },
                  },
                });
              }, 1000);
            } else {
              _this.gameIframe.each(function () {
                this.contentWindow.postMessage(
                  '{"event":"command","func":"seekTo","args":[0,true]}',
                  '*'
                );
              });
              _this.gameIframe.hide();
              setTimeout(function () {
                $(playerElem)[0].contentWindow.postMessage(
                  '{"event":"command","func":"playVideo","args":""}',
                  '*'
                );
                $(playerElem).show();
                activeSlide.find('.img').addClass(defParams.isHide);
              }, 1000);
            }
          });
        }
      },
      activeNavScroll: function (top) {
        var _this = this;
        this.section.each(function (index) {
          var offsetTop = this.offsetTop - 80;
          var heightElem = this.offsetHeight;
          var id = $(this).attr('id');
          if (index < 1) {
            _this.gnbItem.children().removeClass(defParams.isActive);
          }
          if (top > offsetTop && top < offsetTop + heightElem) {
            _this.gnbItem.children().removeClass(defParams.isActive);
            $(`a[href='#${id}']`).addClass(defParams.isActive);
          }
        });
      },
      languageActive: function (list, item, e) {
        var target = $(e.currentTarget);
        this.navActive(list, item, target);
      },
      aboutNavActive: function (list, item, e) {
        var target = $(e.currentTarget);
        var panel = defParams.aboutItem;
        this.navActive(list, item, target, panel);
      },
      careerNavActive: function (list, item, e) {
        var target = $(e.currentTarget);
        var panel = defParams.careerPanel;
        this.navActive(list, item, target, panel);
      },
      toggleMenu: function (e) {
        var target = $(e.currentTarget);
        target.parent().toggleClass(defParams.isOpenMenu);
      },
      popupOffice: function (e) {
        var target = $(e.currentTarget);
        var numImgOffice = this.officeBoxImg.length;
        for (var i = 0; i < numImgOffice; i++) {
          $('.office-popup')
            .find('.swiper-wrapper')
            .append(
              $(
                '<div class="swiper-slide"><img class="img" src="./../img/images/img_office' +
                (i + 1) +
                '.png" alt=""></div>'
              )
            );
        }
        var popupOffice = new Swiper('.js-office-popup', {
          observer: true,
          observeParents: true,
          initialSlide: target.data().index - 1,
          loop: true,
          spaceBetween: 10,
          navigation: {
            nextEl: '.office-btn__next',
            prevEl: '.office-btn__prev',
          },
          effect: 'slide',
          breakpoints: {
            1024: {
              effect: 'fade',
            },
          },
        });
        $('.office-popup').css('display', 'flex');
        $('html').css('overflow', 'hidden');
        $('.popup__exit, .popup__bg').click(() => {
          $('.office-popup').css('display', 'none');
          $('html').css('overflowY', 'scroll');
          $('.office-popup').find('.swiper-wrapper').empty();
        });
      },
      popupNews: function (e) {
        var target = $(e.currentTarget);
        var src = target.find('.img').attr('src');
        var tagImg = $('<img class="img" alt="">').attr('src', src);
        $('.news-popup__img').append(tagImg);
        $('.news-popup__date').html(target.find('.news-item__date').html());
        $('.news-popup__title').html(target.find('.news-item__title').html());

        $('html').css('overflow', 'hidden');
        $('.news-popup').css('display', 'flex');
        $('.popup__exit, .popup__bg').click(() => {
          $('.news-popup').css('display', 'none');
          $('html').css('overflowY', 'scroll');
          $('.news-popup__img').empty();
        });
      },
    };
  })();

  SWIPER.common.init();
  EVENTS.common.init();

  $('html').on('mousewheel', function () {
    console.log(111);
    var top = window.scrollY;
    if (top < $('#about')[0].offsetTop) {
      window.scrollTo({
        top: $('#about')[0].offsetTop,
        behavior: 'smooth',
      });
      window.location.href = '#about';
    }
  });
})(window, window.jQuery);
