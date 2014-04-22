
        function getNum(s){
            if (isNaN(s)) 
                return 0;
            else 
                return (parseFloat(s));
        }

        function extractblock_multi(){
              var i, count, params;
              params=this.codearray.data;
              count=this.opts.blockstarted?1:0;

              for (i = this.codearray.index -1; (0 != count) && (i < params.length) ; i++){
                  if (this.opts.blockstart == params[i]) count++; 
                  if (this.opts.blockend == params[i]) count--; 
              }
              if (count!=0){ throw ("NO matching " + this.opts.blockend + ' for '+ this.opts.blockstart + ' at ' + this.codearray.index + ' in ' + this.codearray.data.join(' '))};  
              var extracted;
              extracted=params.slice(this.codearray.index-1,i - 1);
              this.codearray.index=i;
              return extracted;
        }

        function extractblock_single(){
              var params;
              var endrange_i; 
              params=this.codearray.data;
              endrange_i= params.indexOf(this.opts.blockend, this.codearray.index -1);
              if (endrange_i==-1){ throw ("NO matching " + this.opts.blockend + ' for '+ this.opts.blockstart + ' at ' + this.codearray.index + ' in ' + this.codearray.data.join(' '))};  
              var extracted;
              extracted=params.slice(this.codearray.index - 1, endrange_i);
              this.codearray.index=endrange_i+1;
              return extracted;
        }


        function parseCode(codestr, knowledge){
            var codearray;
            codearray={data:codestr.split(/\s+/),index:0};
            return parseCodeArray(codearray, knowledge);
        }
        
        function parseCodeArray(codearray, knowledge){
            
            var commandarray;
            commandarray=[]; 
            codearray.data = codearray.data.filter(function (s){ return (knowledge.skipwords.indexOf(s)==-1) });
            while(codearray.index < codearray.data.length){
                var fname,command ;
                fname= codearray.data[codearray.index++];
                command = getFun(codearray,fname);
                if (command ){
                    commandarray.push(command);
                } else {
                    logIt ('Dont know how to do '+ fname + ' at ' + codearray.index + ' in ' + codearray.data.join(' '));
                    return[];
                }
            }
            return commandarray;
        }


        /* types: 
            angle,
            pixels,
            float(max=Infinity,min=-Infinity),
            
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
                fname=':'+fname;
                if (knowledge.commands.hasOwnProperty(fname)){
                    var fun;
                    var command;
                    fun = knowledge.commands[fname];

                    command={call:fun, params:[]};
                    for (var param in fun.params){
                       command.params.push(parseForEval(codearray, fun.params[param]));
                    }
                    return command;
                } else {
                    return undefined;
                }
        }

        function getFloat(s,min,max){
            var num=0
            if (!isNaN(s)){
                num=parseFloat(s);
            }
   /*       if (!isNaN(min)){
                num=parseFloat(s<min?min:s);
            }
            if (!isNaN(max)){
                num=parseFloat(s>max?max:s);
            } */
            return num;
        }

        function getInt(s,min,max){
            var num=0
            if (!isNaN(s)){
                num=parseInt(s);
            }
   /*         if (!isNaN(min)){
                num=parseInt(s<min?min:s);
            }
            if (!isNaN(max)){
                num=parseInt(s>max?max:s);
            } */
            return num;
        }

        function getVarFloat(s){
            var ret=getFloat(varOrStr.call(this,s)); 
            return ret;
        }

        function getVarInt(s){
            return getInt(varOrStr.call(this,s)); 
        }

//        function varOrStr(){
//            var name=':'+this.s;
//            if (globalEnv.vars.hasOwnProperty(name)){
//                return globalEnv.vars[name]; 
//            } else {
//                return this.s.toString();
//            }
//        }

        function getEnvForFunGet(name,curenv){ 
            var firstenv=curenv;
            while(curenv!=null){
                if ( curenv.functions.hasOwnProperty(name) )
                    return curenv;
                curenv=curenv.parentEnv;
            }
            return undefined;
        }

        function getEnvForVarGet(name,curenv){ 
            while(curenv!=null){
                if ( curenv.vars.hasOwnProperty(name) )
                    return curenv;
                curenv=curenv.parentEnv;
            }
            return undefined;
        }

        function getEnvForListSet(name,curenv){ 
            var firstenv=curenv;
            while(curenv!=null){
                if ( curenv.list.hasOwnProperty(name) )
                    return curenv;
                curenv=curenv.parentEnv;
            }
            return firstenv;
        }

        function getEnvForListGet(name,curenv){ 
            var firstenv=curenv;
            while(curenv!=null){
                if ( curenv.list.hasOwnProperty(name) )
                    return curenv;
                curenv=curenv.parentEnv;
            }
            return undefined;
        }

        function getEnvForVarSet(name,curenv){ 
            var firstenv=curenv;
            while(curenv!=null){
                if ( curenv.vars.hasOwnProperty(name) )
                {
                    return curenv;
                    }
                curenv=curenv.parentEnv;
            }
            return firstenv;
        }

        function varOrStr(s){
            var name=':'+s;
            var curenv=this;
            while(curenv!=null){
                if ( curenv.vars.hasOwnProperty(name) )
                    return curenv.vars[name];
                curenv=curenv.parentEnv;
            }
            return s.toString();
        }
        function getVarList(s){
            var name=':' + s;
            if (globalEnv.lists.hasOwnProperty(name)){
                return environment.lists[name]; 
            } else {
                return [];
            }
        }
        

        function getNextS(codearray){
            return(codearray.data[codearray.index++]);
        }


        function asis(obj){
                return ({
                    call:{run:function(){return (obj)}},
                    params:[],
                    });
        }
        
        function parseForEval(codearray, param){
             var s = getNextS(codearray);
             switch(param.type) {
                case 'varname':
                case 'stringasis': 
                    return asis(s);
                    break;
                case 'color':
                case 'any': 
                case 'string':
                    var f = getFun(codearray, s);
                    if (f) {
                        return (f);
                    } else {
                        return ({call:{run:varOrStr}, params:[ asis(s) ]});
                    }
                    break;
                case 'milliseconds':
                case 'integer':
                    if (isNaN(s)){
                        var f = getFun(codearray, s);
                        if (f) {
                            return (f);
                        } else  {
                            return ({call:{run:getVarInt},params:[asis(s)]}); 
                        }
                    } else {
                        return (asis(getInt(s)));
                    }
                    break;
                case 'angle':
                case 'pixels':
                case 'float':
                    if (isNaN(s)){
                        var f = getFun(codearray, s);
                        if (f) {
                            return (f);
                        } else  {
                            return ({call:{run:getVarFloat} ,params:[asis(s)] }); 
                        }
                    } else {
                        return (asis(getFloat(s)));
                    }
                    break;
                case 'list':
                    return ({call:{run:getVarList}, params:[asis(s)]});
                    break;
                case 'block':
                    return (asis(extractblock_single.bind({codearray:codearray,opts:param.parseropts})()));
                    break;
                case 'codeblock':
                    return (asis(parseCodeArray({data:extractblock_multi.bind({codearray:codearray,opts:param.parseropts})(),index:0  },knowledge)));
                    break;
                default:
                    throw('Internal Error:Unknown type '+ param.type + ' Please file a bug report');

              }

        }
