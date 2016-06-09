// var request = require('request'),
//     url = "https://api.indix.com/v2/universal/products?countryCode=US&storeId=126&app_id=0ed6e821&app_key=41d36438088f32e538e71bcc01224d1c&url=";
// var productUrl = ["http://www.rei.com/product/864348/giro-cipher-bike-helmet",
// "http://www.rei.com/product/777757/rei-camp-dome-4-tent",
// "http://www.rei.com/product/795544/the-north-face-mountain-25-tent",
// "http://www.rei.com/product/882212/rei-classic-fleece-jacket-mens-special-buy",
// "https://www.rei.com/product/892451/cannondale-trail-4-275-bike-2016",
// "https://www.rei.com/c/mountain-bike-helmets",
// "http://www.rei.com/product/847649/kelty-cosmic-down-21-sleeping-bag",
// "https://www.rei.com/product/844651/rei-crestrail-70-pack",
// "http://www.rei.com/adventures/trips/europe/cinque-terre-hiking.html",
// "http://www.rei.com/product/834008/rei-salix-insulated-jacket-boys",
// "https://www.rei.com/c/camping-cups",
// "https://www.rei.com/h/paddling",
// "http://www.rei.com/product/754773/eno-doublenest-hammock",
// "https://www.rei.com/product/660163/msr-pocketrocket-backpacking-stove",
// "https://www.rei.com/product/859943/mountainsmith-celestial-2-person-tent",
// "https://www.rei.com/product/799604/hennessy-hammock-scout-classic-hammock",
// "https://www.rei.com/product/777001/trails-illustrated-adirondack-park-lake-placidhigh-peaks-trail-map",
// "https://www.rei.com/product/831078/geigerrig-hydration-engine-reservoir-101-fl-oz",
// "https://www.rei.com/product/833107/kryptonite-new-york-fahgettaboudit-u-lock",
// "https://www.rei.com/product/794120/otterbox-ipod-classic-defender-case",
// "https://www.rei.com/b/under-armour",
// "https://www.rei.com/b/nike",
// "https://www.rei.com/product/827486/columbia-silver-ridge-shirt-mens",
// "http://www.rei.com/adventures/trips/weekend/rock-climbing-carolina.html",
// "https://www.rei.com/c/climbing-shoes",
// "http://www.rei.com/product/718303/black-diamond-camalot-c4-cams",
// "http://www.rei.com/product/831117/black-diamond-half-dome-helmet",
// "https://www.rei.com/product/887911/hoka-one-one-tor-ultra-hi-waterproof-hiking-boots-mens",
// "https://www.rei.com/b/osprey",
// "https://www.rei.com/h/cycling",
// "https://www.rei.com/product/743073/guyot-designs-firefly-bottle-led-lamp",
// "https://www.rei.com/product/857760/clean-bottle-the-square-stainless-steel-water-bottle",
// "https://www.rei.com/product/695379/gerber-infinity-ultra-led-flashlight",
// "https://www.rei.com/b/the-north-face/c/boots",
// "https://www.rei.com/c/lanterns",
// "https://www.rei.com/c/lanterns",
// "https://www.rei.com/product/813517/sol-core-lite-survival-knife",
// "https://www.rei.com/product/783078/rei-multitowel-lite-medium-towel-255-x-155",
// "https://www.rei.com/product/855177/patagonia-nano-puff-jacket-mens",
// "https://www.rei.com/b/cannondale/c/road-bikes",
// "https://www.rei.com/product/712869/sorel-caribou-winter-boots-womens",
// "https://www.rei.com/product/865601/mountain-house-just-in-case-essential-freeze-dried-food-bucket",
// "https://www.rei.com/product/869279/oakley-obsessed-sunglasses-womens",
// "https://www.rei.com/product/866421/platypus-big-zip-lp-reservoir-2-liter",
// "https://www.rei.com/product/887756/the-north-face-prospectus-down-jacket-womens",
// "https://www.rei.com/product/762203/the-north-face-paramount-porter-convertible-pants-womens-petite",
// "https://www.rei.com/product/814102/eno-double-deluxe-hammock",
// "https://www.rei.com/product/884807/fox-rampage-race-full-face-helmet-mens",
// "https://www.rei.com/product/846577/osprey-daylite-daypack",
// "https://www.rei.com/b/kelty/c/tents",
// "https://www.rei.com/product/757243/salomon-speedcross-3-trail-running-shoes-mens",
// "https://www.rei.com/product/490016/thule-gutter-foot-pack-set-of-4",
// "https://www.rei.com/product/859354/asics-gel-kayano-20-road-running-shoes-mens",
// "https://www.rei.com/product/867434/rei-camper-first-aid-kit",
// "http://www.rei.com/product/862474/rei-radiant-sleeping-bag",
// "https://www.rei.com/product/855493/nike-tempo-shorts-womens",
// "https://www.rei.com/product/853573/the-north-face-passpine-shell-jacket-mens",
// "https://www.rei.com/product/865507/nemo-galaxi-2-tent-with-footprint",
// "https://www.rei.com/product/829835/msr-carbon-reflex-2-tent",
// "https://www.rei.com/product/764617/sierra-designs-baku-3-tent",
// "http://www.rei.com/product/852414/danner-mountain-light-ii-gtx-hiking-boots-mens",
// "https://www.rei.com/product/842495/83-sportswear-love-in-paris-bike-jersey-womens",
// "https://www.rei.com/product/779442/mountain-hardwear-taurine-2-tent",
// "http://www.rei.com/product/864812/rei-quarter-dome-t3-tent-special-buy"]

// function fetchAPI(url, productUrl){
//   var requestUrl = url + encodeURIComponent(productUrl);
//   return new Promise(function(resolve, reject){
//     request(requestUrl, function(err, req, res){
//       if(err) reject(err)
//       resolve(res);
//     });
//   });
// }



// productUrl.map(function(newUrl){
//   fetchAPI(url, newUrl).then(function(res, rej){
//     var response = JSON.parse(res);
//     if(response.result.count) {
//       console.log(newUrl +" , " + (url + encodeURIComponent(newUrl)));
//     }
//   });
// });

module.exports = {
  escape: function(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
};