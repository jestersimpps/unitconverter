(function(){
    var app = angular.module('uc',[]);   
      
    var rows =
    [
	[{value: '', from: 0, result: '', to: 0 }],
	[{value: '', from: 0, result: '', to: 0 }],	
	[{value: '', from: 0, result: '', to: 0 }],
	[{value: '', from: 0, result: '', to: 0 }],
	[{value: '', from: 0, result: '', to: 0 }],
	[{value: '', from: 0, result: '', to: 0 }],
	[{value: '', from: 0, result: '', to: 0 }]
    ];


    app.controller("PanelController",function(){
	
	this.tab = 0;
	this.panelrows = rows;
	this.panelunits = units;
	
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
	    
	    var ind = this.panelunits[this.tab].indexOf(from);
	    this.panelrows[this.tab][row].from = ind;
	    this.calcResult(row);
	    
	};
	
	this.changeTo= function(row,to) {
	    
	    var ind = this.panelunits[this.tab].indexOf(to);
	    this.panelrows[this.tab][row].to = ind;
	    this.calcResult(row);
	    
	    
	};
	
	this.calcResult= function(row) {
	    
	    value = this.panelrows[this.tab][row].value;
	    from_index = this.panelrows[this.tab][row].from;
	    to_index = this.panelrows[this.tab][row].to;
	    conv_from = this.panelunits[this.tab][from_index].conv;
	    conv_to = this.panelunits[this.tab][to_index].conv;
	    
	    this.panelrows[this.tab][row].result = (value/conv_to)*conv_from;
	};
	
	this.get_from= function(index) {
	    
	    return this.panelunits[this.tab][this.panelrows[this.tab][index].from].name;
	}
	this.get_to= function(index) {
	    
	    return this.panelunits[this.tab][this.panelrows[this.tab][index].to].name;
	}
	
    });
    
    

    
})();
