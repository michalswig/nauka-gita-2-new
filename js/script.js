/************* MUSTACHE pętla *****************/
var listItems = '';
var templateItem = document.getElementById('template-product-item').innerHTML;
//Mustache.parse(templateItem);

for(var i = 0; i < carouselData.length; i++){
		//console.log(carouselData[i]);
		listItems += Mustache.render(templateItem, carouselData[i]);
    
	};

//var fullList = Mustache.render(listItems);

results.insertAdjacentHTML('beforeend', listItems);



/************ Karuzela **********/
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true

});