function callCommands(commandarray, environment){
    while (environment.codePtr < commandarray.length){
        var ret ;
        var command=commandarray[environment.codePtr++];
        ret=handleCall(command, environment);
        if (command.call.handlesExec) break;
    }
    return ret;
}

function handleCall(obj, environment){
    if (obj != undefined) {
        var paramArray;
/*        paramArray=[];
        for(p in obj.params){
            if (obj.params.hasOwnProperty(p)) 
                paramArray.push(handleCall(obj.params[p]));
            else 
                console.log(p);
        }
*/

        paramArray=Object.keys(obj.params).map(function(x){return handleCall(obj.params[x],environment)});
            ret=obj.call.run.apply(environment, paramArray);
            return ret;
    }
}

