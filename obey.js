function callCommands(commandarray, environment){
        
    while (environment.codePtr<commandarray.length){
       var ret = handleCall(commandarray[codePtr], environment);
       environment.codePtr++;
       if (commandarray[codePtr].handlesExec) break;
    }
}

function handleCall(o, environment){
    var paramArray=[];
    for(p in o.params)
        paramArray.push(handleCall(p));
    return o.call.apply(environment, p);
}

