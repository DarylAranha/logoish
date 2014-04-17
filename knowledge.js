
        knowledge={
            skipwords:['' , ';' , ',' , '[' , ']' , '(' , ')' , '{' , '}' ],
            commands:{
            /* trignometric functions */
                ':sin':{run:function(angle) {
                        return (Math.sin(piBy180 * angle));
                    },
                    help:'Trignometric sine function',
                    shorthelp:'Trignometric sine function',
                    params:{
                        angle:{
                            help:'The angle to get sine for. Accepts degrees',
                            type:'angle'
                        }
                    },
                    returns:{
                        help:'The sine of the angle',
                        type:'float'
                    }
                },
                ':cos':{run:function(angle) { 
                        return (Math.cos(piBy180 * angle));
                    },
                    help:'Trignometric cosine function',
                    shorthelp:'Trignometric cosine function',
                    params:{
                        angle:{
                            help:'The angle to get cosine for. Accepts degrees',
                            type:'angle'
                        }
                    },
                    returns:{
                        help:'The cosine of the angle',
                        type:'float'
                    }

                },
                ':tan':{run:function(angle) {
                        return (Math.tan(piBy180 * angle));
                    },
                    help:'Trignometric tangent function',
                    shorthelp:'Trignometric tangent function',
                    params:{
                        angle:{
                            help:'The angle to get tangent for. Accepts degrees',
                            type:'angle'
                        }
                    },
                    returns:{
                        help:'The tangent of the angle',
                        type:'float'
                    }

                },
                ':asin':{run:function(asin) {
                        return (Math.asin(asin *180/Math.PI));
                    },
                    help:'Trignometric arc sine function',
                    shorthelp:'Trignometric arc sine function',
                    params:{
                        sine:{
                            help:'The angle to get arc sine for. Accepts degrees',
                            type:'float'
                        }
                    },

                    returns:{
                        help:'The arc sine of the angle',
                        type:'angle'
                    }

                },
                ':acos':{run:function(acos) {
                        return (Math.acos(acos)* 180/Math.PI );
                    },
                    help:'Trignometric arc cosine function',
                    shorthelp:'Trignometric arc cosine function',
                    params:{
                        cosine:{
                            help:'The angle to get arc cosine for. Accepts degrees',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'The arccosine of the angle',
                        type:'float'
                    }

                },
                ':atan':{run:function(atan) {
                        return (Math.atan(atan)* 180/Math.PI );
                    },
                    help:'Trignometric arctangent function',
                    shorthelp:'Trignometric arctangent function',
                    params:{
                        arctangent:{
                            help:'The angle to get arc tangent for. Accepts degrees',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'The arctangent of the angle',
                        type:'angle'
                    }

                },
                ':pickfrom':{run:function(listname) {

                        var thelist=lists[':'+listname];
                        return thelist.daata[thelist.index++%thelist.daata.length];
                    },
                    help:'Picks an item from a predefined list. Wraps around after the last item',
                    shorthelp:'Picks an item from a predefied list',
                    params:{
                        name:{
                            help:'The list formerly defined using "setlist" command',
                            type:'list'
                        }
                    },
                    returns:{
                        help:'the next item in the list',
                        type:'any'
                    }

                },

                /* simple arithmetic */
                ':add':{run:function(num1,num2) {
                        return (num1+num2);
                    },
                    help:'Adds two numbers',
                    shorthelp:'Adds two number',
                    params:{
                        num1:{
                            help:'(augend) first number',
                            type:'float'
                        },
                        num2:{
                            help:'(addend) second number',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'the sum of the two numbers',
                        type:'float'
                    }


                },
                ':sub':{run:function(num1,num2) {
                        return (num1-num2);
                    },
                    help:'Adds two numbers',
                    shorthelp:'Adds two number',
                    params:{
                        num1:{
                            help:'(subtrahend) first number',
                            type:'float'
                        },
                        num2:{
                            help:'(minuend) second number',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'the different of the two numbers',
                        type:'float'
                    }

                },
                ':mul':{run:function(num1,num2) {
                        return (num1*num2);
                    },
                    help:'Adds two numbers',
                    shorthelp:'Adds two number',
                    params:{
                        num1:{
                            help:'(multiplicand) first number',
                            type:'float'
                        },
                        num2:{
                            help:'(multiplier) second number',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'the product of the two numbers',
                        type:'float'
                    }

                },
                ':div':{run:function(num1,num2) {
                        return (num1/num2);
                    },
                    help:'Adds two numbers',
                    shorthelp:'Adds two number',
                    params:{
                        num1:{
                            help:'(dividend) first number',
                            type:'float'
                        },
                        num2:{
                            help:'(divisor) second number',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'the quotient of the two numbers',
                        type:'float'
                    }

                },
                ':mod':{run:function(num1,num2) {
                        return (num1%num2);
                    },
                    help:'Adds two numbers',
                    shorthelp:'Adds two number',
                    params:{
                        num1:{
                            help:'(dividend) first number',
                            type:'float'
                        },
                        num2:{
                            help:'(divisor) second number',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'the remainder (mudolus) after the division',
                        type:'float'
                    }

                },

                /* color functions */
                ':rgb':{run:function(red, green, blue) {
                        return ('rgb('+ red + ',' + green + ','+ blue  + ')');
                    },
                    help:'Returns a css representation of the color formed from red green and blue specified, mostly usefull with the "color" command. Usefull for generating the representation from values derived computationaly',
                    shorthelp:'css representation of the color from red, green and blue values',
                    params:{
                        red:{
                            help:'The red component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        green:{
                            help:'The green component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        blue:{
                            help:'The blue component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                    },
                    returns:{
                        help:'the css representation',
                        type:'color'
                    }

                },
                ':rgba':{run:function(red, gree, blue, alpha) {
                        return ('rgb('+ red + ',' + green  + ',' + blue + ','+ alpha + ')');
                    },
                    help:'Returns a css representation of the color formed from red, green, blue and alpha values, mostly usefull with the "color" command. Usefull for generating the representation from values derived computationaly',
                    shorthelp:'css representation of the color from red, green, blue and alpha values',
                    params:{
                        red:{
                            help:'The red component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        green:{
                            help:'The green component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        blue:{
                            help:'The blue component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        alpha:{
                            help:'The alpha component of the color',
                            type:'float',
                            parseropts:{min:0,max:1}
                        }
                    },
                    returns:{
                        help:'the css representation',
                        type:'color'
                    }
                },
                ':hsl':{run:function(hue,saturation, luminosity) {
                        return ('hsl('+ hue + ',' + saturation + ','+ luminosity + ')');
                    },
                    help:'Returns a css representation of the color formed from hue, saturation and luminosity values, mostly usefull with the "color" command. Usefull for generating the representation from values derived computationaly',
                    shorthelp:'css representation of the color from hue, saturation and luminosity values',
                    params:{
                        hue:{
                            help:'The hue component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        saturation:{
                            help:'The saturation component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        luminosity:{
                            help:'The luminosity component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        }
                    },
                    returns:{
                        help:'the css representation',
                        type:'color'
                    }

                },
                ':hsla':{run:function(hue, saturation, luminosity, alpha) {
                        return ('hsla('+ hue  + ',' + saturation + ',' + luminosity + ',' + alpha + ')');
                    },
                    help:'Returns a css representation of the color formed from hue, saturation and luminosity values, mostly usefull with the "color" command. Usefull for generating the representation from values derived computationaly',
                    shorthelp:'css representation of the color from hue, saturation and luminosity values',
                    params:{
                        hue:{
                            help:'The hue component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        saturation:{
                            help:'The saturation component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        luminosity:{
                            help:'The luminosity component of the color',
                            type:'integer',
                            parseropts:{min:0,max:255}
                        },
                        alpha:{
                            help:'The alpha component of the color',
                            type:'float',
                            parseropts:{min:0,max:1}
                        },
                    },
                    returns:{
                        help:'the css representation',
                        type:'string'
                    }


                },

                /* play with number and their formats */
                ':rnd':{run:function() {
                        return (Math.random());
                    },
                    help:'returns a random number between 0 and 1',
                    shorthelp:'returns a random number between 0 and 1',
                    returns:{
                        help:'the random number',
                        type:'float'
                    }
                },
                ':abs':{run:Math.abs,
                    help:'Adds two numbers',
                    shorthelp:'Adds two number',
                    params:{
                        num1:{
                            help:'first number',
                            type:'float'
                        },
                        num2:{
                            help:'second number',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'the sum of the two numbers',
                        type:'float'
                    }

                },
                ':ceil':{run:Math.ceil,
                    help:'returns the ceiling of the given float. (Integer next to the float, unless itself an integer)',
                    shorthelp:'returns the ceiling of the given float',
                    params:{
                        float:{
                            help:'a floating point number',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'the ceil of the number',
                        type:'integer'
                    }

                },
                ':floor':{run: Math.floor,
                    help:'returns the floor of the given float. (Integer previous to the float, unless itself an integer)',
                    shorthelp:'returns the floor of the given float',
                    params:{
                        float:{
                            help:'a floating point number',
                            type:'float',
                        }
                    },
                    returns:{
                        help:'the floor of the number',
                        type:'integer'
                    }

                },
                ':round':{run: Math.round,
                    help:'returns the rounded integer of the given float. (Integer nearest to the float)',
                    shorthelp:'returns the round integer of the given float',
                    params:{
                        float:{
                            help:'a floating point number',
                            type:'float'
                        }
                    },
                    returns:{
                        help:'the floor of the number',
                        type:'integer'
                    }
                },

                /* pen functions */
                ':curX':{run:function() {
                        return (pen.x);
                    },
                    help: 'returns the current x coordinate of the pen',
                    shorthelp: 'returns the current x coordinate of the pen',
                    params:{},
                    returns:{
                        help:'the current x coordinate of the pen',
                        type: 'float',
                    }
                },
                ':curY':{run:function() {
                        return (pen.y);
                    },
                    help: 'returns the current y coordinate of the pen',
                    shorthelp: 'returns the current y coordinate of the pen',
                    params:{},
                    returns:{
                        help:'the current y coordinate of the pen',
                        type: 'float',
                    }

                },
                ':curColor':{run:function() {
                        return (pen.y);
                    },
                    help: 'returns the current color of the pen',
                    shorthelp: 'returns the current color of the pen',
                    params:{},
                    returns:{
                        help:'the current x coordinate of the pen',
                        type: 'color',
                    }

                },
                ':curWidth':{run:function() {
                        return (pen.width);
                    },
                    help: 'returns the current width of the pen',
                    shorthelp: 'returns the current width of the pen',
                    params:{},
                    returns:{
                        help:'the current width of the pen',
                        type: 'float',
                    }

                },
                ':curAngle':{run:function() {
                        return (pen.angle);
                    },
                    help: 'returns the current angle of the pen',
                    shorthelp: 'returns the current angle of the pen',
                    params:{},
                    returns:{
                        help:'the current angle of the pen',
                        type: 'float',
                    }
                },
                /* commands */
                      ':pendown':{run: function(){
                                        pen.down=true;
                                      },
                                'help':'Make the pen touch the paper. The commands "fwd" and "back" will henceforth make the items draw.',
                                'shorthelp':'Make the pen touch the paper.',
                                'params':{}
                                },
                      ':penup':{run: function(){
                                        pen.down=false;
                                      },
                                'help':'Make the pen not touch the paper. The commands "fwd" and "back" will henceforth only make the pen move.',
                                'shorthelp':'Make the pen not touch the paper.',
                                'params':{}
                                },
                      ':angle':{run: function(angle) {
                                        pen.angle=angle%360;
                                    },
                                'help':'Sets the angle in which to move the pen',
                                'shorthelp':'Sets the angle in which to move the pen',
                                'params':{
                                    'angle':{help: 'The angle in degrees ',type:'angle'},
                                 }
                           },
                      ':width':{run: function(width) {
                                        pen.width=width;
                                    },
                                'help':'Sets the linewidth of the pen',
                                'shorthelp':'Sets the linewidth of the pen',
                                'params':{
                                    'width':{help: 'width in pixels',type:'pixels'},
                                 }
                           },
                      ':right':{run: function(angle) {
                                    pen.angle+=angle;
                                    pen.angle%=360;
                                },
                                'help':'Offsets the angle to the right in which to move the pen',
                                'shorthelp':'Offsets the angle to the right in which to move the pen',
                                'params':{
                                    'angle':{help: 'The angle in degrees ',type:'angle'}
                                 }

                       },
                       ':left':{run: function(angle) {
                                    pen.angle-=angle;
                                    pen.angle%=360;
                                },
                                'help':'Offsets the angle to the left in which to move the pen',
                                'shorthelp':'Offsets the angle to the left in which to move the pen',
                                'params':{'angle': {help:'The angle in degrees',type:'angle'}}
                        },
                        ':fwd':{run: function(distance) {
                                   if (pen.down){
                                       cx.beginPath();
                                       cx.moveTo(getNum(pen.x), getNum(pen.y));
                                       cx.strokeStyle = pen.color;
                                       cx.lineWidth = pen.width;
                                       pen.x = getNum(pen.x) + getNum(Math.cos(pen.angle*piBy180) * distance);
                                       pen.y = getNum(pen.y) + getNum(Math.sin(pen.angle*piBy180) * distance);
                                       cx.lineTo(getNum(pen.x), getNum(pen.y));
                                       cx.closePath();
                                       cx.stroke();
                                   } else {
                                       pen.x = getNum(pen.x) + getNum(Math.cos(pen.angle*piBy180) * distance);
                                       pen.y = getNum(pen.y) + getNum(Math.sin(pen.angle*piBy180) * distance);
                                       cx.moveTo(pen.x, pen.y);
                                   }
                               },
                                'shorthelp':'Moves the pen forward by n pixels',
                                'help':'Moves the pen forward n pixels in the angle of the pen',
                                'params':{'distance':{help: 'The distance in pixel by which to move the pen from its current position',type:'pixels'}}
                        },
                        ':back':{run: function(distance){commands[':fwd'].run(-distance)},
                                'shorthelp':'Moves the pen backward by n pixels',
                                'help':'Moves the pen backward n pixels in the angle of the pen from its currnet position',
                                'params':{
                                    'distance': {
                                        help: 'The distance in pixel by which to move the pen from its current position',
                                        type:'pixels'
                                     }
                                 }
                               },
                        ':goto':{run: function(distanceX,distanceY) {
                                     pen.x = distanceX;
                                     pen.y = distanceY;
                                     cx.moveTo(pen.x,pen.y);
                                 },
                                'shorthelp':'Moves the pen to the given posisiton without drawing anything',
                                'help':'Moves the pen to the given position without drawing anything',
                                'params':{'distanceX': {help:'X part of the co ordinate',type:'pixels'},
                                          'distanceY': {help:'Y part of the co ordinate',type:'pixels'}
                                         }

                        },
                        ':info':{run: function() {
                                     logIt('<b>Pen:</b> '+JSON.stringify(pen));
                                     logIt('<b>Variables:</b>'+JSON.stringify(vars));
                                     logIt('<b>:</b>'+JSON.stringify(lists));
                                     saveLast=false;
                                },
                                'shorthelp':'Prints different properties of the pen and environment',
                                'help':'Prints different properties of the pen such as angle, current position, color. Also lists the variables and lists',
                                'params':{}

                        },
                        ':color':{run: function(color) {
                                    pen.color = color;
                                },
                                'help':'Sets the ink color of the pen',
                                'shorthelp':'Sets the ink color of the pen',
                                'params':{ 
                                    'color': {
                                        help: 'the color name to set the color of the ink to. It can be any color that is accepted by css as color. Generally includes many common colors.',
                                        type:'color'
                                        }
                                     }

                        },
                        ':clear':{run: function() {
                                var oldFillStyle=cx.fillStyle;
                                cx.fillStyle='white';
                                cx.fillRect(0,0,c.width,c.height);
                                cx.fillStyle=oldFillStyle;
                            },
                                'help':'clears the screen',
                                'shorthelp':'clears the screen',
                                'params':{}

                        },
                        ':rpt': {run: function(times,commands) {
                                    var rptEnv ;
                                    rptEnv= newEnvironment(commands);
                                    rptEnv.parentEnv = this;
                                    for (var i = 0; i < times; i++){
                                        rptEnv.codePtr = 0;
                                        callCommands(commands, rptEnv);
                                    }
                                },
                                'help':'Repeat the set of commands following, bounded by endrpt',
                                'shorthelp':'Repeat the set of commands following, bounded by endrpt',
                                'params':{
                                    times:{
                                        help:'The number of times to repeat the steps',
                                        type:'integer'
                                    },
                                    commands:{
                                        help:'the set of instructions to repeat',
                                        type:'codeblock',
                                        parseropts:{
                                           blockstart:'rpt',
                                           blockend:'endrpt',
                                           blockstarted:true
                                        }
                                    }
                                 }

                        },
                        ':save':{run: function(name){
                                        var currentlist=JSON.parse(localStorage.getItem('logoish_saved'));
                                        if (currentlist == null) currentlist=[];
                                        if (currentilst.indexOf(slotname) == -1){
                                            localStorage.setItem('logoish_saved_' + slotname,last_run_command);
                                            currentlist.push(slotname);
                                            localStorage.setItem('logoish_saved',JSON.stringify(currentlist));
                                            logIt('saved');
                                        } else {
                                            logIt('ERROR: name already taken');
                                        }
                                        saveLast=false;
                                    },
                                
                                'help':'Saves the last command to given slot',
                                'shorthelp':'Saves the last command to the given slot',
                                'params':{'slotname':{
                                        help: 'The alphanumeric name of the slot to save. No overwriting allowed.',
                                        type:'stringasis' 
                                        }
                                    }

                               },
                        ':show':{run: function(slotname){
                                        var currentlist=JSON.parse(localStorage.getItem('logoish_saved'));
                                        if (currentlist == null) currentlist=[];
                                        if (currentlist.indexOf(name) != -1){
                                            i.value=(localStorage.getItem('logoish_saved_' + slotname));
                                        } else {
                                            logIt('ERROR: No such item saved');
                                        }
                                        saveLast=false;
                                      },
                                 dontclear:true,
                                'shorthelp':'Show a saved commmand',
                                'help':'Retrieve and populate the command prompt with a saved command, ready to be executed',
                                'params':{
                                    'slotname':{
                                        help: 'The name of the slot to show the command from',
                                        type:'stringasis' 
                                    }
                                 }

                                },
                        ':last':{run: function(){
                                      i.value=last_run_command;
                                      saveLast=false;
                                      },
                                 dontclear:true,
                                },
                        ':delete': {run: function(slotname){
                                        var currentlist=JSON.parse(localStorage.getItem('logoish_saved'));
                                        if (currentlist == null) currentlist=[];
                                        if (currentlist.indexOf(slotname) != -1){
                                            localStorage.removeItem('logoish_saved_' + slotname);
                                        } else {
                                            logIt('ERROR: No such item saved');
                                        }
                                        saveLast=false;
                                   },
                                'shorthelp':'Deletes the command from the given slot',
                                'help':'Deletes the command from the given slot',
                                'params':{
                                    'slotname':{
                                        help: 'The alphanumeric name of the slot to delete',
                                        type:'stringasis' 
                                        }
                                 }

                                },
                        ':saved': {run: function(){
                                        logIt(JSON.parse(localStorage.getItem('logoish_saved')));
                                        saveLast=false;
                                      },
                                'shorthelp':'List the name of saved command slots',
                                'help':'Lists the name of saved command slots',
                                'params':{}
                                },
                        ':set':{run: function(varname,value){
                                        if (knowledge.commands.hasOwnProperty(':'+varname)) logIt(varname + ' is a function. ERROR Cannot use it as a variable');
                                        globalEnv.vars[':'+ varname]=value;
                                    },
                                'help':'sets the value of a variable to the given value',
                                'shorthelp':'sets the value of a variable',
                                'params':{
                                            'varname':{
                                                help: 'The alphanumeric name of the variable to set. Overwriting allowed. Note: cannot use function names as variables',
                                                type:'varname' },
                                            'value':{
                                                help: 'The value to set.',
                                                type:'any' 
                                            }
                                         }
                               },
                        ':incr':{run: function(varname, value){
                                        var variablename=':'+varname;

                                        if (knowledge.commands.hasOwnProperty(variablename)) logIt(varname + ' is a function. ERROR Cannot use it as a variable');
                                        globalEnv.vars[variablename]= parseFloat(globalEnv.vars[variablename]) + value;
                                    },
                                'help':'increases the value of a variable by given value',
                                'shorthelp':'increases the value of a variable by given value',
                                'params':{
                                            'varname':{
                                                help: 'The alphanumeric name of the variable to increase. Note: cannot use function names as variables',
                                                type:'varname' },
                                            'value':{
                                                help: 'The value to increase by.',
                                                type:'float'
                                             }
                                         }
                               },
                        ':decr':{run: function(varname, value){
                                        var val=evaluate(params);
                                        var variablename=':'+varname;

                                        if (functions.hasOwnProperty(':'+varname)) logIt(varname + ' is a function. ERROR Cannot use it as a variable');
                                        vars[variablename]= parseFloat(vars[variablename]) - parseFloat(value);
                                    },
                                'help':'decreases the value of a variable by given value',
                                'shorthelp':'decreases the value of a variable by given value',
                                'params':{
                                            'varname':{help: 'The alphanumeric name of the variable to decrease. Note: cannot use function names as variables', type:'varname'},
                                            'value':{help: 'The value to decrease by.', type:'any' }
                                         }
                               },
                        ':setlist':{run: function(listname,list){
                                        if (functions.hasOwnProperty(':'+listname)) logIt(listname + ' is a function. ERROR Cannot use it as a variable');
                                        if (vars.hasOwnProperty(':'+listname)) logIt(listname + ' is a function. ERROR Cannot use it as a variable');
                                        lists[':'+ listname]={daata:extractblock_single(params,'setlist','endlist'), index:0};
                                    },
                                'help':'Creates a list of items. Use the pickfromlist function.',
                                'shorthelp':'Creates a list of items',
                                'params':{
                                            'listname':{
                                                help: 'The alphanumeric name of the list to set. Overwriting allowed. Note: cannot use function names as variables',
                                                type:'varname'
                                             },
                                            'list':{
                                                help: 'list of items followed by endlist',
                                                type:'block',
                                                parseropts:{
                                                    blockstart:'setlist',
                                                    blockend:'endlist',
                                                    bloclstarted:true
                                                } 
                                             }
                                         }
                               },
                        ':anim':{run: function(times,delay,functions, params){
                                        var animating=false;
                                        var animdone=false;
                                        var counter;
                                        var curanim=[];

                                        var anim_hungry=true;
                                        var animslice=function (){ 
                                            if (anim_hungry){
                                                curanim=extracted.shift();
                                                counter=0;
                                                logIt('Checking for animations ..');
                                                if (curanim==undefined){
                                                    animdone=true;
                                                    logIt('animations ended');
                                                    return;
                                                }
                                                logIt('got animation, animating ..');
                                                
                                                times = evaluate(curanim);
                                                delay = evaluate(curanim);

                                                var preanimend=curanim.indexOf('endpreanim');
                                                if (preanimend!=-1){
                                                    var preanim=curanim.slice(0,preanimend);
                                                    execit(preanim);
                                                    curanim.splice(0,preanimend+1);
                                                }
                                                anim_hungry=false;
                                            }

                                            if (counter < times){
                                                if (!animating){
                                                    var animating=true;
                                                    execit(curanim.slice());
                                                    counter++;
                                                    animating=false;
                                                }
                                            } else {
                                                    anim_hungry=true;
                                            }
                                            setTimeout(animslice,delay); 

                                        };
                                        animslice();
                                        params.splice(0,endsat+1);
                                    },
                                'help':'Animates the commands till "endanim" optionally seperated by "nextanim"',
                                'shorthelp':'Animates the commands till "endanim". You cannot currently have more than one animation block. But you can do multiple animations in the same block. Just use "nextanim" followed by times and delay parameter to mark the seperation. To get a clearer idea, look at the examples',
                                'params':{
                                            'times':{
                                                help: 'the number of times to animate',
                                                type:'integer'
                                             },
                                            'delay':{
                                                help: 'the delay between frames in milliseconds',
                                                type:'milliseconds'
                                             },
                                            'commandblock':{
                                                help: 'the set of instructions to repeat for each frame', 
                                                type:'block',
                                                parseropts:{
                                                    blockstart:'anim',
                                                    blockend:'endanim',
                                                    blockstarted:true
                                                }
                                             }
                                         },
                                 handlesExec:true

                               },
                        ':resetlist':{run: function(varname){
                                        if (vars.hasOwnProperty(':'+varname)) logIt(varname + ' is not a list Cannot reset');
                                        if (functions.hasOwnProperty(':'+varname)) logIt(varname + ' is not a list Cannot reset');
                                        if (!lists.hasOwnProperty(':'+varname)) logIt(varname + ' is not a list. Cannot reset');
                                        lists[':'+ varname].index=0;
                                    },
                                'help':'Resets the index of the list back to the first item in the list',
                                'shorthelp':'Resets the index of the list back to the first item in the list',
                                'params':{
                                            'varname':{help: 'The alphanumeric name of the list whose index is to be reset.',type:'varname'},
                                         }
                               },
                        ':evaldisp':{run: function(expression){
                                        logIt(evaluate(expression));
                                    },
                                    shorthelp: 'evaluate and display the result of the function call or variable that follows',
                                    help: 'evaluate and display the result of the function call or variable that follows',
                                    params:{
                                        'expression':{
                                            help:'can be any kind of expression that results in a value',
                                            type:'any'
                                         }
                                    }
                               },
                        ':listexamples':{run: function(){
                                    logIt(Object.keys(examples).map(function(x){return x.split(':')[1]}));
                                },
                                shorthelp:'Show a list of examples.',
                                help:'Show a list of examples. Use the showexample command to use individual examples',
                                params:{},
                         },
                        ':showexample':{run: function(slotname){
                                        var name='example:'+slotname;
                                        if (Object.keys(examples).indexOf(name) != -1){
                                            i.value=examples[name];
                                        } else {
                                            logIt('ERROR: No such example');
                                        }
                                        saveLast=false;
                                      },
                                 dontclear:true,
                                'shorthelp':'Show an inbuilt example',
                                'help':'Retrieve and populate the command prompt with a saved example, ready to be executed',
                                'params':{
                                    'slotname':{
                                        help:'The name of the example to show',
                                        type:'stringasis'
                                        }
                                 }

                                
                        },
                        ':comment':{run: function(comment){
                                        //gulp!
                                  }, 
                                  help: 'anything between "comment" and "endcomment" will be ignored',
                                  shorthelp:'anything between "comment" and "endcomment will" be ignored. But it has to be entered as a seperate command, and cannot come in between parameters of commands' ,
                                  params:{
                                        comment: {
                                            help: 'the comment' , 
                                            type:'block',
                                            parseropts:{
                                                blockstart:'comment',
                                                blockend:'endcomment',
                                                blockstarted:true
                                                }
                                            }
                                    }
                         },
                        ':function':{run: function(name){
                                    //TODO: IMplement
                                },
                                help:'register user defined functions',
                                shorthelp:'register user defined functions',
                                params:{
                                        name: {help: 'the name of the function',type:'stringasis'},
                                        'params': {
                                            help:'the list of parameters must be defined between "params" and "endparams"',
                                            type:'block',
                                            parseropts:{
                                                blockstart:'params',
                                                blockend: 'endparams',
                                                begun:true
                                            }
                                        }

                                }
                        },

                        ':help': {
                            run:function(topic){
                                function get_topic_object(topic){
                                    if (knowledge.commands.hasOwnProperty(topic)) return knowledge.commands[topic];
                                }
                                function hasShortHelp(topic){
                                    return (get_topic_object(topic).shorthelp != undefined);
                                }
                                function hasHelp(topic){
                                    return (get_topic_object(topic).help != undefined);
                                }
                                function getShortHelp(topic){
                                    if (hasShortHelp(topic)){
                                        return get_topic_object(topic).shorthelp;
                                    } else {
                                        return '';
                                    }
                                }
                                function getHelp(topic) {
                                    var helptext='';
                                    var helptopicobj=get_topic_object(topic);
                                    if (hasHelp(topic)) {
                                        helptext=helptopicobj.help;
                                        if (Object.keys(helptopicobj.params).length > 0) {
                                            helptext+='<h3>Parameters</h3>';
                                            for (var i in helptopicobj.params) {
                                                helptext+='<b>'+i+'</b>: ' + helptopicobj.params[i].help + '<br>' ;
                                            }
                                        }
                                        if (Object.keys(helptopicobj.returns).length > 0) {
                                            helptext+='<h3>Returns</h3>';
                                            helptext+='<b>type: ' + helptopicobj.returns.help + '</b><br>' ;
                                            helptext+= helptopicobj.returns.help + '<br>' ;
                                        }
                                       return helptext;
                                    } else {
                                        return 'No Such Topic';
                                    }

                                }
                                var helptext='';
                                if (topic == 'all' || topic == undefined) {
                                    for (command in knowledge.commands){
                                        if (hasShortHelp(command)){
                                            helptext+="<br><span style='font-weight:bold'>"+command+"</span>:";
                                            helptext+=getShortHelp(command);
                                        }
                                    }
                                    helptext+="<br><h4>Examples</h4> use <code>listexamples</code> and <code>showexample examplename</code> to go through inbuilt examples. They should give you a fair idea of how to write logoish programs. \nRemember this is pre-alpha stuff. Syntax subject to change.\nAnd hey! Don't forget to 'pendown' first!";
                                } else {
                                    helptext=getHelp(topic);
                                }
                                logIt(helptext);
                                saveLast=false;
                            },
                            help:'shows this help',
                            shorthelp:'shows this help',
                            params: { 
                                'topic':{
                                    help:'the topic',
                                    type:'stringasis'
                                 }
                            } 
                        }
                }
        }


