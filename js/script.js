$(document).ready(function () {
  if ($(window).width() >= 950) {
    $('.slider').slick({
      autoplay: true,//自動的に動き出すか。初期値はfalse。
      infinite: true,//スライドをループさせるかどうか。初期値はtrue。
      speed: 1000,//スライドのスピード。初期値は300。
      slidesToShow: 1,//スライドを画面に3枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
      nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
      centerMode: true,//要素を中央ぞろえにする
      variableWidth: true,//幅の違う画像の高さを揃えて表示
      dots: true,//下部ドットナビゲーションの表示
    });
  }
});

function vw(px) {
  // 
  var tmp = px / 640 * $(window).width();
  if (tmp > px) {
    tmp = px;
  }
  return tmp;
}

$('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;//idの上部の距離からHeaderの高さを引いた値を取得
  if ($(window).width() >= 950) {
    pos = pos - 64;
  } else {
    //sp
    pos = pos - vw(98);
  }
  $('body,html').animate({ scrollTop: pos }, 1000); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

