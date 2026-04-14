// すべての処理を HTMLの読み込みが終わってから実行する
document.addEventListener('DOMContentLoaded', function() {

  // --- 1. メニューを閉じる処理 ---
  const menuCheckbox = document.getElementById('menu-toggle');
  const menuLinks = document.querySelectorAll('.nav-list a, .footer-contact-btn');

  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (menuCheckbox) {
        menuCheckbox.checked = false;
      }
    });
  });

  // --- 2. スクロール（パララックス）処理 ---
  const dotLeft = document.getElementById('dot-left');
  const dotRight = document.getElementById('dot-right');

  window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;

    // 左の丸の動き（スマホなら0.1倍、PCなら0.2倍）
    if (dotLeft) {
      const speedLeft = window.innerWidth < 768 ? 0.1 : 0.2;
      dotLeft.style.transform = `translateY(${scrollValue * speedLeft}px)`;
    }

    // 右の丸の動き
    if (dotRight) {
      dotRight.style.transform = `translateY(${scrollValue * 0.6}px)`;
    }
  });

});

// スクロール検知アニメーションの制御
const observeScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // 要素が画面内に入ったら 'is-visible' クラスを付与
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // 一度表示されたら監視を終了する場合（繰り返したい場合は下を消す）
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 10%見えたら実行
  });

  // 監視対象のクラスを指定
  const targets = document.querySelectorAll('.fade-in-up');
  targets.forEach((target) => observer.observe(target));
};

// 実行
document.addEventListener('DOMContentLoaded', observeScrollAnimations);

