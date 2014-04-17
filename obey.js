function callCommands(commandarray, environment){
    while (environment.codePtr < commandarray.length){
        var ret ;
        ret=handleCall(commandarray[environment.codePtr], environment);
        if (commandarray[environment.codePtr++].handlesExec) break;
    }
}

function handleCall(obj, environment){
    if (obj != undefined) {
        var paramArray,ret;
        paramArray=[];
        for(p in obj.params){
            if (obj.params[p] && obj.params.hasOwnProperty(p)) 
                paramArray.push(handleCall(obj.params[p]));
        }
        try{
        ret=obj.call.run.apply(environment, paramArray);
        }catch(e){
            console.log(obj);
            throw(e);
        }
        return ret;
    }

}

