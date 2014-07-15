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
	[{value: 3.14156, from: 4, result: 123456, to: 1 }],
	[{value: 3.14156, from: 0, result: 123456, to: 0 }],
	[{value: 3.14156, from: 0, result: 123456, to: 0 }],
	[{value: 3.14156, from: 0, result: 123456, to: 0 }],
	[{value: 3.14156, from: 0, result: 123456, to: 0 }],
	[{value: 3.14156, from: 0, result: 123456, to: 0 }],
	[{value: 3.14156, from: 0, result: 123456, to: 0 }]	

    ];
    
    



    app.controller("PanelController",function(){
	
	this.tab = 0;
	this.panelrows = rows;
	this.lengthelements = lengths;
	
	this.counter = 0;
	
	this.selectTab = function(setTab) { this.tab = setTab; };
	this.isSelected = function(checkTab) { return this.tab === checkTab; };
	this.getRows = function(Tab){ return this.panelrows[this.tab];};
	this.removeRow = function(index)
	{
	    this.panelrows[this.tab].splice(index,1);
	
	};
	
	
	this.addrow = function()
	{
	    this.panelrows[this.tab].push({value: '', from: 0, result: '', to: 0 });  
	};
	
	this.changeValue= function(row,val) {
	    
	    this.panelrows[this.tab][row].value = val;
	};
	
    });
    
    

    
})();
