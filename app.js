(function(){
    var app = angular.module('uc',[]);   
      
    var rows =
    [
	[{label:'', value: '', from: 0, result: '', to: 0 }],
	[{label:'', value: '', from: 0, result: '', to: 0 }],
	[{label:'', value: '', from: 0, result: '', to: 0 }],
	[{label:'', value: '', from: 0, result: '', to: 0 }],
	[{label:'', value: '', from: 0, result: '', to: 0 }],
	[{label:'', value: '', from: 0, result: '', to: 0 }],
	[{label:'', value: '', from: 0, result: '', to: 0 }]
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
	this.changeLabel= function(row,label) {
	    
	    this.panelrows[this.tab][row].label = label;	      
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
	}	
	this.calcResult= function(row) {
	    
	    value = this.panelrows[this.tab][row].value;
	    from_index = this.panelrows[this.tab][row].from;
	    to_index = this.panelrows[this.tab][row].to;
	    conv_from = this.panelunits[this.tab][from_index].conv;
	    conv_to = this.panelunits[this.tab][to_index].conv;
	    
	    this.panelrows[this.tab][row].result = this.round(((value/conv_to)*conv_from),6);
	};	
	this.get_from= function(index) {
	    
	    return this.panelunits[this.tab][index];
	
	}
	this.get_to= function(index) {
	    
	    return this.panelunits[this.tab][index];
	
	}
	this.empty=function(value){
	    
	    if (value =='') {return true;}
	    else {return false;}
	    
	}
	this.exportData = function () {
	    
	    var blob = new Blob([document.getElementById('exportable').innerHTML], {
		type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
	    });
	    saveAs(blob, "Overview.xls");
	    
	};
	this.round = function (number, decimals) {
	    
	    var newnumber = new Number(number+'').toFixed(parseInt(decimals));
	    return parseFloat(newnumber);
	    
	}
    });
    

    

    
})();

$(function() {
    $('.form-control').tooltip();
});

