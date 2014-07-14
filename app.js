(function(){
    var app = angular.module('uc',[]);   
    
    var lengths =
    [
      {name: 'millimeters', tometer: 0.001},
      {name: 'centimeters', tometer: 0.01},	
      {name: 'inches', tometer: 0.0254},
      {name: 'feet' , tometer: 0.3048},
      {name: 'meters', tometer: 1},
      {name: 'yards', tometer: 0.9144},
      {name: 'kilometers', tometer: 100000},
      {name: 'miles', tometer: 1609.344}

    ];
    
    var rows =
    [
	[0],[0],[0],[0],[0],[0],[0]
    ];
    
    
    app.controller('ElementsController',function(){
	
	this.lengthelements = lengths;
    
    });  
    


    app.controller("PanelController",function(){
	
	this.tab = 0;
	this.panelrows = rows;
	
	
	this.selectTab = function(setTab) { this.tab = setTab; };
	this.isSelected = function(checkTab) { return this.tab === checkTab; };
	this.getRows = function(Tab){ return this.panelrows[this.tab];};
	this.removeRow = function(Row){ this.getRows(this.tab).splice(this.getRows(this.tab).indexOf(Row),1); };
	
	
	this.addrow = function()
	{
	    this.panelrows[this.tab].push(this.panelrows[this.tab].length);  
	};
	
    });
    
    

    
})();
