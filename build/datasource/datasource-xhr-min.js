YUI.add("datasource-xhr",function(B){var A=function(){A.superclass.constructor.apply(this,arguments);};B.mix(A,{NAME:"DataSource.XHR",ATTRS:{io:{value:B.io,useRef:true}}});B.extend(A,B.DataSource.Local,{initializer:function(C){this._queue={interval:null,conn:null,requests:[]};},_queue:null,_defRequestFn:function(E){var D=this.get("source"),C={on:{success:function(H,F,G){this.fire("data",B.mix({data:F},G));},failure:function(H,F,G){G.error=new Error(this.toString()+" Data failure");this.fire("error",B.mix({data:F},G));this.fire("data",B.mix({data:F},G));}},context:this,arguments:E};this.get("io")(D,C);return E.tId;}});B.DataSource.XHR=A;},"@VERSION@",{requires:["datasource-base","io"]});