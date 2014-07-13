(function(){
    var app = angular.module('uc',[]);   
    
    
    app.controller('ElementsController',function(){
	
    this.lengthelements = lengths;
    
    });  
    
    var lengths =
    [
      {name: 'meter', tometer: 1},
      {name: 'yard', tometer: 0.9144},
      {name: 'centimeter', tometer: 0.01},	
      {name: 'inch', tometer: 0.0254},
      {name: 'kilometer', tometer: 100000},
      {name: 'mile', tometer: 1609.344},
      {name: 'millimeter', tometer: 0.001}
    ];

    
})();
