function callCommands(commandarray, environment){
    while (environment.codePtr < commandarray.length){
        var ret ;

        console.log('object passed',commandarray[environment.codePtr]);
        ret=handleCall(commandarray[environment.codePtr], environment);
        environment.codePtr++;
        if (commandarray[environment.codePtr].handlesExec) break;
    }
}

function handleCall(obj, environment){
    if (obj) {
        var paramArray,ret;
        paramArray=[];
        for(p in obj.params)
            if (obj.params[p] && obj.params.hasOwnProperty(p)) 
                paramArray.push(handleCall(obj.params[p]));
        ret=obj.call.run.apply(environment, paramArray);
    }

}

