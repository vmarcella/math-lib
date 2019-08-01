!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";Number.GOLDENRATIO=(1+Math.sqrt(5))/2,Number.prototype.round=function(){return Math.round(this)},Number.prototype.floor=function(){return Math.floor(this)},Number.prototype.ceil=function(){return Math.ceil(this)},Number.prototype.pad=function(t,e){const r=String(this).split(".");if(r.length>1){let n=r[0];const o=n.length;let i=r[1];const u=i.length;if(o<t){n="0".repeat(t-o)+n}if(u<e){i+="0".repeat(e-u)}return`${n}.${i}`}const n=r[0],o=t-n.length;return"0".repeat(o)+n},Number.prototype.degToRad=function(){return this*(Math.PI/180)},Number.prototype.radToDeg=function(){return this/(Math.PI/180)},Number.prototype.toDollars=function(){const t=String(this).split(".");return 1===t.length?`$${t[0]}.00`:"0"===t[0]?`¢0.${t[1]}`:`$${t[0]}.${t[1]}`},Number.prototype.tax=function(t){if(0===t)return 0;if(t>=0&&t<=100)return this*(t/100);throw new Error("The tax rate needs to be within 0 and 1! or 0 and 100!")},Number.prototype.withTax=function(t){return this+this.tax(t)},Number.prototype.interest=function(t,e,r=2){if(t<0)throw new Error("You cannot enter a interest rate lower than 0%!");if(e<0)throw new Error("You cannot go back in time! Enter a year greater than 0!");return(this*(1+t/100*e)).toFixed(r)},Number.prototype.mortage=function(t,e){if(e<0)throw new Error("You cannot have a negative amount of years to make payments!");if(t<=0)throw new Error("You cannot have a negative or 0 interest rate!");const r=t/100/12,n=12*e;return this*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1)},Number.prototype.decimalToHex=function(){let t=this;return t<0&&(t+=4294967296),`0x${t.toString(16).toUpperCase()}`}});
