var injectRem, dp2rem, rem2dp,
noop = function(){},
injected = false;


if(typeof window === 'undefined'){
  injectRem = function(){
    return {
      dp2rem: noop,
      rem2dp: noop
    }
  }
}else{
  injectRem = function(){
    var rem, docEl, dpr, fontEl;

    if(injected){
      return {
        dp2rem: dp2rem,
        rem2dp: rem2dp
      }
    }

    docEl = document.documentElement;
    dpr = window.devicePixelRatio || 1;
    fontEl = document.createElement('style');

    function setUnitA(){
      var docWidth = docEl.clientWidth,
          extraStyle = '}';

      if (!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && docWidth > 1024) {
        docWidth = 640;
        extraStyle = 'max-width:' + docWidth + 'px;margin-right:auto!important;margin-left:auto!important;}';
      }

      rem = docWidth / 10;

      /ZTE U930_TD/.test(navigator.userAgent) && (rem = rem * 1.13);

      /Android\s+4\.4\.4;\s+M351\s/.test(navigator.userAgent) && (rem = rem / 1.05);

      fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}body{' + extraStyle;

      return rem;

    }

    if(!docEl.getAttribute('data-dpr')){
      docEl.setAttribute('data-dpr', dpr);
      docEl.firstElementChild.appendChild(fontEl);

      window.addEventListener('resize', function(){
        setUnitA();
      }, false);
    }

    setUnitA();

    dp2rem = function(v){
      v = parseFloat(v);
      return v / rem;
    };

    rem2dp = function(v){
      v = parseFloat(v);
      return v * rem;
    }

    return {
      dp2rem: dp2rem,
      rem2dp: rem2dp
    }
  }
}

module.exports = injectRem;
