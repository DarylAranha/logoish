
        examples={
            'example:sinrect':'set t 1 set r 1 clear goto 256 56 color black angle 0 penup rpt 36 incr t 6 set r mul sin t 10 pendown rpt 4 fwd r right 90 endrpt penup right 10 fwd 20 endrpt',
            'example:randomswirls':'set r 20 set nextr 0 pendown angle 0 clear goto 200 100 rpt 12 angle 0 right nextr incr nextr 30 set r 0 set d mul rnd 3 rpt 100 fwd d incr r .2 right r fwd 1 endrpt endrpt',
            'example:mirrorframe':'clear angle 0 goto 200 40 pendown color black rpt 20 rpt 10 fwd 2 right 7 endrpt rpt 7 fwd 5 right 7 endrpt rpt 10 fwd 2 right 7 endrpt rpt 9 fwd 2 right 12 endrpt fwd 10 rpt 10 fwd 2 left 1 endrpt left 160 rpt 20 right 9 fwd 1 endrpt  rpt 8 right 5.3 fwd 1 endrpt right 28.5 penup fwd 50 pendown endrpt goto 175 100 rpt 80 right 4.5 fwd 7.7 endrpt',
            'example:chandelier':'clear angle 30 rpt 36 goto 256 256 rpt 4 color red rpt 30 fwd 2 right 3 endrpt color white fwd 20 endrpt right 10 endrpt',
            'example:shadesofgray':'clear angle 0 goto 100 0 color black set r 0 rpt 256 fwd 100 right 90 fwd 1 right 90 fwd 100 left 90 fwd 1 left 90 incr r 1 color rgb r r r endrpt',
            'example:rain':'clear rpt 230 set size mul rnd 2 set c floor sub 255 mul size 128 color rgb c c c goto mul rnd 500 mul rnd 500 angle 65 fwd mul 10 size penup back mul size 10 right 30 pendown fwd mul size 10 rpt 15 fwd mul size .7 left 15 endrpt endrpt',
            'example:thread':'set r 20 set nextr 0 pendown angle 0 clear goto 200 100 rpt 12 angle 0 right nextr incr nextr 30 set r 0 set d mul rnd 3 rpt 20 fwd d incr r .2 right r fwd 1 endrpt endrpt',
            'example:grass':'clear set cy 0 pendown rpt 150 angle -90 goto cy 512 incr cy mul 5 rnd set cx 0 rpt 40 color rgb cx add cx 100 cx incr cx 6 right sub mul rnd 5 2.5 fwd 6 endrpt incr cy 1 endrpt',
            'example:elephanttrunk':'clear goto 256 100 color black pendown set a 1 anim 160 20 goto 100 0 angle 0 clear decr a 2 set b sin a rpt 54 incr b .04 fwd 100 right sub add mul sin a 5 89 mul b b fwd 4 right 90 fwd 100 left 90 fwd 4 left 90 endrpt endanim',
            'example:rainagain':'anim 100 20 clear rpt 80 set size mul rnd 2 set c floor sub 255 mul size 128 color rgb c c c goto mul rnd 500 mul rnd 500 angle 65 fwd mul 10 size penup back mul size 10 right 30 pendown fwd mul size 10 rpt 15 fwd mul size .7 left 15 endrpt endrpt endanim',
            'example:sinrectagain':'set r 1 set rr 1 set t 1.5 anim 90 20 incr rr .1 clear goto 256 56 color black angle 0 penup incr t 3 set r mul sin t 10 rpt 36 pendown rpt 4 fwd r right 90 endrpt penup right rr fwd 20 endrpt endanim',
            'example:growswirls':'set rr 1 anim 40 80 incr rr 2 set r 20  set nextr 0 pendown angle 0 clear goto 200 100 rpt 7 angle 0 right nextr incr nextr 30 set r 0 set d mul rnd 3 rpt rr fwd d incr r .2 right r fwd 1 endrpt endrpt endanim',
            'example:scribble':"clear\npendown\nangle 0\nset i 0\nanim 60 50\n  goto 256 256\n  rpt 10\n     set ang mul rnd 5\n     set d add mul rnd 3 .2\n     rpt 60\n       incr i 2\n       set c ceil mul sin i 256\n       color rgb c c c\n       fwd d\n       right ang\n     endrpt\n  endrpt\nendanim",
            'example:smiley':"clear pendown goto 256 100\nangle 0\nanim ( 40 , 50 )\n  fwd 10\n  right 9\n nextanim 20 30\n  goto 240 130\n endpreanim\n  fwd 2\n  right 18\n nextanim 20 30\n  goto 280 130\n endpreanim\n  fwd 2\n  right 18\n nextanim 20 30\n  goto 240 200\n  angle 90\n endpreanim\n  fwd 2\n  left 8\nendanim",
            'example:different_metamorphosis':"setlist message watch till the end endlist\n\nsetlist cc red green endlist\n\nset ddd 0\nanim 90 30\n set d1 4\n set d2 3\n incr ddd .3\n set dd ddd \n\n clear pendown goto 256 256\n color pickfrom cc\n angle 0\n set d 0\n rpt ( 40 ) {\n    incr d dd ;\n    fwd [ sub d1 mul sin d d1 ] ;\n    right 9 ;\n endrpt }\n color pickfrom cc\n rpt ( 40 )\n    incr d dd\n    fwd ( sub d2 mul , sin d d2 )\n    right 9\n endrpt\n color pickfrom cc\n rpt ( 40 )\n    incr d dd\n    fwd sub d1 mul sin d d1\n    left 9\n endrpt\n\n color pickfrom cc\n rpt ( 40 )\n    incr d dd\n    fwd sub d2 mul sin d d2\n    left 9\n endrpt\nendanim"
  };

