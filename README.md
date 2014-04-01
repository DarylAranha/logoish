logoish
=======

A logo inspired language that can do also do very basic animation.

Simple syntax .. 
 * No optional arguments for any functions.
   * As a side effect, we need neither special characters, nor any indentation to seperate.
 * no special characters *needed* what so ever . 
 * use ctrl+enter or press "run" to run the program.
 * all calculations happen through functions. This helps keep parsing code clean, and dead simple

Use help to get a list of commands and functions you can use "help".

Use the "listexamples" command to get a list of available examples.
Then use showexample with the name of the example you want to use.

**Big fat Warning**: Alpha/pre-alpha/bleeding-edge/Toy quality stuff. Not for serious or production use.
 * Syntax subject to change.
 * No syntax check .. currently, if you dont adhere to the syntax in a looping program (repeated commands or animation), it could generally lockup your machine for a few seconds or minutes. In exceptional cases, there is a chance of infinite loop.

Happy drawing! And don't forget to "pendown".



Example session 1
------- ------- - 

\>listexamples

sinrect,randomswirls,mirrorframe,chandelier,shadesofgray,rain,thread,grass,elephanttrunk,rainagain,sinrectagain,growswirls,scribble,smiley,different_metamorphosis

\>showexample rain

\>clear rpt 230 set size mul rnd 2 set c floor sub 255 mul size 128 color rgb c c c goto mul rnd 500 mul rnd 500 angle 65 fwd mul 10 size penup back mul size 10 right 30 pendown fwd mul size 10 rpt 15 fwd mul size .7 left 15 endrpt endrpt


Example session 2
------- ------- -

 \>clear 

 \>goto 100 100

 \>pendown

 \>help color

Sets the ink color of the pen

Parameters

color: the color name to set the color of the ink to. It can be any color that is accepted by css as color. Generally includes many common colors.

 \>color black

 \>width 1

 \>rpt 100 fwd 1 right 1 endrpt

Example session 3
------- ------- -

\>evaldisp rgb mul 100 sin 3 100 100

rgb(14.112000805986721,100,100)

\>evaldisp rgb ceil mul 100 sin 3 100 100

rgb(15,100,100)
