(function(){
    var app = angular.module('uc',[]);   
    
    var lengths =
    [
      {name: 'millimeters', conv: 0.001},
      {name: 'centimeters', conv: 0.01},	
      {name: 'inches', conv: 0.0254},
      {name: 'feet' , conv: 0.3048},
      {name: 'meters', conv: 1},
      {name: 'yards', conv: 0.9144},
      {name: 'kilometers', conv: 1000},
      {name: 'miles', conv: 1609.344}

    ];
    
    var rows =
    [
	[{value: '', from: 0, result: '', to: 0 }],
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
	    this.calcResult(row);
	    
	      
	};
	
	this.changeFrom= function(row,from) {
	    
	    var ind = this.lengthelements.indexOf(from);
	    this.panelrows[this.tab][row].from = ind;
	    this.calcResult(row);
	    
	};
	
	this.changeTo= function(row,to) {
	    
	    var ind = this.lengthelements.indexOf(to);
	    this.panelrows[this.tab][row].to = ind;
	    this.calcResult(row);
	    
	};
	
	this.calcResult= function(row) {
	    
	    value = this.panelrows[this.tab][row].value;
	    from_index = this.panelrows[this.tab][row].from;
	    to_index = this.panelrows[this.tab][row].to;
	    conv_from = this.lengthelements[from_index].conv;
	    conv_to = this.lengthelements[to_index].conv;
	    
	    this.panelrows[this.tab][row].result = (value/conv_to)*conv_from;
	};
	
	
	
    });
    
    

    
})();
