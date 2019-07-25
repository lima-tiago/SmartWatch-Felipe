var linkElementToAppendCSS = document.createElement('link');
linkElementToAppendCSS.href = 'https://installments-plugin.herokuapp.com/theme-assets/brooklyn/style.css';
linkElementToAppendCSS.type = 'text/css';
linkElementToAppendCSS.rel = 'stylesheet';
linkElementToAppendCSS.media = 'screen,print';
document.getElementsByTagName('head')[0].appendChild(linkElementToAppendCSS);

var writeInstallments = function(){
  var shop_installments = 5;
  var installmentsText = "<span class='price installments-plugin-snippet' style='display: none'><br />ou por 5x de &dividedPrice& sem juros</span>";
  var regexpToGetProductPrice = /\d*\.?\d+,?\d*/;

  // Gotta rename this function now that we are accepting more currencies
  function convertFloatToBrazilianPriceFormat(productPrice) {
    var productPriceInBRL;
    var currencySymbol;
    var mapObj = {
       ".":","
    };

    productPriceInBRL = productPrice.replace(/,|\./gi, function(matched){
      return mapObj[matched];
    });

    currencySymbol = (window.ShopifyAnalytics.meta.currency === 'BRL' ? 'R$ ' : '$ ')

    return currencySymbol + productPriceInBRL;
  }

  function convertPriceToUsFormat(productPrice) {
    var mapObj = {
       ".":"",
       ",":"."
    };

    productPrice = productPrice.replace(/,|\./gi, function(matched){
      return mapObj[matched];
    });

    return parseFloat(productPrice)
  }

  function isGreaterThanZero(regexpMatch) {
    return regexpMatch !== null && regexpMatch[0] !== '0,00' && regexpMatch[0] !== '0.00' && regexpMatch[0] !== '0'
  }

  function currencyUsesCommaAsCentsDivision() {
    return (window.ShopifyAnalytics.meta.currency === 'BRL') || (window.ShopifyAnalytics.meta.currency === 'ARS')
  }

  function installmentsHtml(productPrice) {
    var productPriceAsFloat = (currencyUsesCommaAsCentsDivision() ? convertPriceToUsFormat(productPrice) : productPrice)
    var dividedPrice = (productPriceAsFloat / shop_installments).toFixed(2);

    return installmentsText.replace('&dividedPrice&', convertFloatToBrazilianPriceFormat(dividedPrice));
  }

  function textOutsideTags($element) {
    return $element.clone()
      .children()
      .remove()
      .end()
      .text();
  }

  // Home (featured collection) && Collection page && Search results
if ($('.grid-product').length) {
  $('.grid-product .grid-product__price').each(function() {
    $this = $(this);

    $salePrice = $this.find('.on-sale__price');
    if ($salePrice.length) {
      var regexpMatch = $salePrice.text().match(regexpToGetProductPrice);
      if (isGreaterThanZero(regexpMatch)) {
        var productPrice = regexpMatch[0];
        $salePrice.parent().parent().append(installmentsHtml(productPrice));
      }
    } else {
      var regexpMatch = $this.text().match(regexpToGetProductPrice);
      if (isGreaterThanZero(regexpMatch)) {
        var productPrice = regexpMatch[0];
        $this.parent().append(installmentsHtml(productPrice));
      }
    }
  });
}

// Product page
function addInstallmentsPriceToProductPage() {
  var $productPrice = $('.product-single .product-single__price');
  $productPrice.each(function() {
    var regexpMatch = $(this).text().match(regexpToGetProductPrice);

    if (isGreaterThanZero(regexpMatch)) {
      var productPrice = regexpMatch[0];
      $(this).after(installmentsHtml(productPrice));
    }
  });
}

if ($('#ProductPrice').length) {
  addInstallmentsPriceToProductPage()

  $('.product-single .product-single__meta--wrapper').on('DOMSubtreeModified', '.product-single__price', function(){
    $('.product-single .product-single__meta--wrapper').find('.installments-plugin-snippet').remove();
    addInstallmentsPriceToProductPage();
  });
}

// Limespot Recommendation Plugin
if ($('.limespot-recommendation-box').length) {
  $('.limespot-recommendation-box-item .ls-price.money').each(function() {
    var regexpMatch = $(this).text().match(regexpToGetProductPrice);

    if (isGreaterThanZero(regexpMatch)) {
      var productPrice = regexpMatch[0];
      $(this).parent().append(installmentsHtml(productPrice));
    }
  });
}

};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  writeInstallments();
} else {
  document.addEventListener("onreadystatechange", writeInstallments);
}
