function pause(environ){
    while (environ){
        environ.paused=true;
        environ=environ.parentEnv;
    }
}

function unpause(environ){
    while (environ){
        environ.paused=false;
        callCommands(environ.commandarray,environ);
        environ=environ.parentEnv;
    }
}

function callCommands(commandarray, environment){
    var ret ;
    while (!environment.paused && environment.codePtr < commandarray.length){
        var command=commandarray[environment.codePtr++];
        ret=handleCall(command, environment);
        if (command.call.needsPause) pause(environment);
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

