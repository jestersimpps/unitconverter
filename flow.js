var apswt=0; 
var num1=.55; 
var num2=0;
num2=num1.toExponential(5);
if(num2>50){alert('You are using APPLE SAFARI Version 3\nwhich can produce calculation errors.\nPlease download Version 4 or\nuse another browser.') ; apswt=1}

var chc=0;
var ct=0;
var ctX=0;
var ctlimit=0;
var startct=0;
var mnct=0;
var area=0;
var ndiam=0;
var nvel=0;
var nf=0;
var sw=0;
var s=0;
var sdiam=0;
var svel=0;
var sf=0;
var chce=0;
var k=0;
var sv=0;
var xdiam=0;
var xv=0;
var xf=0;
var sigfig=5;
var X = new Array ();
var box = new Array ("z1", "z1a", "z2", "z2a","z3", "z3a","z4", "z4a","z5", "z5a","z6", "z6a","z7", "z7a","z8", "z8a","z9", "z9a", "z10", "z10a","z11", "z11a", "z12", "z12a","z13", "z13a","z14", "z14a","z15", "z15a","z16", "z16a","z17", "z17a","z18", "z18a","z19", "z19a","z20", "z20a","z21", "z21a","z22", "z22a","z23", "z23a","z24", "z24a");

var mn = new Array (
101	,	0.1	,	" Millimeters",
102	,	1.0	,	" Centimeters",
103	,	100.0	,	" Meters",
104	,	2.540	,	" Inches",
105	,	30.48	,	" Feet",
106	,	91.44	,	" Yards",
201	,	1.000	,	" Centimeters Per Second",
202	,	0.016666666666666666	,	" Centimeters Per Minute",
203	,	0.000277777777777777	,	" Centimeters Per Hour",
204	,	30.48	,	" Feet Per Second",
205	,	0.508	,	" Feet Per Minute",
206	,	0.008466666666666666	,	" Feet Per Hour",
207	,	2.540	,	" Inches Per Second",
208	,	0.042333333333333333	,	" Inches Per Minute",
209	,	0.000705555555555555	,	" Inches Per Hour",
210	,	100000.0	,	" Kilometers Per Second",
211	,	1666.666666666666666	,	" Kilometers Per Minute",
212	,	27.77777777777777777	,	" Kilometers Per Hour",
213	,	100.0	,	" Meters Per Second",
214	,	1.666666666666666666	,	" Meters Per Minute",
215	,	0.027777777777777777	,	" Meters Per Hour",
216	,	160934.40	,	" Miles Per Second",
217	,	2682.240	,	" Miles Per Minute",
218	,	44.70400	,	" Miles Per Hour",
219	,	0.100000	,	" Millimeters Per Second",
220	,	0.001666666666666666	,	" Millimeters Per Minute",
221	,	0.000027777777777777	,	" Millimeters Per Hour",
222	,	91.44000	,	" Yards Per Second",
223	,	1.524000	,	" Yards Per Minute",
224	,	0.025400	,	" Yards Per Hour",
301	,	1.000000	,	"  cubic centimeter / second",
302	,	0.016666666666666666	,	"  cubic centimeter / minute",
303	,	0.000277777777777777	,	"  cubic centimeter / hour",
304	,	28316.84659200000000	,	"  cubic foot / second",
305	,	471.9474432000000000	,	"  cubic foot / minute",
306	,	7.865790720	,	"  cubic foot / hour",
307	,	16.3870640	,	"  cubic inch / second",
308	,	0.273117733333333333	,	"  cubic inch / minute",
309	,	0.004551962222222222	,	"  cubic inch / hour",
310	,	0.0010	,	"  cubic millimeter / second",
311	,	0.000016666666666666	,	"  cubic millimeter / minute",
312	,	0.000000277777777777	,	"  cubic millimeter / hour",
313	,	764554.8579840000000	,	"  cubic yard / second",
314	,	12742.58096640000000	,	"  cubic yard / minute",
315	,	212.3763494400000000	,	"  cubic yard / hour",
316	,	1000000.0	,	"  cubic meter / second",
317	,	16666.66666666666666	,	"  cubic meter / minute",
318	,	277.7777777777777777	,	"  cubic meter / hour",
319	,	3785.41160	,	"  gallon (U.S.)/ second",
320	,	63.09019333333333333	,	"  gallon (U.S.)/ minute",
321	,	1.051503222222222222	,	"  gallon (U.S.)/ hour",
322	,	1000.0	,	"  liter / second",
323	,	16.66666666666666666	,	"  liter / minute",
324	,	0.277777777777777777	,	"  liter / hour"
);

function chcefunc(){
ndiam=0; nvel=0; nf=0; ct=0; ctX=0; mnct=0;

if (chc==1){ct=12;while (ct<48){document.outbox[box[ct]].value="";ct=ct+1}


nvel=eval(document.inboxes.velmenu.options[document.inboxes.velmenu.selectedIndex].value);
nvel=nvel-201;nvel=(nvel*3 + 18)+1;
svel = (document.inboxes.vel.value)*(mn[nvel]);

nf=eval(document.inboxes.flowmenu.options[document.inboxes.flowmenu.selectedIndex].value);
nf=nf-300; nf=(nf*3 + 88);
sf = (document.inboxes.flow.value)*(mn[nf]);
s=sf/svel;
s=Math.sqrt(4*s/Math.PI);
};

if (chc==2)
{
ndiam=eval(document.inboxes.diammenu.options[document.inboxes.diammenu.selectedIndex].value);
ndiam=ndiam-101; ndiam=(ndiam*3 + 1);
sdiam = (document.inboxes.diam.value)*(mn[ndiam]);
area=sdiam*sdiam*Math.PI/4;


nf=eval(document.inboxes.flowmenu.options[document.inboxes.flowmenu.selectedIndex].value);
nf=nf-300; nf=(nf*3 + 88);
sf = (document.inboxes.flow.value)*(mn[nf]);
s=sf/area;
};

if (chc==3){
ndiam=eval(document.inboxes.diammenu.options[document.inboxes.diammenu.selectedIndex].value);
ndiam=ndiam-101; ndiam=(ndiam*3 + 1);
sdiam = (document.inboxes.diam.value)*(mn[ndiam]);
area=sdiam*sdiam*Math.PI/4;


nvel=eval(document.inboxes.velmenu.options[document.inboxes.velmenu.selectedIndex].value);
nvel=nvel-201;nvel=(nvel*3 + 18)+1;
svel = (document.inboxes.vel.value)*(mn[nvel]);
s=area*svel;
};

sv=0;
if (chc==1)    {ctstart=0;ctlimit=12};
if (chc==2)    {ctstart=12;ctlimit=60};
if (chc==3)    {ctstart=60;ctlimit=108};
if (sw==0) {alert("You First Must Choose Diameter, Velocity or Flow Rate")};
if (sw==1) {
ct=1;ctX=0;
sigfig=(document.boxrnd.brnd.value-1);
while(ctX<ctlimit)
{X[ctX]=s/mn[ct];
if(apswt==0){if(sigfig>-1){X[ctX]=X[ctX].toExponential(sigfig);}
if (X[ctX]>.001 && X[ctX]<1000){X[ctX]=X[ctX]*1}X[ctX]=" "+X[ctX]};
X[ctX+1]=mn[ct+1];
ct=ct+3;ctX=ctX+2;
}}
ct=0;
while (ct<ctlimit-ctstart){
document.outbox[box[ct]].value=X[ct+ctstart];
ct=ct+1}
n=0;
};