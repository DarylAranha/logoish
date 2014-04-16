        Array.prototype.split=function(seperator){
                                data=this.slice();
                                var i=this.indexOf(seperator);
                                if (i==-1) {return [data]} ; 
                                ret=[]; 
                                while (i != -1){
                                    ret.push(data.slice(0,i));
                                    data.splice(0,i+1);
                                    i=data.indexOf(seperator);
                                } 
                                ret.push(data);
                                return ret 
                              };

        function getNum(s){
            if (isNaN(s)) 
                return 0;
            else 
                return (parseFloat(s));
        }
/*
        function extractblock_multi(params,startstring,endstring){
              var i, count,endrange_i;
              for (i = 0, count=1; (0 != count) && (i < params.length) ; i++){
                  if (startstring == params[i]) count++; 
                  if (endstring == params[i]) count--; 
              }
              if (count!=0){ throw ("NO matching "+endstring)};  
              var extracted=params.slice(0,i - 1);
              params.splice(0,i);
              return extracted;
        }

        function extractblock_single(params,startstring,endstring){
              var endrange_i = params.indexOf(endstring);
              if (endrange_i==-1){ 
                throw ("NO matching "+endstring) 
              }   
              var extracted=params.slice(0,endrange_i);
              params.splice(0,endrange_i+1);
              return extracted;
        }

*/
        function extractblock_multi(){
              var i, count,endrange_i;
              var params=this.codearray.data;

              for (i = this.codearray.index, count=1; (0 != count) && (i < params.length) ; i++){
                  if (this.opts.startstring == params[i]) count++; 
                  if (this.opts.endstring == params[i]) count--; 
              }
              if (count!=0){ throw ("NO matching "+endstring)};  
              var extracted=this.codearray.slice(this.codearray.index,i - 1);
              this.codearray.index=i+1;
              return extracted;
        }

        function extractblock_single(){
              var params=this.codearray.data;
              var endrange_i = params.indexOf(this.opts.endstring, this.codearray.index);
              if (endrange_i==-1){ 
                throw ("NO matching " + endstring + ' at ' + this.codearray.index ); 
              }   
              var extracted=params.slice(this.codearray.index,endrange_i);
              params.splice(this.codearray.index,endrange_i+1);
              return extracted;
        }


        function parseCode(codestr, knowledge){
            var codearray={data:codestr.split(/\s+/),index:0};
            return parseCodeArray(codearray, knowledge);
        }
        function parseCodeArray(codearray, knowledge){
            
            var commandarray=[]; 
            codearray.data = codearray.data.filter(function (s){ return (knowledge.skipwords.indexOf(s)!=-1) });
            while(codearray.index < codearray.data.length){
                var fname = ':' + codearray.data[codearray.data.index++];
                var command = getFun(codearray,fname);
                if (command)
                    commandarray.push(command);
                else
                    throw ('Dont know how to do '+ fname + ' at ' + codearray.index + ' in ' + codestr);
            }
            return commandarray;
        }


        /* types: 
            angle,
            float(max=Infinity,min=-Infinity),
            
            pixels,
            integer(max=Infinity,min=-Infinity),

            list,

            any,
            color,
            string,

            varname, //need not be variable
            stringasis,

            block(blockstart,blockend),
            codeblock(blockstart, blockend)
         */

        function getFun(codearray, fname){
                if (knowledge.commands.indexOf(fname)){
                    var fun=knowledge.commands[fname];
                    var command={call:fun, params:[]};
                    for (var param in knowledge.commands[fname].params){
                       command.params.push(parseForEval(codearray, param));
                    }
                    return command;
                } else {
                    return undefined;
                }
        }

        function getInt(s,min,max){
            var num=0
            if (!IsNaN(s)){
                num=parseFloat(s);
            }
            if (!IsNaN(min)){
                num=parseFloat(s<min?min:s);
            }
            if (!IsNaN(max)){
                num=parseFloat(s>max?max:s);
            }
            return num;
        }

        function getInt(s,min,max){
            var num=0
            if (!IsNaN(s)){
                num=parseInt(s);
            }
            if (!IsNaN(min)){
                num=parseInt(s<min?min:s);
            }
            if (!IsNaN(max)){
                num=parseInt(s>max?max:s);
            }
            return num;
        }

        function getVarFloat(){
            return getFloat(varOrStr(this.s),this.opts.min, this.opts.max); 
        }

        function getVarInt(){
            return getInt(varOrStr(this.s)); 
        }

        function varOrStr(){
            var name=':'+this.s;
            if (globalenv.vars.hasOwnProperty(name)){
                return globalenv.vars[name]; 
            } else {
                return this.s.toString();
            }
        }
        function getList(){
            var name=':' + this.s;
            if (globalenv.lists.hasOwnProperty(name)){
                return environment.lists[name]; 
            } else {
                return [];
            }
        }
        

        function getNextS(codarray){
            return(codearray.data[codearray.index++]);
        }

        function asis(o){
                return ({
                    call:function(){return (o)},
                    params:[],
                    });
        }
        
        function parseForEval(codearray, param){
             var s = getNextS(codearray);
             switch(param.type) {
                case 'varname':
                case 'stringasis': 
                    asis(s);
                    break;
                case 'color':
                case 'any': 
                case 'string':
                    var f = getFun(codearray, s);
                    if (f) {
                        return (f);
                    } else {
                        return ({call:varOrStr.bind({s:s}), params:[]});
                    }
                    break;
                case 'integer':
                    if (IsNaN){
                        var f = getFun(codeArray, s);
                        if (f) {
                            return (f);
                        } else  {
                            return ({call:getVarInt.bind({s:s}),params:[]}); 
                        }
                    } else {
                        return (asis(getInt(s)));
                    }
                    break;
                case 'pixels':
                case 'float':
                    if (IsNaN(s)){
                        var f = getFun(codeArray, s);
                        if (f) {
                            return (f);
                        } else  {
                            return ({call:getVarFloat.bind({s:s,opts:param.parseropts}),params:[]}); 
                        }
                    } else {
                        return (asis(getFloat(s)));
                    }
                    break;
                case 'list':
                    return ({call:getVarList.bind({s:s}), params:{}});
                    break;
                case 'block':
                    return (asis(extractblock.bind({codearray:codearray,opts:params.parseropts})()));
                    break;
                case 'block':
                    return (parseCodeArr(extractblock.bind({codearray:codearray,opts:params.parseropts})()),knowledge);
                    break;

              }

        }
