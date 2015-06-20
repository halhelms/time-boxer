isEmpty = function(obj) {
  if ( (obj === null) || (obj === undefined) || (typeof obj !== 'object') ) {
    return true;
  }
  return Object.keys(obj).length === 0;
}

window.appRoot = '/Users/halhelms/bom-exploder/';

Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}


Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

 who = function() {
  console.log('%c⭐️ ' + this.__proto__.constructor.displayName + ' @ ' + window.web_root + this.__proto__.path, 'color:green');
 }

 clear = function() {
  console.clear();
 }
