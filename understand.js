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


        knowledge={
            skipwords:['' , ';' , ',' , '[' , ']' , '(' , ')' , '{' , '}' ],

        }

        function parseCode(codestr, knowledge){
            var codearray={data:codestr.split(/\s+/),index:0};
            var commandarray=[]; 
            codearray.data = codearray.data.filter(function (s){return knowledge.skipwords.indexOf(s)!=-1});
            while(codearray.data.length){
                if (indexOf(codearray.data[i])){

                };
            }
                
        }
