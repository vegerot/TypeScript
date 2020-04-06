//// [/lib/initial-buildOutput.txt]
/lib/tsc --b /src/third --verbose
[[90m12:01:00 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:01:00 AM[0m] Project 'src/first/tsconfig.json' is out of date because output file 'src/first/bin/first-output.js' does not exist

[[90m12:01:00 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:01:00 AM[0m] Project 'src/second/tsconfig.json' is out of date because output file 'src/2/second-output.js' does not exist

[[90m12:01:00 AM[0m] Building project '/src/second/tsconfig.json'...

[[90m12:01:00 AM[0m] Project 'src/third/tsconfig.json' is out of date because output file 'src/third/thirdjs/output/third-output.js' does not exist

[[90m12:01:00 AM[0m] Building project '/src/third/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/2/second-output.d.ts]
/**@internal*/ interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;
declare namespace N {
}
declare namespace N {
}
declare class normalC {
    /**@internal*/ constructor();
    /**@internal*/ prop: string;
    /**@internal*/ method(): void;
    /**@internal*/ get c(): number;
    /**@internal*/ set c(val: number);
}
declare namespace normalN {
    /**@internal*/ class C {
    }
    /**@internal*/ function foo(): void;
    /**@internal*/ namespace someNamespace {
        class C {
        }
    }
    /**@internal*/ namespace someOther.something {
        class someClass {
        }
    }
    /**@internal*/ export import someImport = someNamespace.C;
    /**@internal*/ type internalType = internalC;
    /**@internal*/ const internalConst = 10;
    /**@internal*/ enum internalEnum {
        a = 0,
        b = 1,
        c = 2
    }
}
/**@internal*/ declare class internalC {
}
/**@internal*/ declare function internalfoo(): void;
/**@internal*/ declare namespace internalNamespace {
    class someClass {
    }
}
/**@internal*/ declare namespace internalOther.something {
    class someClass {
    }
}
/**@internal*/ import internalImport = internalNamespace.someClass;
/**@internal*/ declare type internalType = internalC;
/**@internal*/ declare const internalConst = 10;
/**@internal*/ declare enum internalEnum {
    a = 0,
    b = 1,
    c = 2
}
declare class C {
    doSomething(): void;
}
//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.d.ts.map]
{"version":3,"file":"second-output.d.ts","sourceRoot":"","sources":["../first/first_PART1.ts","../first/first_part3.ts","../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAAA,cAAc,CAAC,UAAU,QAAQ;IAC7B,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACRD,iBAAS,CAAC,WAET;ACFD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;AAED,cAAM,OAAO;IACT,cAAc;IACd,cAAc,CAAC,IAAI,EAAE,MAAM,CAAC;IAC5B,cAAc,CAAC,MAAM;IACrB,cAAc,CAAC,IAAI,CAAC,IACM,MAAM,CADK;IACrC,cAAc,CAAC,IAAI,CAAC,CAAC,KAAK,MAAM,EAAK;CACxC;AACD,kBAAU,OAAO,CAAC;IACd,cAAc,CAAC,MAAa,CAAC;KAAI;IACjC,cAAc,CAAC,SAAgB,GAAG,SAAK;IACvC,cAAc,CAAC,UAAiB,aAAa,CAAC;QAAE,MAAa,CAAC;SAAG;KAAE;IACnE,cAAc,CAAC,UAAiB,SAAS,CAAC,SAAS,CAAC;QAAE,MAAa,SAAS;SAAG;KAAE;IACjF,cAAc,CAAC,MAAM,QAAQ,UAAU,GAAG,aAAa,CAAC,CAAC,CAAC;IAC1D,cAAc,CAAC,KAAY,YAAY,GAAG,SAAS,CAAC;IACpD,cAAc,CAAQ,MAAM,aAAa,KAAK,CAAC;IAC/C,cAAc,CAAC,KAAY,YAAY;QAAG,CAAC,IAAA;QAAE,CAAC,IAAA;QAAE,CAAC,IAAA;KAAE;CACtD;AACD,cAAc,CAAC,cAAM,SAAS;CAAG;AACjC,cAAc,CAAC,iBAAS,WAAW,SAAK;AACxC,cAAc,CAAC,kBAAU,iBAAiB,CAAC;IAAE,MAAa,SAAS;KAAG;CAAE;AACxE,cAAc,CAAC,kBAAU,aAAa,CAAC,SAAS,CAAC;IAAE,MAAa,SAAS;KAAG;CAAE;AAC9E,cAAc,CAAC,OAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;AACnE,cAAc,CAAC,aAAK,YAAY,GAAG,SAAS,CAAC;AAC7C,cAAc,CAAC,QAAA,MAAM,aAAa,KAAK,CAAC;AACxC,cAAc,CAAC,aAAK,YAAY;IAAG,CAAC,IAAA;IAAE,CAAC,IAAA;IAAE,CAAC,IAAA;CAAE;ACpC5C,cAAM,CAAC;IACH,WAAW;CAGd"}

//// [/src/2/second-output.d.ts.map.baseline.txt]
===================================================================
JsFile: second-output.d.ts
mapUrl: second-output.d.ts.map
sourceRoot: 
sources: ../first/first_PART1.ts,../first/first_part3.ts,../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../first/first_PART1.ts
-------------------------------------------------------------------
>>>/**@internal*/ interface TheFirst {
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^
5 >                         ^^^^^^^^
1 >
2 >/**@internal*/
3 >               
4 >               interface 
5 >                         TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 15) Source(1, 15) + SourceIndex(0)
3 >Emitted(1, 16) Source(1, 16) + SourceIndex(0)
4 >Emitted(1, 26) Source(1, 26) + SourceIndex(0)
5 >Emitted(1, 34) Source(1, 34) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../first/first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(8, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(1)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(1)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(9, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(9, 19) Source(1, 11) + SourceIndex(2)
3 >Emitted(9, 20) Source(1, 12) + SourceIndex(2)
4 >Emitted(9, 21) Source(1, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(10, 2) Source(3, 2) + SourceIndex(2)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(11, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(11, 19) Source(5, 11) + SourceIndex(2)
3 >Emitted(11, 20) Source(5, 12) + SourceIndex(2)
4 >Emitted(11, 21) Source(5, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(12, 2) Source(11, 2) + SourceIndex(2)
---
>>>declare class normalC {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^^
4 >                     ^^^^^^^^^^^^^->
1->
  >
  >
2 >class 
3 >              normalC
1->Emitted(13, 1) Source(13, 1) + SourceIndex(2)
2 >Emitted(13, 15) Source(13, 7) + SourceIndex(2)
3 >Emitted(13, 22) Source(13, 14) + SourceIndex(2)
---
>>>    /**@internal*/ constructor();
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    /**@internal*/
1->Emitted(14, 5) Source(14, 5) + SourceIndex(2)
2 >Emitted(14, 19) Source(14, 19) + SourceIndex(2)
---
>>>    /**@internal*/ prop: string;
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^
6 >                         ^^^^^^
7 >                               ^
8 >                                ^^^->
1-> constructor() { }
  >    
2 >    /**@internal*/
3 >                   
4 >                   prop
5 >                       : 
6 >                         string
7 >                               ;
1->Emitted(15, 5) Source(15, 5) + SourceIndex(2)
2 >Emitted(15, 19) Source(15, 19) + SourceIndex(2)
3 >Emitted(15, 20) Source(15, 20) + SourceIndex(2)
4 >Emitted(15, 24) Source(15, 24) + SourceIndex(2)
5 >Emitted(15, 26) Source(15, 26) + SourceIndex(2)
6 >Emitted(15, 32) Source(15, 32) + SourceIndex(2)
7 >Emitted(15, 33) Source(15, 33) + SourceIndex(2)
---
>>>    /**@internal*/ method(): void;
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^
5 >                         ^^^^^^^^^^^->
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   method
1->Emitted(16, 5) Source(16, 5) + SourceIndex(2)
2 >Emitted(16, 19) Source(16, 19) + SourceIndex(2)
3 >Emitted(16, 20) Source(16, 20) + SourceIndex(2)
4 >Emitted(16, 26) Source(16, 26) + SourceIndex(2)
---
>>>    /**@internal*/ get c(): number;
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^
6 >                        ^^^^
7 >                            ^^^^^^
8 >                                  ^
9 >                                   ^^^^->
1->() { }
  >    
2 >    /**@internal*/
3 >                   
4 >                   get 
5 >                       c
6 >                        () { return 10; }
  >                            /**@internal*/ set c(val: 
7 >                            number
8 >                                  
1->Emitted(17, 5) Source(17, 5) + SourceIndex(2)
2 >Emitted(17, 19) Source(17, 19) + SourceIndex(2)
3 >Emitted(17, 20) Source(17, 20) + SourceIndex(2)
4 >Emitted(17, 24) Source(17, 24) + SourceIndex(2)
5 >Emitted(17, 25) Source(17, 25) + SourceIndex(2)
6 >Emitted(17, 29) Source(18, 31) + SourceIndex(2)
7 >Emitted(17, 35) Source(18, 37) + SourceIndex(2)
8 >Emitted(17, 36) Source(17, 42) + SourceIndex(2)
---
>>>    /**@internal*/ set c(val: number);
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^
6 >                        ^
7 >                         ^^^^^
8 >                              ^^^^^^
9 >                                    ^^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   set 
5 >                       c
6 >                        (
7 >                         val: 
8 >                              number
9 >                                    ) { }
1->Emitted(18, 5) Source(18, 5) + SourceIndex(2)
2 >Emitted(18, 19) Source(18, 19) + SourceIndex(2)
3 >Emitted(18, 20) Source(18, 20) + SourceIndex(2)
4 >Emitted(18, 24) Source(18, 24) + SourceIndex(2)
5 >Emitted(18, 25) Source(18, 25) + SourceIndex(2)
6 >Emitted(18, 26) Source(18, 26) + SourceIndex(2)
7 >Emitted(18, 31) Source(18, 31) + SourceIndex(2)
8 >Emitted(18, 37) Source(18, 37) + SourceIndex(2)
9 >Emitted(18, 39) Source(18, 42) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(19, 2) Source(19, 2) + SourceIndex(2)
---
>>>declare namespace normalN {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^^^^^^^
4 >                         ^
5 >                          ^^^->
1->
  >
2 >namespace 
3 >                  normalN
4 >                          
1->Emitted(20, 1) Source(20, 1) + SourceIndex(2)
2 >Emitted(20, 19) Source(20, 11) + SourceIndex(2)
3 >Emitted(20, 26) Source(20, 18) + SourceIndex(2)
4 >Emitted(20, 27) Source(20, 19) + SourceIndex(2)
---
>>>    /**@internal*/ class C {
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^
5 >                         ^
1->{
  >    
2 >    /**@internal*/
3 >                   
4 >                   export class 
5 >                         C
1->Emitted(21, 5) Source(21, 5) + SourceIndex(2)
2 >Emitted(21, 19) Source(21, 19) + SourceIndex(2)
3 >Emitted(21, 20) Source(21, 20) + SourceIndex(2)
4 >Emitted(21, 26) Source(21, 33) + SourceIndex(2)
5 >Emitted(21, 27) Source(21, 34) + SourceIndex(2)
---
>>>    }
1 >^^^^^
2 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(22, 6) Source(21, 38) + SourceIndex(2)
---
>>>    /**@internal*/ function foo(): void;
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^
5 >                            ^^^
6 >                               ^^^^^^^^^
7 >                                        ^^^^^->
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export function 
5 >                            foo
6 >                               () {}
1->Emitted(23, 5) Source(22, 5) + SourceIndex(2)
2 >Emitted(23, 19) Source(22, 19) + SourceIndex(2)
3 >Emitted(23, 20) Source(22, 20) + SourceIndex(2)
4 >Emitted(23, 29) Source(22, 36) + SourceIndex(2)
5 >Emitted(23, 32) Source(22, 39) + SourceIndex(2)
6 >Emitted(23, 41) Source(22, 44) + SourceIndex(2)
---
>>>    /**@internal*/ namespace someNamespace {
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^
5 >                             ^^^^^^^^^^^^^
6 >                                          ^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                             someNamespace
6 >                                           
1->Emitted(24, 5) Source(23, 5) + SourceIndex(2)
2 >Emitted(24, 19) Source(23, 19) + SourceIndex(2)
3 >Emitted(24, 20) Source(23, 20) + SourceIndex(2)
4 >Emitted(24, 30) Source(23, 37) + SourceIndex(2)
5 >Emitted(24, 43) Source(23, 50) + SourceIndex(2)
6 >Emitted(24, 44) Source(23, 51) + SourceIndex(2)
---
>>>        class C {
1 >^^^^^^^^
2 >        ^^^^^^
3 >              ^
1 >{ 
2 >        export class 
3 >              C
1 >Emitted(25, 9) Source(23, 53) + SourceIndex(2)
2 >Emitted(25, 15) Source(23, 66) + SourceIndex(2)
3 >Emitted(25, 16) Source(23, 67) + SourceIndex(2)
---
>>>        }
1 >^^^^^^^^^
1 > {}
1 >Emitted(26, 10) Source(23, 70) + SourceIndex(2)
---
>>>    }
1 >^^^^^
2 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(27, 6) Source(23, 72) + SourceIndex(2)
---
>>>    /**@internal*/ namespace someOther.something {
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^
5 >                             ^^^^^^^^^
6 >                                      ^
7 >                                       ^^^^^^^^^
8 >                                                ^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                             someOther
6 >                                      .
7 >                                       something
8 >                                                 
1->Emitted(28, 5) Source(24, 5) + SourceIndex(2)
2 >Emitted(28, 19) Source(24, 19) + SourceIndex(2)
3 >Emitted(28, 20) Source(24, 20) + SourceIndex(2)
4 >Emitted(28, 30) Source(24, 37) + SourceIndex(2)
5 >Emitted(28, 39) Source(24, 46) + SourceIndex(2)
6 >Emitted(28, 40) Source(24, 47) + SourceIndex(2)
7 >Emitted(28, 49) Source(24, 56) + SourceIndex(2)
8 >Emitted(28, 50) Source(24, 57) + SourceIndex(2)
---
>>>        class someClass {
1 >^^^^^^^^
2 >        ^^^^^^
3 >              ^^^^^^^^^
1 >{ 
2 >        export class 
3 >              someClass
1 >Emitted(29, 9) Source(24, 59) + SourceIndex(2)
2 >Emitted(29, 15) Source(24, 72) + SourceIndex(2)
3 >Emitted(29, 24) Source(24, 81) + SourceIndex(2)
---
>>>        }
1 >^^^^^^^^^
1 > {}
1 >Emitted(30, 10) Source(24, 84) + SourceIndex(2)
---
>>>    }
1 >^^^^^
2 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(31, 6) Source(24, 86) + SourceIndex(2)
---
>>>    /**@internal*/ export import someImport = someNamespace.C;
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^
5 >                         ^^^^^^^^
6 >                                 ^^^^^^^^^^
7 >                                           ^^^
8 >                                              ^^^^^^^^^^^^^
9 >                                                           ^
10>                                                            ^
11>                                                             ^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export
5 >                          import 
6 >                                 someImport
7 >                                            = 
8 >                                              someNamespace
9 >                                                           .
10>                                                            C
11>                                                             ;
1->Emitted(32, 5) Source(25, 5) + SourceIndex(2)
2 >Emitted(32, 19) Source(25, 19) + SourceIndex(2)
3 >Emitted(32, 20) Source(25, 20) + SourceIndex(2)
4 >Emitted(32, 26) Source(25, 26) + SourceIndex(2)
5 >Emitted(32, 34) Source(25, 34) + SourceIndex(2)
6 >Emitted(32, 44) Source(25, 44) + SourceIndex(2)
7 >Emitted(32, 47) Source(25, 47) + SourceIndex(2)
8 >Emitted(32, 60) Source(25, 60) + SourceIndex(2)
9 >Emitted(32, 61) Source(25, 61) + SourceIndex(2)
10>Emitted(32, 62) Source(25, 62) + SourceIndex(2)
11>Emitted(32, 63) Source(25, 63) + SourceIndex(2)
---
>>>    /**@internal*/ type internalType = internalC;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^
5 >                        ^^^^^^^^^^^^
6 >                                    ^^^
7 >                                       ^^^^^^^^^
8 >                                                ^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export type 
5 >                        internalType
6 >                                     = 
7 >                                       internalC
8 >                                                ;
1 >Emitted(33, 5) Source(26, 5) + SourceIndex(2)
2 >Emitted(33, 19) Source(26, 19) + SourceIndex(2)
3 >Emitted(33, 20) Source(26, 20) + SourceIndex(2)
4 >Emitted(33, 25) Source(26, 32) + SourceIndex(2)
5 >Emitted(33, 37) Source(26, 44) + SourceIndex(2)
6 >Emitted(33, 40) Source(26, 47) + SourceIndex(2)
7 >Emitted(33, 49) Source(26, 56) + SourceIndex(2)
8 >Emitted(33, 50) Source(26, 57) + SourceIndex(2)
---
>>>    /**@internal*/ const internalConst = 10;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^
5 >                         ^^^^^^^^^^^^^
6 >                                      ^^^^^
7 >                                           ^
1 >
  >    
2 >    /**@internal*/
3 >                   export 
4 >                   const 
5 >                         internalConst
6 >                                       = 10
7 >                                           ;
1 >Emitted(34, 5) Source(27, 5) + SourceIndex(2)
2 >Emitted(34, 19) Source(27, 19) + SourceIndex(2)
3 >Emitted(34, 20) Source(27, 27) + SourceIndex(2)
4 >Emitted(34, 26) Source(27, 33) + SourceIndex(2)
5 >Emitted(34, 39) Source(27, 46) + SourceIndex(2)
6 >Emitted(34, 44) Source(27, 51) + SourceIndex(2)
7 >Emitted(34, 45) Source(27, 52) + SourceIndex(2)
---
>>>    /**@internal*/ enum internalEnum {
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^
5 >                        ^^^^^^^^^^^^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export enum 
5 >                        internalEnum
1 >Emitted(35, 5) Source(28, 5) + SourceIndex(2)
2 >Emitted(35, 19) Source(28, 19) + SourceIndex(2)
3 >Emitted(35, 20) Source(28, 20) + SourceIndex(2)
4 >Emitted(35, 25) Source(28, 32) + SourceIndex(2)
5 >Emitted(35, 37) Source(28, 44) + SourceIndex(2)
---
>>>        a = 0,
1 >^^^^^^^^
2 >        ^
3 >         ^^^^
4 >             ^^->
1 > { 
2 >        a
3 >         
1 >Emitted(36, 9) Source(28, 47) + SourceIndex(2)
2 >Emitted(36, 10) Source(28, 48) + SourceIndex(2)
3 >Emitted(36, 14) Source(28, 48) + SourceIndex(2)
---
>>>        b = 1,
1->^^^^^^^^
2 >        ^
3 >         ^^^^
4 >             ^->
1->, 
2 >        b
3 >         
1->Emitted(37, 9) Source(28, 50) + SourceIndex(2)
2 >Emitted(37, 10) Source(28, 51) + SourceIndex(2)
3 >Emitted(37, 14) Source(28, 51) + SourceIndex(2)
---
>>>        c = 2
1->^^^^^^^^
2 >        ^
3 >         ^^^^
1->, 
2 >        c
3 >         
1->Emitted(38, 9) Source(28, 53) + SourceIndex(2)
2 >Emitted(38, 10) Source(28, 54) + SourceIndex(2)
3 >Emitted(38, 14) Source(28, 54) + SourceIndex(2)
---
>>>    }
1 >^^^^^
1 > }
1 >Emitted(39, 6) Source(28, 56) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(40, 2) Source(29, 2) + SourceIndex(2)
---
>>>/**@internal*/ declare class internalC {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^^^
5 >                             ^^^^^^^^^
1->
  >
2 >/**@internal*/
3 >               
4 >               class 
5 >                             internalC
1->Emitted(41, 1) Source(30, 1) + SourceIndex(2)
2 >Emitted(41, 15) Source(30, 15) + SourceIndex(2)
3 >Emitted(41, 16) Source(30, 16) + SourceIndex(2)
4 >Emitted(41, 30) Source(30, 22) + SourceIndex(2)
5 >Emitted(41, 39) Source(30, 31) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > {}
1 >Emitted(42, 2) Source(30, 34) + SourceIndex(2)
---
>>>/**@internal*/ declare function internalfoo(): void;
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^^^^^^
5 >                                ^^^^^^^^^^^
6 >                                           ^^^^^^^^^
7 >                                                    ^->
1->
  >
2 >/**@internal*/
3 >               
4 >               function 
5 >                                internalfoo
6 >                                           () {}
1->Emitted(43, 1) Source(31, 1) + SourceIndex(2)
2 >Emitted(43, 15) Source(31, 15) + SourceIndex(2)
3 >Emitted(43, 16) Source(31, 16) + SourceIndex(2)
4 >Emitted(43, 33) Source(31, 25) + SourceIndex(2)
5 >Emitted(43, 44) Source(31, 36) + SourceIndex(2)
6 >Emitted(43, 53) Source(31, 41) + SourceIndex(2)
---
>>>/**@internal*/ declare namespace internalNamespace {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^^^^^^^
5 >                                 ^^^^^^^^^^^^^^^^^
6 >                                                  ^
1->
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                                 internalNamespace
6 >                                                   
1->Emitted(44, 1) Source(32, 1) + SourceIndex(2)
2 >Emitted(44, 15) Source(32, 15) + SourceIndex(2)
3 >Emitted(44, 16) Source(32, 16) + SourceIndex(2)
4 >Emitted(44, 34) Source(32, 26) + SourceIndex(2)
5 >Emitted(44, 51) Source(32, 43) + SourceIndex(2)
6 >Emitted(44, 52) Source(32, 44) + SourceIndex(2)
---
>>>    class someClass {
1 >^^^^
2 >    ^^^^^^
3 >          ^^^^^^^^^
1 >{ 
2 >    export class 
3 >          someClass
1 >Emitted(45, 5) Source(32, 46) + SourceIndex(2)
2 >Emitted(45, 11) Source(32, 59) + SourceIndex(2)
3 >Emitted(45, 20) Source(32, 68) + SourceIndex(2)
---
>>>    }
1 >^^^^^
1 > {}
1 >Emitted(46, 6) Source(32, 71) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(47, 2) Source(32, 73) + SourceIndex(2)
---
>>>/**@internal*/ declare namespace internalOther.something {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^^^^^^^
5 >                                 ^^^^^^^^^^^^^
6 >                                              ^
7 >                                               ^^^^^^^^^
8 >                                                        ^
1->
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                                 internalOther
6 >                                              .
7 >                                               something
8 >                                                         
1->Emitted(48, 1) Source(33, 1) + SourceIndex(2)
2 >Emitted(48, 15) Source(33, 15) + SourceIndex(2)
3 >Emitted(48, 16) Source(33, 16) + SourceIndex(2)
4 >Emitted(48, 34) Source(33, 26) + SourceIndex(2)
5 >Emitted(48, 47) Source(33, 39) + SourceIndex(2)
6 >Emitted(48, 48) Source(33, 40) + SourceIndex(2)
7 >Emitted(48, 57) Source(33, 49) + SourceIndex(2)
8 >Emitted(48, 58) Source(33, 50) + SourceIndex(2)
---
>>>    class someClass {
1 >^^^^
2 >    ^^^^^^
3 >          ^^^^^^^^^
1 >{ 
2 >    export class 
3 >          someClass
1 >Emitted(49, 5) Source(33, 52) + SourceIndex(2)
2 >Emitted(49, 11) Source(33, 65) + SourceIndex(2)
3 >Emitted(49, 20) Source(33, 74) + SourceIndex(2)
---
>>>    }
1 >^^^^^
1 > {}
1 >Emitted(50, 6) Source(33, 77) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(51, 2) Source(33, 79) + SourceIndex(2)
---
>>>/**@internal*/ import internalImport = internalNamespace.someClass;
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^
5 >                      ^^^^^^^^^^^^^^
6 >                                    ^^^
7 >                                       ^^^^^^^^^^^^^^^^^
8 >                                                        ^
9 >                                                         ^^^^^^^^^
10>                                                                  ^
1->
  >
2 >/**@internal*/
3 >               
4 >               import 
5 >                      internalImport
6 >                                     = 
7 >                                       internalNamespace
8 >                                                        .
9 >                                                         someClass
10>                                                                  ;
1->Emitted(52, 1) Source(34, 1) + SourceIndex(2)
2 >Emitted(52, 15) Source(34, 15) + SourceIndex(2)
3 >Emitted(52, 16) Source(34, 16) + SourceIndex(2)
4 >Emitted(52, 23) Source(34, 23) + SourceIndex(2)
5 >Emitted(52, 37) Source(34, 37) + SourceIndex(2)
6 >Emitted(52, 40) Source(34, 40) + SourceIndex(2)
7 >Emitted(52, 57) Source(34, 57) + SourceIndex(2)
8 >Emitted(52, 58) Source(34, 58) + SourceIndex(2)
9 >Emitted(52, 67) Source(34, 67) + SourceIndex(2)
10>Emitted(52, 68) Source(34, 68) + SourceIndex(2)
---
>>>/**@internal*/ declare type internalType = internalC;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^^
5 >                            ^^^^^^^^^^^^
6 >                                        ^^^
7 >                                           ^^^^^^^^^
8 >                                                    ^
1 >
  >
2 >/**@internal*/
3 >               
4 >               type 
5 >                            internalType
6 >                                         = 
7 >                                           internalC
8 >                                                    ;
1 >Emitted(53, 1) Source(35, 1) + SourceIndex(2)
2 >Emitted(53, 15) Source(35, 15) + SourceIndex(2)
3 >Emitted(53, 16) Source(35, 16) + SourceIndex(2)
4 >Emitted(53, 29) Source(35, 21) + SourceIndex(2)
5 >Emitted(53, 41) Source(35, 33) + SourceIndex(2)
6 >Emitted(53, 44) Source(35, 36) + SourceIndex(2)
7 >Emitted(53, 53) Source(35, 45) + SourceIndex(2)
8 >Emitted(53, 54) Source(35, 46) + SourceIndex(2)
---
>>>/**@internal*/ declare const internalConst = 10;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^
5 >                       ^^^^^^
6 >                             ^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^
1 >
  >
2 >/**@internal*/
3 >               
4 >               
5 >                       const 
6 >                             internalConst
7 >                                           = 10
8 >                                               ;
1 >Emitted(54, 1) Source(36, 1) + SourceIndex(2)
2 >Emitted(54, 15) Source(36, 15) + SourceIndex(2)
3 >Emitted(54, 16) Source(36, 16) + SourceIndex(2)
4 >Emitted(54, 24) Source(36, 16) + SourceIndex(2)
5 >Emitted(54, 30) Source(36, 22) + SourceIndex(2)
6 >Emitted(54, 43) Source(36, 35) + SourceIndex(2)
7 >Emitted(54, 48) Source(36, 40) + SourceIndex(2)
8 >Emitted(54, 49) Source(36, 41) + SourceIndex(2)
---
>>>/**@internal*/ declare enum internalEnum {
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^^
5 >                            ^^^^^^^^^^^^
1 >
  >
2 >/**@internal*/
3 >               
4 >               enum 
5 >                            internalEnum
1 >Emitted(55, 1) Source(37, 1) + SourceIndex(2)
2 >Emitted(55, 15) Source(37, 15) + SourceIndex(2)
3 >Emitted(55, 16) Source(37, 16) + SourceIndex(2)
4 >Emitted(55, 29) Source(37, 21) + SourceIndex(2)
5 >Emitted(55, 41) Source(37, 33) + SourceIndex(2)
---
>>>    a = 0,
1 >^^^^
2 >    ^
3 >     ^^^^
4 >         ^^->
1 > { 
2 >    a
3 >     
1 >Emitted(56, 5) Source(37, 36) + SourceIndex(2)
2 >Emitted(56, 6) Source(37, 37) + SourceIndex(2)
3 >Emitted(56, 10) Source(37, 37) + SourceIndex(2)
---
>>>    b = 1,
1->^^^^
2 >    ^
3 >     ^^^^
4 >         ^->
1->, 
2 >    b
3 >     
1->Emitted(57, 5) Source(37, 39) + SourceIndex(2)
2 >Emitted(57, 6) Source(37, 40) + SourceIndex(2)
3 >Emitted(57, 10) Source(37, 40) + SourceIndex(2)
---
>>>    c = 2
1->^^^^
2 >    ^
3 >     ^^^^
1->, 
2 >    c
3 >     
1->Emitted(58, 5) Source(37, 42) + SourceIndex(2)
2 >Emitted(58, 6) Source(37, 43) + SourceIndex(2)
3 >Emitted(58, 10) Source(37, 43) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(59, 2) Source(37, 45) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(60, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(60, 15) Source(1, 7) + SourceIndex(3)
3 >Emitted(60, 16) Source(1, 8) + SourceIndex(3)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(61, 5) Source(2, 5) + SourceIndex(3)
2 >Emitted(61, 16) Source(2, 16) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(62, 2) Source(5, 2) + SourceIndex(3)
---
>>>//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.js]
/**@internal*/ 

var s = "Hello, world";

console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
var N;
(function (N) {
    function f() {
        console.log('testing');
    }

    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /**@internal*/ function normalC() {}

    /**@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /**@internal*/ get: function () { return 10; },
        /**@internal*/ set: function (val) { },
        enumerable: false,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /**@internal*/ var C = /** @class */ (function () {
        function C() {}
        return C;
    }());
    normalN.C = C;
    /**@internal*/ function foo() { }
    normalN.foo = foo;
    /**@internal*/ var someNamespace;
    (function (someNamespace) {var C = /** @class */ (function () {
            function C() {}
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /**@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {var someClass = /** @class */ (function () {
                function someClass() {}
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /**@internal*/ normalN.someImport = someNamespace.C;

    /**@internal*/ normalN.internalConst = 10;
    /**@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/**@internal*/ var internalC = /** @class */ (function () {
    function internalC() {}
    return internalC;
}());
/**@internal*/ function internalfoo() { }
/**@internal*/ var internalNamespace;
(function (internalNamespace) {var someClass = /** @class */ (function () {
        function someClass() {}
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/**@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {var someClass = /** @class */ (function () {
            function someClass() {}
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/**@internal*/ var internalImport = internalNamespace.someClass;

/**@internal*/ var internalConst = 10;
/**@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.js.map]
{"version":3,"file":"second-output.js","sourceRoot":"","sources":["../first/first_PART1.ts","../first/first_part2.ts","../first/first_part3.ts","../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAAA,cAAc;;AAId,IAAM,CAAC,GAAG,cAAc,CAAC;;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IACI,cAAc,CAAC,oBAAgB,CAAC;;IAEhC,cAAc,CAAC,wBAAM,GAAN,cAAW,CAAC;IACZ,sBAAI,sBAAC;QAApB,cAAc,MAAC,cAAU,OAAO,EAAE,CAAC,CAAC,CAAC;QACrC,cAAc,MAAC,UAAM,GAAW,IAAI,CAAC;;;OADA;IAEzC,cAAC;AAAD,CAAC,AAND,IAMC;AACD,IAAU,OAAO,CAShB;AATD,WAAU,OAAO;IACb,cAAc,CAAC;QAAA,cAAiB,CAAC;QAAD,QAAC;IAAD,CAAC,AAAlB,IAAkB;IAAL,SAAC,IAAI,CAAA;IACjC,cAAc,CAAC,SAAgB,GAAG,KAAI,CAAC;IAAR,WAAG,MAAK,CAAA;IACvC,cAAc,CAAC,IAAiB,aAAa,CAAsB;IAApD,WAAiB,aAAa,GAAG;YAAA,cAAgB,CAAC;YAAD,QAAC;QAAD,CAAC,AAAjB,IAAiB;QAAJ,eAAC,IAAG,CAAA;IAAC,CAAC,EAAnC,aAAa,GAAb,qBAAa,KAAb,qBAAa,QAAsB;IACnE,cAAc,CAAC,IAAiB,SAAS,CAAwC;IAAlE,WAAiB,SAAS;QAAC,IAAA,SAAS,CAA8B;QAAvC,WAAA,SAAS,GAAG;gBAAA,sBAAwB,CAAC;gBAAD,gBAAC;YAAD,CAAC,AAAzB,IAAyB;YAAZ,mBAAS,YAAG,CAAA;QAAC,CAAC,EAAvC,SAAS,GAAT,mBAAS,KAAT,mBAAS,QAA8B;IAAD,CAAC,EAAjD,SAAS,GAAT,iBAAS,KAAT,iBAAS,QAAwC;IACjF,cAAc,CAAe,kBAAU,GAAG,aAAa,CAAC,CAAC,CAAC;;IAE1D,cAAc,CAAc,qBAAa,GAAG,EAAE,CAAC;IAC/C,cAAc,CAAC,IAAY,YAAwB;IAApC,WAAY,YAAY;QAAG,yCAAC,CAAE,yCAAC,CAAE,yCAAC,CAAA;IAAC,CAAC,EAAxB,YAAY,GAAZ,oBAAY,KAAZ,oBAAY,QAAY;AACvD,CAAC,EATS,OAAO,KAAP,OAAO,QAShB;AACD,cAAc,CAAC;IAAA,sBAAiB,CAAC;IAAD,gBAAC;AAAD,CAAC,AAAlB,IAAkB;AACjC,cAAc,CAAC,SAAS,WAAW,KAAI,CAAC;AACxC,cAAc,CAAC,IAAU,iBAAiB,CAA8B;AAAzD,WAAU,iBAAiB,GAAG;QAAA,sBAAwB,CAAC;QAAD,gBAAC;IAAD,CAAC,AAAzB,IAAyB;IAAZ,2BAAS,YAAG,CAAA;AAAC,CAAC,EAA/C,iBAAiB,KAAjB,iBAAiB,QAA8B;AACxE,cAAc,CAAC,IAAU,aAAa,CAAwC;AAA/D,WAAU,aAAa;IAAC,IAAA,SAAS,CAA8B;IAAvC,WAAA,SAAS,GAAG;YAAA,sBAAwB,CAAC;YAAD,gBAAC;QAAD,CAAC,AAAzB,IAAyB;QAAZ,mBAAS,YAAG,CAAA;IAAC,CAAC,EAAvC,SAAS,GAAT,uBAAS,KAAT,uBAAS,QAA8B;AAAD,CAAC,EAArD,aAAa,KAAb,aAAa,QAAwC;AAC9E,cAAc,CAAC,IAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;;AAEnE,cAAc,CAAC,IAAM,aAAa,GAAG,EAAE,CAAC;AACxC,cAAc,CAAC,IAAK,YAAwB;AAA7B,WAAK,YAAY;IAAG,yCAAC,CAAE,yCAAC,CAAE,yCAAC,CAAA;AAAC,CAAC,EAAxB,YAAY,KAAZ,YAAY,QAAY;ACpC5C;IAAA;IAIA,CAAC,AAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC"}

//// [/src/2/second-output.js.map.baseline.txt]
===================================================================
JsFile: second-output.js
mapUrl: second-output.js.map
sourceRoot: 
sources: ../first/first_PART1.ts,../first/first_part2.ts,../first/first_part3.ts,../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../first/first_PART1.ts
-------------------------------------------------------------------
>>>/**@internal*/ 
1 >
2 >^^^^^^^^^^^^^^
1 >
2 >/**@internal*/
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 15) Source(1, 15) + SourceIndex(0)
---
>>>
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 > interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(3, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(3, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(3, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(3, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(3, 24) Source(5, 26) + SourceIndex(0)
---
>>>
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(5, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(5, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(5, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(5, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(5, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(5, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(5, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(5, 16) Source(11, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(6, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(6, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(6, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(6, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(6, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(6, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(6, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(6, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(6, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(7, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(7, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(7, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(8, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(8, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(8, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(8, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(9, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(9, 2) Source(3, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(10, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(10, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(10, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(10, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(11, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(11, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(11, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(12, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(12, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(12, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(13, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(13, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(13, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(13, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(13, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(13, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(13, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(13, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
1 >
  >    
2 >    }
1 >Emitted(14, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(14, 6) Source(8, 6) + SourceIndex(3)
---
>>>
>>>    f();
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1 >
  >
  >    
2 >    f
3 >     ()
4 >       ;
1 >Emitted(16, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(16, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(16, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(16, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(17, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(17, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(17, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(17, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(17, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(17, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(17, 19) Source(11, 2) + SourceIndex(3)
---
>>>var normalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(18, 1) Source(13, 1) + SourceIndex(3)
---
>>>    /**@internal*/ function normalC() {}
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^
5 >                                       ^
1->class normalC {
  >    
2 >    /**@internal*/
3 >                   
4 >                   constructor() { 
5 >                                       }
1->Emitted(19, 5) Source(14, 5) + SourceIndex(3)
2 >Emitted(19, 19) Source(14, 19) + SourceIndex(3)
3 >Emitted(19, 20) Source(14, 20) + SourceIndex(3)
4 >Emitted(19, 40) Source(14, 36) + SourceIndex(3)
5 >Emitted(19, 41) Source(14, 37) + SourceIndex(3)
---
>>>
>>>    /**@internal*/ normalC.prototype.method = function () { };
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^^^^^
5 >                                           ^^^
6 >                                              ^^^^^^^^^^^^^^
7 >                                                            ^
1 >
  >    /**@internal*/ prop: string;
  >    
2 >    /**@internal*/
3 >                   
4 >                   method
5 >                                           
6 >                                              method() { 
7 >                                                            }
1 >Emitted(21, 5) Source(16, 5) + SourceIndex(3)
2 >Emitted(21, 19) Source(16, 19) + SourceIndex(3)
3 >Emitted(21, 20) Source(16, 20) + SourceIndex(3)
4 >Emitted(21, 44) Source(16, 26) + SourceIndex(3)
5 >Emitted(21, 47) Source(16, 20) + SourceIndex(3)
6 >Emitted(21, 61) Source(16, 31) + SourceIndex(3)
7 >Emitted(21, 62) Source(16, 32) + SourceIndex(3)
---
>>>    Object.defineProperty(normalC.prototype, "c", {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^^^^^^^^^^^^^^^^^^^^^^
4 >                                                ^^^^^^^^->
1 >
  >    /**@internal*/ 
2 >    get 
3 >                          c
1 >Emitted(22, 5) Source(17, 20) + SourceIndex(3)
2 >Emitted(22, 27) Source(17, 24) + SourceIndex(3)
3 >Emitted(22, 49) Source(17, 25) + SourceIndex(3)
---
>>>        /**@internal*/ get: function () { return 10; },
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^^^^^^
4 >                            ^^^^^^^^^^^^^^
5 >                                          ^^^^^^^
6 >                                                 ^^
7 >                                                   ^
8 >                                                    ^
9 >                                                     ^
1->
2 >        /**@internal*/
3 >                       
4 >                            get c() { 
5 >                                          return 
6 >                                                 10
7 >                                                   ;
8 >                                                     
9 >                                                     }
1->Emitted(23, 9) Source(17, 5) + SourceIndex(3)
2 >Emitted(23, 23) Source(17, 19) + SourceIndex(3)
3 >Emitted(23, 29) Source(17, 20) + SourceIndex(3)
4 >Emitted(23, 43) Source(17, 30) + SourceIndex(3)
5 >Emitted(23, 50) Source(17, 37) + SourceIndex(3)
6 >Emitted(23, 52) Source(17, 39) + SourceIndex(3)
7 >Emitted(23, 53) Source(17, 40) + SourceIndex(3)
8 >Emitted(23, 54) Source(17, 41) + SourceIndex(3)
9 >Emitted(23, 55) Source(17, 42) + SourceIndex(3)
---
>>>        /**@internal*/ set: function (val) { },
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^^^^^^
4 >                            ^^^^^^^^^^
5 >                                      ^^^
6 >                                         ^^^^
7 >                                             ^
1 >
  >    
2 >        /**@internal*/
3 >                       
4 >                            set c(
5 >                                      val: number
6 >                                         ) { 
7 >                                             }
1 >Emitted(24, 9) Source(18, 5) + SourceIndex(3)
2 >Emitted(24, 23) Source(18, 19) + SourceIndex(3)
3 >Emitted(24, 29) Source(18, 20) + SourceIndex(3)
4 >Emitted(24, 39) Source(18, 26) + SourceIndex(3)
5 >Emitted(24, 42) Source(18, 37) + SourceIndex(3)
6 >Emitted(24, 46) Source(18, 41) + SourceIndex(3)
7 >Emitted(24, 47) Source(18, 42) + SourceIndex(3)
---
>>>        enumerable: false,
>>>        configurable: true
>>>    });
1 >^^^^^^^
2 >       ^^^^^^^^^^^^^->
1 >
1 >Emitted(27, 8) Source(17, 42) + SourceIndex(3)
---
>>>    return normalC;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
  >    /**@internal*/ set c(val: number) { }
  >
2 >    }
1->Emitted(28, 5) Source(19, 1) + SourceIndex(3)
2 >Emitted(28, 19) Source(19, 2) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^->
1 >
2 >}
3 > 
4 > class normalC {
  >     /**@internal*/ constructor() { }
  >     /**@internal*/ prop: string;
  >     /**@internal*/ method() { }
  >     /**@internal*/ get c() { return 10; }
  >     /**@internal*/ set c(val: number) { }
  > }
1 >Emitted(29, 1) Source(19, 1) + SourceIndex(3)
2 >Emitted(29, 2) Source(19, 2) + SourceIndex(3)
3 >Emitted(29, 2) Source(13, 1) + SourceIndex(3)
4 >Emitted(29, 6) Source(19, 2) + SourceIndex(3)
---
>>>var normalN;
1->
2 >^^^^
3 >    ^^^^^^^
4 >           ^
5 >            ^^^^^^^^^^->
1->
  >
2 >namespace 
3 >    normalN
4 >            {
  >               /**@internal*/ export class C { }
  >               /**@internal*/ export function foo() {}
  >               /**@internal*/ export namespace someNamespace { export class C {} }
  >               /**@internal*/ export namespace someOther.something { export class someClass {} }
  >               /**@internal*/ export import someImport = someNamespace.C;
  >               /**@internal*/ export type internalType = internalC;
  >               /**@internal*/ export const internalConst = 10;
  >               /**@internal*/ export enum internalEnum { a, b, c }
  >           }
1->Emitted(30, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(30, 5) Source(20, 11) + SourceIndex(3)
3 >Emitted(30, 12) Source(20, 18) + SourceIndex(3)
4 >Emitted(30, 13) Source(29, 2) + SourceIndex(3)
---
>>>(function (normalN) {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^
4 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >namespace 
3 >           normalN
1->Emitted(31, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(31, 12) Source(20, 11) + SourceIndex(3)
3 >Emitted(31, 19) Source(20, 18) + SourceIndex(3)
---
>>>    /**@internal*/ var C = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^->
1-> {
  >    
2 >    /**@internal*/
3 >                   
1->Emitted(32, 5) Source(21, 5) + SourceIndex(3)
2 >Emitted(32, 19) Source(21, 19) + SourceIndex(3)
3 >Emitted(32, 20) Source(21, 20) + SourceIndex(3)
---
>>>        function C() {}
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^
1->
2 >        export class C { 
3 >                      }
1->Emitted(33, 9) Source(21, 20) + SourceIndex(3)
2 >Emitted(33, 23) Source(21, 37) + SourceIndex(3)
3 >Emitted(33, 24) Source(21, 38) + SourceIndex(3)
---
>>>        return C;
1 >^^^^^^^^
2 >        ^^^^^^^^
1 >
2 >        }
1 >Emitted(34, 9) Source(21, 37) + SourceIndex(3)
2 >Emitted(34, 17) Source(21, 38) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class C { }
1 >Emitted(35, 5) Source(21, 37) + SourceIndex(3)
2 >Emitted(35, 6) Source(21, 38) + SourceIndex(3)
3 >Emitted(35, 6) Source(21, 20) + SourceIndex(3)
4 >Emitted(35, 10) Source(21, 38) + SourceIndex(3)
---
>>>    normalN.C = C;
1->^^^^
2 >    ^^^^^^^^^
3 >             ^^^^
4 >                 ^
5 >                  ^^^^^^^^^^^^^^^^^^^^->
1->
2 >    C
3 >              { }
4 >                 
1->Emitted(36, 5) Source(21, 33) + SourceIndex(3)
2 >Emitted(36, 14) Source(21, 34) + SourceIndex(3)
3 >Emitted(36, 18) Source(21, 38) + SourceIndex(3)
4 >Emitted(36, 19) Source(21, 38) + SourceIndex(3)
---
>>>    /**@internal*/ function foo() { }
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^
5 >                            ^^^
6 >                               ^^^^^
7 >                                    ^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export function 
5 >                            foo
6 >                               () {
7 >                                    }
1->Emitted(37, 5) Source(22, 5) + SourceIndex(3)
2 >Emitted(37, 19) Source(22, 19) + SourceIndex(3)
3 >Emitted(37, 20) Source(22, 20) + SourceIndex(3)
4 >Emitted(37, 29) Source(22, 36) + SourceIndex(3)
5 >Emitted(37, 32) Source(22, 39) + SourceIndex(3)
6 >Emitted(37, 37) Source(22, 43) + SourceIndex(3)
7 >Emitted(37, 38) Source(22, 44) + SourceIndex(3)
---
>>>    normalN.foo = foo;
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^^^^^^^->
1 >
2 >    foo
3 >               () {}
4 >                     
1 >Emitted(38, 5) Source(22, 36) + SourceIndex(3)
2 >Emitted(38, 16) Source(22, 39) + SourceIndex(3)
3 >Emitted(38, 22) Source(22, 44) + SourceIndex(3)
4 >Emitted(38, 23) Source(22, 44) + SourceIndex(3)
---
>>>    /**@internal*/ var someNamespace;
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^^^^^
6 >                                    ^
7 >                                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                       someNamespace
6 >                                     { export class C {} }
1->Emitted(39, 5) Source(23, 5) + SourceIndex(3)
2 >Emitted(39, 19) Source(23, 19) + SourceIndex(3)
3 >Emitted(39, 20) Source(23, 20) + SourceIndex(3)
4 >Emitted(39, 24) Source(23, 37) + SourceIndex(3)
5 >Emitted(39, 37) Source(23, 50) + SourceIndex(3)
6 >Emitted(39, 38) Source(23, 72) + SourceIndex(3)
---
>>>    (function (someNamespace) {var C = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^
4 >                            ^^^
1->
2 >    export namespace 
3 >               someNamespace
4 >                             { 
1->Emitted(40, 5) Source(23, 20) + SourceIndex(3)
2 >Emitted(40, 16) Source(23, 37) + SourceIndex(3)
3 >Emitted(40, 29) Source(23, 50) + SourceIndex(3)
4 >Emitted(40, 32) Source(23, 53) + SourceIndex(3)
---
>>>            function C() {}
1 >^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^
3 >                          ^
1 >
2 >            export class C {
3 >                          }
1 >Emitted(41, 13) Source(23, 53) + SourceIndex(3)
2 >Emitted(41, 27) Source(23, 69) + SourceIndex(3)
3 >Emitted(41, 28) Source(23, 70) + SourceIndex(3)
---
>>>            return C;
1 >^^^^^^^^^^^^
2 >            ^^^^^^^^
1 >
2 >            }
1 >Emitted(42, 13) Source(23, 69) + SourceIndex(3)
2 >Emitted(42, 21) Source(23, 70) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class C {}
1 >Emitted(43, 9) Source(23, 69) + SourceIndex(3)
2 >Emitted(43, 10) Source(23, 70) + SourceIndex(3)
3 >Emitted(43, 10) Source(23, 53) + SourceIndex(3)
4 >Emitted(43, 14) Source(23, 70) + SourceIndex(3)
---
>>>        someNamespace.C = C;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^
3 >                       ^^^^
4 >                           ^
5 >                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        C
3 >                        {}
4 >                           
1->Emitted(44, 9) Source(23, 66) + SourceIndex(3)
2 >Emitted(44, 24) Source(23, 67) + SourceIndex(3)
3 >Emitted(44, 28) Source(23, 70) + SourceIndex(3)
4 >Emitted(44, 29) Source(23, 70) + SourceIndex(3)
---
>>>    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^^^
7 >                                            ^^^^^
8 >                                                 ^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       someNamespace
5 >                    
6 >                       someNamespace
7 >                                            
8 >                                                 someNamespace
9 >                                                                       { export class C {} }
1->Emitted(45, 5) Source(23, 71) + SourceIndex(3)
2 >Emitted(45, 6) Source(23, 72) + SourceIndex(3)
3 >Emitted(45, 8) Source(23, 37) + SourceIndex(3)
4 >Emitted(45, 21) Source(23, 50) + SourceIndex(3)
5 >Emitted(45, 24) Source(23, 37) + SourceIndex(3)
6 >Emitted(45, 45) Source(23, 50) + SourceIndex(3)
7 >Emitted(45, 50) Source(23, 37) + SourceIndex(3)
8 >Emitted(45, 71) Source(23, 50) + SourceIndex(3)
9 >Emitted(45, 79) Source(23, 72) + SourceIndex(3)
---
>>>    /**@internal*/ var someOther;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^
6 >                                ^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                       someOther
6 >                                .something { export class someClass {} }
1 >Emitted(46, 5) Source(24, 5) + SourceIndex(3)
2 >Emitted(46, 19) Source(24, 19) + SourceIndex(3)
3 >Emitted(46, 20) Source(24, 20) + SourceIndex(3)
4 >Emitted(46, 24) Source(24, 37) + SourceIndex(3)
5 >Emitted(46, 33) Source(24, 46) + SourceIndex(3)
6 >Emitted(46, 34) Source(24, 86) + SourceIndex(3)
---
>>>    (function (someOther) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
1 >
2 >    export namespace 
3 >               someOther
1 >Emitted(47, 5) Source(24, 20) + SourceIndex(3)
2 >Emitted(47, 16) Source(24, 37) + SourceIndex(3)
3 >Emitted(47, 25) Source(24, 46) + SourceIndex(3)
---
>>>        var something;
1 >^^^^^^^^
2 >        ^^^^
3 >            ^^^^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >.
2 >        
3 >            something
4 >                      { export class someClass {} }
1 >Emitted(48, 9) Source(24, 47) + SourceIndex(3)
2 >Emitted(48, 13) Source(24, 47) + SourceIndex(3)
3 >Emitted(48, 22) Source(24, 56) + SourceIndex(3)
4 >Emitted(48, 23) Source(24, 86) + SourceIndex(3)
---
>>>        (function (something) {var someClass = /** @class */ (function () {
1->^^^^^^^^
2 >        ^^^^^^^^^^^
3 >                   ^^^^^^^^^
4 >                            ^^^
5 >                               ^^^^^^^^^->
1->
2 >        
3 >                   something
4 >                             { 
1->Emitted(49, 9) Source(24, 47) + SourceIndex(3)
2 >Emitted(49, 20) Source(24, 47) + SourceIndex(3)
3 >Emitted(49, 29) Source(24, 56) + SourceIndex(3)
4 >Emitted(49, 32) Source(24, 59) + SourceIndex(3)
---
>>>                function someClass() {}
1->^^^^^^^^^^^^^^^^
2 >                ^^^^^^^^^^^^^^^^^^^^^^
3 >                                      ^
1->
2 >                export class someClass {
3 >                                      }
1->Emitted(50, 17) Source(24, 59) + SourceIndex(3)
2 >Emitted(50, 39) Source(24, 83) + SourceIndex(3)
3 >Emitted(50, 40) Source(24, 84) + SourceIndex(3)
---
>>>                return someClass;
1 >^^^^^^^^^^^^^^^^
2 >                ^^^^^^^^^^^^^^^^
1 >
2 >                }
1 >Emitted(51, 17) Source(24, 83) + SourceIndex(3)
2 >Emitted(51, 33) Source(24, 84) + SourceIndex(3)
---
>>>            }());
1 >^^^^^^^^^^^^
2 >            ^
3 >             
4 >             ^^^^
5 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >            }
3 >             
4 >             export class someClass {}
1 >Emitted(52, 13) Source(24, 83) + SourceIndex(3)
2 >Emitted(52, 14) Source(24, 84) + SourceIndex(3)
3 >Emitted(52, 14) Source(24, 59) + SourceIndex(3)
4 >Emitted(52, 18) Source(24, 84) + SourceIndex(3)
---
>>>            something.someClass = someClass;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >            someClass
3 >                                {}
4 >                                           
1->Emitted(53, 13) Source(24, 72) + SourceIndex(3)
2 >Emitted(53, 32) Source(24, 81) + SourceIndex(3)
3 >Emitted(53, 44) Source(24, 84) + SourceIndex(3)
4 >Emitted(53, 45) Source(24, 84) + SourceIndex(3)
---
>>>        })(something = someOther.something || (someOther.something = {}));
1->^^^^^^^^
2 >        ^
3 >         ^^
4 >           ^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^
9 >                                                                  ^^^^^^^^
1-> 
2 >        }
3 >         
4 >           something
5 >                    
6 >                       something
7 >                                          
8 >                                               something
9 >                                                                   { export class someClass {} }
1->Emitted(54, 9) Source(24, 85) + SourceIndex(3)
2 >Emitted(54, 10) Source(24, 86) + SourceIndex(3)
3 >Emitted(54, 12) Source(24, 47) + SourceIndex(3)
4 >Emitted(54, 21) Source(24, 56) + SourceIndex(3)
5 >Emitted(54, 24) Source(24, 47) + SourceIndex(3)
6 >Emitted(54, 43) Source(24, 56) + SourceIndex(3)
7 >Emitted(54, 48) Source(24, 47) + SourceIndex(3)
8 >Emitted(54, 67) Source(24, 56) + SourceIndex(3)
9 >Emitted(54, 75) Source(24, 86) + SourceIndex(3)
---
>>>    })(someOther = normalN.someOther || (normalN.someOther = {}));
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^
7 >                                    ^^^^^
8 >                                         ^^^^^^^^^^^^^^^^^
9 >                                                          ^^^^^^^^
1 >
2 >    }
3 >     
4 >       someOther
5 >                
6 >                   someOther
7 >                                    
8 >                                         someOther
9 >                                                          .something { export class someClass {} }
1 >Emitted(55, 5) Source(24, 85) + SourceIndex(3)
2 >Emitted(55, 6) Source(24, 86) + SourceIndex(3)
3 >Emitted(55, 8) Source(24, 37) + SourceIndex(3)
4 >Emitted(55, 17) Source(24, 46) + SourceIndex(3)
5 >Emitted(55, 20) Source(24, 37) + SourceIndex(3)
6 >Emitted(55, 37) Source(24, 46) + SourceIndex(3)
7 >Emitted(55, 42) Source(24, 37) + SourceIndex(3)
8 >Emitted(55, 59) Source(24, 46) + SourceIndex(3)
9 >Emitted(55, 67) Source(24, 86) + SourceIndex(3)
---
>>>    /**@internal*/ normalN.someImport = someNamespace.C;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^
5 >                                     ^^^
6 >                                        ^^^^^^^^^^^^^
7 >                                                     ^
8 >                                                      ^
9 >                                                       ^
1 >
  >    
2 >    /**@internal*/
3 >                   export import 
4 >                   someImport
5 >                                      = 
6 >                                        someNamespace
7 >                                                     .
8 >                                                      C
9 >                                                       ;
1 >Emitted(56, 5) Source(25, 5) + SourceIndex(3)
2 >Emitted(56, 19) Source(25, 19) + SourceIndex(3)
3 >Emitted(56, 20) Source(25, 34) + SourceIndex(3)
4 >Emitted(56, 38) Source(25, 44) + SourceIndex(3)
5 >Emitted(56, 41) Source(25, 47) + SourceIndex(3)
6 >Emitted(56, 54) Source(25, 60) + SourceIndex(3)
7 >Emitted(56, 55) Source(25, 61) + SourceIndex(3)
8 >Emitted(56, 56) Source(25, 62) + SourceIndex(3)
9 >Emitted(56, 57) Source(25, 63) + SourceIndex(3)
---
>>>
>>>    /**@internal*/ normalN.internalConst = 10;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^^
5 >                                        ^^^
6 >                                           ^^
7 >                                             ^
1 >
  >    /**@internal*/ export type internalType = internalC;
  >    
2 >    /**@internal*/
3 >                   export const 
4 >                   internalConst
5 >                                         = 
6 >                                           10
7 >                                             ;
1 >Emitted(58, 5) Source(27, 5) + SourceIndex(3)
2 >Emitted(58, 19) Source(27, 19) + SourceIndex(3)
3 >Emitted(58, 20) Source(27, 33) + SourceIndex(3)
4 >Emitted(58, 41) Source(27, 46) + SourceIndex(3)
5 >Emitted(58, 44) Source(27, 49) + SourceIndex(3)
6 >Emitted(58, 46) Source(27, 51) + SourceIndex(3)
7 >Emitted(58, 47) Source(27, 52) + SourceIndex(3)
---
>>>    /**@internal*/ var internalEnum;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^^^^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export enum 
5 >                       internalEnum { a, b, c }
1 >Emitted(59, 5) Source(28, 5) + SourceIndex(3)
2 >Emitted(59, 19) Source(28, 19) + SourceIndex(3)
3 >Emitted(59, 20) Source(28, 20) + SourceIndex(3)
4 >Emitted(59, 24) Source(28, 32) + SourceIndex(3)
5 >Emitted(59, 36) Source(28, 56) + SourceIndex(3)
---
>>>    (function (internalEnum) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^
4 >                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    export enum 
3 >               internalEnum
1 >Emitted(60, 5) Source(28, 20) + SourceIndex(3)
2 >Emitted(60, 16) Source(28, 32) + SourceIndex(3)
3 >Emitted(60, 28) Source(28, 44) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
5 >                                                                                           ^
6 >                                                                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
7 >                                                                                                                                     ^
1-> { 
2 >        a
3 >                                                 , 
4 >                                                  b
5 >                                                                                           , 
6 >                                                                                            c
7 >                                                                                                                                     
1->Emitted(61, 9) Source(28, 47) + SourceIndex(3)
2 >Emitted(61, 50) Source(28, 48) + SourceIndex(3)
3 >Emitted(61, 51) Source(28, 50) + SourceIndex(3)
4 >Emitted(61, 92) Source(28, 51) + SourceIndex(3)
5 >Emitted(61, 93) Source(28, 53) + SourceIndex(3)
6 >Emitted(61, 134) Source(28, 54) + SourceIndex(3)
7 >Emitted(61, 135) Source(28, 54) + SourceIndex(3)
---
>>>    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^
5 >                   ^^^
6 >                      ^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^
9 >                                                                   ^^^^^^^^
1 > 
2 >    }
3 >     
4 >       internalEnum
5 >                   
6 >                      internalEnum
7 >                                          
8 >                                               internalEnum
9 >                                                                    { a, b, c }
1 >Emitted(62, 5) Source(28, 55) + SourceIndex(3)
2 >Emitted(62, 6) Source(28, 56) + SourceIndex(3)
3 >Emitted(62, 8) Source(28, 32) + SourceIndex(3)
4 >Emitted(62, 20) Source(28, 44) + SourceIndex(3)
5 >Emitted(62, 23) Source(28, 32) + SourceIndex(3)
6 >Emitted(62, 43) Source(28, 44) + SourceIndex(3)
7 >Emitted(62, 48) Source(28, 32) + SourceIndex(3)
8 >Emitted(62, 68) Source(28, 44) + SourceIndex(3)
9 >Emitted(62, 76) Source(28, 56) + SourceIndex(3)
---
>>>})(normalN || (normalN = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^
5 >          ^^^^^
6 >               ^^^^^^^
7 >                      ^^^^^^^^
8 >                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
3 > 
4 >   normalN
5 >          
6 >               normalN
7 >                       {
  >                          /**@internal*/ export class C { }
  >                          /**@internal*/ export function foo() {}
  >                          /**@internal*/ export namespace someNamespace { export class C {} }
  >                          /**@internal*/ export namespace someOther.something { export class someClass {} }
  >                          /**@internal*/ export import someImport = someNamespace.C;
  >                          /**@internal*/ export type internalType = internalC;
  >                          /**@internal*/ export const internalConst = 10;
  >                          /**@internal*/ export enum internalEnum { a, b, c }
  >                      }
1 >Emitted(63, 1) Source(29, 1) + SourceIndex(3)
2 >Emitted(63, 2) Source(29, 2) + SourceIndex(3)
3 >Emitted(63, 4) Source(20, 11) + SourceIndex(3)
4 >Emitted(63, 11) Source(20, 18) + SourceIndex(3)
5 >Emitted(63, 16) Source(20, 11) + SourceIndex(3)
6 >Emitted(63, 23) Source(20, 18) + SourceIndex(3)
7 >Emitted(63, 31) Source(29, 2) + SourceIndex(3)
---
>>>/**@internal*/ var internalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^^->
1->
  >
2 >/**@internal*/
3 >               
1->Emitted(64, 1) Source(30, 1) + SourceIndex(3)
2 >Emitted(64, 15) Source(30, 15) + SourceIndex(3)
3 >Emitted(64, 16) Source(30, 16) + SourceIndex(3)
---
>>>    function internalC() {}
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^
1->
2 >    class internalC {
3 >                          }
1->Emitted(65, 5) Source(30, 16) + SourceIndex(3)
2 >Emitted(65, 27) Source(30, 33) + SourceIndex(3)
3 >Emitted(65, 28) Source(30, 34) + SourceIndex(3)
---
>>>    return internalC;
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^
1 >
2 >    }
1 >Emitted(66, 5) Source(30, 33) + SourceIndex(3)
2 >Emitted(66, 21) Source(30, 34) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class internalC {}
1 >Emitted(67, 1) Source(30, 33) + SourceIndex(3)
2 >Emitted(67, 2) Source(30, 34) + SourceIndex(3)
3 >Emitted(67, 2) Source(30, 16) + SourceIndex(3)
4 >Emitted(67, 6) Source(30, 34) + SourceIndex(3)
---
>>>/**@internal*/ function internalfoo() { }
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^
5 >                        ^^^^^^^^^^^
6 >                                   ^^^^^
7 >                                        ^
1->
  >
2 >/**@internal*/
3 >               
4 >               function 
5 >                        internalfoo
6 >                                   () {
7 >                                        }
1->Emitted(68, 1) Source(31, 1) + SourceIndex(3)
2 >Emitted(68, 15) Source(31, 15) + SourceIndex(3)
3 >Emitted(68, 16) Source(31, 16) + SourceIndex(3)
4 >Emitted(68, 25) Source(31, 25) + SourceIndex(3)
5 >Emitted(68, 36) Source(31, 36) + SourceIndex(3)
6 >Emitted(68, 41) Source(31, 40) + SourceIndex(3)
7 >Emitted(68, 42) Source(31, 41) + SourceIndex(3)
---
>>>/**@internal*/ var internalNamespace;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^^^^^
6 >                                    ^
7 >                                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                   internalNamespace
6 >                                     { export class someClass {} }
1 >Emitted(69, 1) Source(32, 1) + SourceIndex(3)
2 >Emitted(69, 15) Source(32, 15) + SourceIndex(3)
3 >Emitted(69, 16) Source(32, 16) + SourceIndex(3)
4 >Emitted(69, 20) Source(32, 26) + SourceIndex(3)
5 >Emitted(69, 37) Source(32, 43) + SourceIndex(3)
6 >Emitted(69, 38) Source(32, 73) + SourceIndex(3)
---
>>>(function (internalNamespace) {var someClass = /** @class */ (function () {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^^^^^
4 >                            ^^^
5 >                               ^->
1->
2 >namespace 
3 >           internalNamespace
4 >                             { 
1->Emitted(70, 1) Source(32, 16) + SourceIndex(3)
2 >Emitted(70, 12) Source(32, 26) + SourceIndex(3)
3 >Emitted(70, 29) Source(32, 43) + SourceIndex(3)
4 >Emitted(70, 32) Source(32, 46) + SourceIndex(3)
---
>>>        function someClass() {}
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
3 >                              ^
1->
2 >        export class someClass {
3 >                              }
1->Emitted(71, 9) Source(32, 46) + SourceIndex(3)
2 >Emitted(71, 31) Source(32, 70) + SourceIndex(3)
3 >Emitted(71, 32) Source(32, 71) + SourceIndex(3)
---
>>>        return someClass;
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^
1 >
2 >        }
1 >Emitted(72, 9) Source(32, 70) + SourceIndex(3)
2 >Emitted(72, 25) Source(32, 71) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class someClass {}
1 >Emitted(73, 5) Source(32, 70) + SourceIndex(3)
2 >Emitted(73, 6) Source(32, 71) + SourceIndex(3)
3 >Emitted(73, 6) Source(32, 46) + SourceIndex(3)
4 >Emitted(73, 10) Source(32, 71) + SourceIndex(3)
---
>>>    internalNamespace.someClass = someClass;
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^->
1->
2 >    someClass
3 >                                {}
4 >                                           
1->Emitted(74, 5) Source(32, 59) + SourceIndex(3)
2 >Emitted(74, 32) Source(32, 68) + SourceIndex(3)
3 >Emitted(74, 44) Source(32, 71) + SourceIndex(3)
4 >Emitted(74, 45) Source(32, 71) + SourceIndex(3)
---
>>>})(internalNamespace || (internalNamespace = {}));
1->
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^^^^^
5 >                    ^^^^^
6 >                         ^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^^^^
1-> 
2 >}
3 > 
4 >   internalNamespace
5 >                    
6 >                         internalNamespace
7 >                                           { export class someClass {} }
1->Emitted(75, 1) Source(32, 72) + SourceIndex(3)
2 >Emitted(75, 2) Source(32, 73) + SourceIndex(3)
3 >Emitted(75, 4) Source(32, 26) + SourceIndex(3)
4 >Emitted(75, 21) Source(32, 43) + SourceIndex(3)
5 >Emitted(75, 26) Source(32, 26) + SourceIndex(3)
6 >Emitted(75, 43) Source(32, 43) + SourceIndex(3)
7 >Emitted(75, 51) Source(32, 73) + SourceIndex(3)
---
>>>/**@internal*/ var internalOther;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^
6 >                                ^
1 >
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                   internalOther
6 >                                .something { export class someClass {} }
1 >Emitted(76, 1) Source(33, 1) + SourceIndex(3)
2 >Emitted(76, 15) Source(33, 15) + SourceIndex(3)
3 >Emitted(76, 16) Source(33, 16) + SourceIndex(3)
4 >Emitted(76, 20) Source(33, 26) + SourceIndex(3)
5 >Emitted(76, 33) Source(33, 39) + SourceIndex(3)
6 >Emitted(76, 34) Source(33, 79) + SourceIndex(3)
---
>>>(function (internalOther) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^
1 >
2 >namespace 
3 >           internalOther
1 >Emitted(77, 1) Source(33, 16) + SourceIndex(3)
2 >Emitted(77, 12) Source(33, 26) + SourceIndex(3)
3 >Emitted(77, 25) Source(33, 39) + SourceIndex(3)
---
>>>    var something;
1 >^^^^
2 >    ^^^^
3 >        ^^^^^^^^^
4 >                 ^
5 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >.
2 >    
3 >        something
4 >                  { export class someClass {} }
1 >Emitted(78, 5) Source(33, 40) + SourceIndex(3)
2 >Emitted(78, 9) Source(33, 40) + SourceIndex(3)
3 >Emitted(78, 18) Source(33, 49) + SourceIndex(3)
4 >Emitted(78, 19) Source(33, 79) + SourceIndex(3)
---
>>>    (function (something) {var someClass = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
4 >                        ^^^
5 >                           ^^^^^^^^^->
1->
2 >    
3 >               something
4 >                         { 
1->Emitted(79, 5) Source(33, 40) + SourceIndex(3)
2 >Emitted(79, 16) Source(33, 40) + SourceIndex(3)
3 >Emitted(79, 25) Source(33, 49) + SourceIndex(3)
4 >Emitted(79, 28) Source(33, 52) + SourceIndex(3)
---
>>>            function someClass() {}
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^^^^
3 >                                  ^
1->
2 >            export class someClass {
3 >                                  }
1->Emitted(80, 13) Source(33, 52) + SourceIndex(3)
2 >Emitted(80, 35) Source(33, 76) + SourceIndex(3)
3 >Emitted(80, 36) Source(33, 77) + SourceIndex(3)
---
>>>            return someClass;
1 >^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^
1 >
2 >            }
1 >Emitted(81, 13) Source(33, 76) + SourceIndex(3)
2 >Emitted(81, 29) Source(33, 77) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class someClass {}
1 >Emitted(82, 9) Source(33, 76) + SourceIndex(3)
2 >Emitted(82, 10) Source(33, 77) + SourceIndex(3)
3 >Emitted(82, 10) Source(33, 52) + SourceIndex(3)
4 >Emitted(82, 14) Source(33, 77) + SourceIndex(3)
---
>>>        something.someClass = someClass;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^
3 >                           ^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        someClass
3 >                            {}
4 >                                       
1->Emitted(83, 9) Source(33, 65) + SourceIndex(3)
2 >Emitted(83, 28) Source(33, 74) + SourceIndex(3)
3 >Emitted(83, 40) Source(33, 77) + SourceIndex(3)
4 >Emitted(83, 41) Source(33, 77) + SourceIndex(3)
---
>>>    })(something = internalOther.something || (internalOther.something = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       something
5 >                
6 >                   something
7 >                                          
8 >                                               something
9 >                                                                       { export class someClass {} }
1->Emitted(84, 5) Source(33, 78) + SourceIndex(3)
2 >Emitted(84, 6) Source(33, 79) + SourceIndex(3)
3 >Emitted(84, 8) Source(33, 40) + SourceIndex(3)
4 >Emitted(84, 17) Source(33, 49) + SourceIndex(3)
5 >Emitted(84, 20) Source(33, 40) + SourceIndex(3)
6 >Emitted(84, 43) Source(33, 49) + SourceIndex(3)
7 >Emitted(84, 48) Source(33, 40) + SourceIndex(3)
8 >Emitted(84, 71) Source(33, 49) + SourceIndex(3)
9 >Emitted(84, 79) Source(33, 79) + SourceIndex(3)
---
>>>})(internalOther || (internalOther = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^
5 >                ^^^^^
6 >                     ^^^^^^^^^^^^^
7 >                                  ^^^^^^^^
8 >                                          ^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 >   internalOther
5 >                
6 >                     internalOther
7 >                                  .something { export class someClass {} }
1 >Emitted(85, 1) Source(33, 78) + SourceIndex(3)
2 >Emitted(85, 2) Source(33, 79) + SourceIndex(3)
3 >Emitted(85, 4) Source(33, 26) + SourceIndex(3)
4 >Emitted(85, 17) Source(33, 39) + SourceIndex(3)
5 >Emitted(85, 22) Source(33, 26) + SourceIndex(3)
6 >Emitted(85, 35) Source(33, 39) + SourceIndex(3)
7 >Emitted(85, 43) Source(33, 79) + SourceIndex(3)
---
>>>/**@internal*/ var internalImport = internalNamespace.someClass;
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^^
6 >                                 ^^^
7 >                                    ^^^^^^^^^^^^^^^^^
8 >                                                     ^
9 >                                                      ^^^^^^^^^
10>                                                               ^
1->
  >
2 >/**@internal*/
3 >               
4 >               import 
5 >                   internalImport
6 >                                  = 
7 >                                    internalNamespace
8 >                                                     .
9 >                                                      someClass
10>                                                               ;
1->Emitted(86, 1) Source(34, 1) + SourceIndex(3)
2 >Emitted(86, 15) Source(34, 15) + SourceIndex(3)
3 >Emitted(86, 16) Source(34, 16) + SourceIndex(3)
4 >Emitted(86, 20) Source(34, 23) + SourceIndex(3)
5 >Emitted(86, 34) Source(34, 37) + SourceIndex(3)
6 >Emitted(86, 37) Source(34, 40) + SourceIndex(3)
7 >Emitted(86, 54) Source(34, 57) + SourceIndex(3)
8 >Emitted(86, 55) Source(34, 58) + SourceIndex(3)
9 >Emitted(86, 64) Source(34, 67) + SourceIndex(3)
10>Emitted(86, 65) Source(34, 68) + SourceIndex(3)
---
>>>
>>>/**@internal*/ var internalConst = 10;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^
6 >                                ^^^
7 >                                   ^^
8 >                                     ^
1 >
  >/**@internal*/ type internalType = internalC;
  >
2 >/**@internal*/
3 >               
4 >               const 
5 >                   internalConst
6 >                                 = 
7 >                                   10
8 >                                     ;
1 >Emitted(88, 1) Source(36, 1) + SourceIndex(3)
2 >Emitted(88, 15) Source(36, 15) + SourceIndex(3)
3 >Emitted(88, 16) Source(36, 16) + SourceIndex(3)
4 >Emitted(88, 20) Source(36, 22) + SourceIndex(3)
5 >Emitted(88, 33) Source(36, 35) + SourceIndex(3)
6 >Emitted(88, 36) Source(36, 38) + SourceIndex(3)
7 >Emitted(88, 38) Source(36, 40) + SourceIndex(3)
8 >Emitted(88, 39) Source(36, 41) + SourceIndex(3)
---
>>>/**@internal*/ var internalEnum;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^
1 >
  >
2 >/**@internal*/
3 >               
4 >               enum 
5 >                   internalEnum { a, b, c }
1 >Emitted(89, 1) Source(37, 1) + SourceIndex(3)
2 >Emitted(89, 15) Source(37, 15) + SourceIndex(3)
3 >Emitted(89, 16) Source(37, 16) + SourceIndex(3)
4 >Emitted(89, 20) Source(37, 21) + SourceIndex(3)
5 >Emitted(89, 32) Source(37, 45) + SourceIndex(3)
---
>>>(function (internalEnum) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^
4 >                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >enum 
3 >           internalEnum
1 >Emitted(90, 1) Source(37, 16) + SourceIndex(3)
2 >Emitted(90, 12) Source(37, 21) + SourceIndex(3)
3 >Emitted(90, 24) Source(37, 33) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
4 >                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
5 >                                                                                       ^
6 >                                                                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
7 >                                                                                                                                 ^
1-> { 
2 >    a
3 >                                             , 
4 >                                              b
5 >                                                                                       , 
6 >                                                                                        c
7 >                                                                                                                                 
1->Emitted(91, 5) Source(37, 36) + SourceIndex(3)
2 >Emitted(91, 46) Source(37, 37) + SourceIndex(3)
3 >Emitted(91, 47) Source(37, 39) + SourceIndex(3)
4 >Emitted(91, 88) Source(37, 40) + SourceIndex(3)
5 >Emitted(91, 89) Source(37, 42) + SourceIndex(3)
6 >Emitted(91, 130) Source(37, 43) + SourceIndex(3)
7 >Emitted(91, 131) Source(37, 43) + SourceIndex(3)
---
>>>})(internalEnum || (internalEnum = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^
5 >               ^^^^^
6 >                    ^^^^^^^^^^^^
7 >                                ^^^^^^^^
1 > 
2 >}
3 > 
4 >   internalEnum
5 >               
6 >                    internalEnum
7 >                                 { a, b, c }
1 >Emitted(92, 1) Source(37, 44) + SourceIndex(3)
2 >Emitted(92, 2) Source(37, 45) + SourceIndex(3)
3 >Emitted(92, 4) Source(37, 21) + SourceIndex(3)
4 >Emitted(92, 16) Source(37, 33) + SourceIndex(3)
5 >Emitted(92, 21) Source(37, 21) + SourceIndex(3)
6 >Emitted(92, 33) Source(37, 33) + SourceIndex(3)
7 >Emitted(92, 41) Source(37, 45) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = /** @class */ (function () {
1 >
2 >^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(93, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(94, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }C.prototype.doSomething = function () {
1->^^^^
2 >    ^
3 >     
4 >     ^^^^^^^^^^^^^^^^^^^^^^^
5 >                            ^^^
6 >                               ^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
3 >     
4 >     doSomething
5 >                            
1->Emitted(95, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(95, 6) Source(5, 2) + SourceIndex(4)
3 >Emitted(95, 6) Source(2, 5) + SourceIndex(4)
4 >Emitted(95, 29) Source(2, 16) + SourceIndex(4)
5 >Emitted(95, 32) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(96, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(96, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(96, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(96, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(96, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(96, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(96, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(96, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(97, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(97, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(98, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(98, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(99, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(99, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(99, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(99, 6) Source(5, 2) + SourceIndex(4)
---
>>>//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "../second",
    "sourceFiles": [
      "../second/second_part1.ts",
      "../second/second_part2.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 131,
          "kind": "prepend",
          "data": "../first/bin/first-output.js",
          "texts": [
            {
              "pos": 0,
              "end": 131,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 131,
          "end": 3418,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 172,
          "kind": "prepend",
          "data": "../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 54,
              "kind": "internal"
            },
            {
              "pos": 56,
              "end": 172,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 172,
          "end": 249,
          "kind": "text"
        },
        {
          "pos": 249,
          "end": 429,
          "kind": "internal"
        },
        {
          "pos": 431,
          "end": 463,
          "kind": "text"
        },
        {
          "pos": 463,
          "end": 975,
          "kind": "internal"
        },
        {
          "pos": 977,
          "end": 980,
          "kind": "text"
        },
        {
          "pos": 980,
          "end": 1513,
          "kind": "internal"
        },
        {
          "pos": 1515,
          "end": 1563,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/2/second-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/2/second-output.js
----------------------------------------------------------------------
prepend: (0-131):: ../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (0-131)
/**@internal*/ 

var s = "Hello, world";

console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
text: (131-3418)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }

    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /**@internal*/ function normalC() {}

    /**@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /**@internal*/ get: function () { return 10; },
        /**@internal*/ set: function (val) { },
        enumerable: false,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /**@internal*/ var C = /** @class */ (function () {
        function C() {}
        return C;
    }());
    normalN.C = C;
    /**@internal*/ function foo() { }
    normalN.foo = foo;
    /**@internal*/ var someNamespace;
    (function (someNamespace) {var C = /** @class */ (function () {
            function C() {}
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /**@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {var someClass = /** @class */ (function () {
                function someClass() {}
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /**@internal*/ normalN.someImport = someNamespace.C;

    /**@internal*/ normalN.internalConst = 10;
    /**@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/**@internal*/ var internalC = /** @class */ (function () {
    function internalC() {}
    return internalC;
}());
/**@internal*/ function internalfoo() { }
/**@internal*/ var internalNamespace;
(function (internalNamespace) {var someClass = /** @class */ (function () {
        function someClass() {}
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/**@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {var someClass = /** @class */ (function () {
            function someClass() {}
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/**@internal*/ var internalImport = internalNamespace.someClass;

/**@internal*/ var internalConst = 10;
/**@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

======================================================================
======================================================================
File:: /src/2/second-output.d.ts
----------------------------------------------------------------------
prepend: (0-172):: ../first/bin/first-output.d.ts texts:: 2
>>--------------------------------------------------------------------
internal: (0-54)
/**@internal*/ interface TheFirst {
    none: any;
}
>>--------------------------------------------------------------------
text: (56-172)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
text: (172-249)
declare namespace N {
}
declare namespace N {
}
declare class normalC {

----------------------------------------------------------------------
internal: (249-429)
    /**@internal*/ constructor();
    /**@internal*/ prop: string;
    /**@internal*/ method(): void;
    /**@internal*/ get c(): number;
    /**@internal*/ set c(val: number);
----------------------------------------------------------------------
text: (431-463)
}
declare namespace normalN {

----------------------------------------------------------------------
internal: (463-975)
    /**@internal*/ class C {
    }
    /**@internal*/ function foo(): void;
    /**@internal*/ namespace someNamespace {
        class C {
        }
    }
    /**@internal*/ namespace someOther.something {
        class someClass {
        }
    }
    /**@internal*/ export import someImport = someNamespace.C;
    /**@internal*/ type internalType = internalC;
    /**@internal*/ const internalConst = 10;
    /**@internal*/ enum internalEnum {
        a = 0,
        b = 1,
        c = 2
    }
----------------------------------------------------------------------
text: (977-980)
}

----------------------------------------------------------------------
internal: (980-1513)
/**@internal*/ declare class internalC {
}
/**@internal*/ declare function internalfoo(): void;
/**@internal*/ declare namespace internalNamespace {
    class someClass {
    }
}
/**@internal*/ declare namespace internalOther.something {
    class someClass {
    }
}
/**@internal*/ import internalImport = internalNamespace.someClass;
/**@internal*/ declare type internalType = internalC;
/**@internal*/ declare const internalConst = 10;
/**@internal*/ declare enum internalEnum {
    a = 0,
    b = 1,
    c = 2
}
----------------------------------------------------------------------
text: (1515-1563)
declare class C {
    doSomething(): void;
}

======================================================================

//// [/src/first/bin/first-output.d.ts]
/**@internal*/ interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;
//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,cAAc,CAAC,UAAU,QAAQ;IAC7B,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>/**@internal*/ interface TheFirst {
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^
5 >                         ^^^^^^^^
1 >
2 >/**@internal*/
3 >               
4 >               interface 
5 >                         TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 15) Source(1, 15) + SourceIndex(0)
3 >Emitted(1, 16) Source(1, 16) + SourceIndex(0)
4 >Emitted(1, 26) Source(1, 26) + SourceIndex(0)
5 >Emitted(1, 34) Source(1, 34) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^->
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(8, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
/**@internal*/ 

var s = "Hello, world";

console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,cAAc;;AAId,IAAM,CAAC,GAAG,cAAc,CAAC;;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>/**@internal*/ 
1 >
2 >^^^^^^^^^^^^^^
1 >
2 >/**@internal*/
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 15) Source(1, 15) + SourceIndex(0)
---
>>>
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 > interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(3, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(3, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(3, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(3, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(3, 24) Source(5, 26) + SourceIndex(0)
---
>>>
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(5, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(5, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(5, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(5, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(5, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(5, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(5, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(5, 16) Source(11, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(6, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(6, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(6, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(6, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(6, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(6, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(6, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(6, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(6, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(7, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(7, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(7, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(8, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(8, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(8, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(8, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(9, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(9, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 131,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 54,
          "kind": "internal"
        },
        {
          "pos": 56,
          "end": 172,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
text: (0-131)
/**@internal*/ 

var s = "Hello, world";

console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
internal: (0-54)
/**@internal*/ interface TheFirst {
    none: any;
}
----------------------------------------------------------------------
text: (56-172)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

======================================================================

//// [/src/first/first_PART1.ts]
/**@internal*/ interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);


//// [/src/first/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": false,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "outFile": "./bin/first-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "first_PART1.ts",
    "first_part2.ts",
    "first_part3.ts"
  ],
  "references": [
  ]
}


//// [/src/second/second_part1.ts]
namespace N {
    // Comment text
}

namespace N {
    function f() {
        console.log('testing');
    }

    f();
}

class normalC {
    /**@internal*/ constructor() { }
    /**@internal*/ prop: string;
    /**@internal*/ method() { }
    /**@internal*/ get c() { return 10; }
    /**@internal*/ set c(val: number) { }
}
namespace normalN {
    /**@internal*/ export class C { }
    /**@internal*/ export function foo() {}
    /**@internal*/ export namespace someNamespace { export class C {} }
    /**@internal*/ export namespace someOther.something { export class someClass {} }
    /**@internal*/ export import someImport = someNamespace.C;
    /**@internal*/ export type internalType = internalC;
    /**@internal*/ export const internalConst = 10;
    /**@internal*/ export enum internalEnum { a, b, c }
}
/**@internal*/ class internalC {}
/**@internal*/ function internalfoo() {}
/**@internal*/ namespace internalNamespace { export class someClass {} }
/**@internal*/ namespace internalOther.something { export class someClass {} }
/**@internal*/ import internalImport = internalNamespace.someClass;
/**@internal*/ type internalType = internalC;
/**@internal*/ const internalConst = 10;
/**@internal*/ enum internalEnum { a, b, c }

//// [/src/second/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": false,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "outFile": "../2/second-output.js",
    "skipDefaultLibCheck": true
  },
  "references": [
    { "path": "../first", "prepend": true }
  ]
}


//// [/src/third/thirdjs/output/third-output.d.ts]
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;
declare namespace N {
}
declare namespace N {
}
declare class normalC {
}
declare namespace normalN {
}
declare class C {
    doSomething(): void;
}
declare var c: C;
//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.d.ts.map]
{"version":3,"file":"third-output.d.ts","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAIA,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACRD,iBAAS,CAAC,WAET;ACFD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;AAED,cAAM,OAAO;CAMZ;AACD,kBAAU,OAAO,CAAC;CASjB;AC5BD,cAAM,CAAC;IACH,WAAW;CAGd;ACJD,QAAA,IAAI,CAAC,GAAU,CAAC"}

//// [/src/third/thirdjs/output/third-output.d.ts.map.baseline.txt]
===================================================================
JsFile: third-output.d.ts
mapUrl: third-output.d.ts.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>declare const s = "Hello, world";
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1 >/**@internal*/ interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(1, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(1, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(1, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(2, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(2, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(2, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(3, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(3, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(3, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(3, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(3, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(4, 2) Source(9, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(5, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(5, 18) Source(1, 10) + SourceIndex(1)
3 >Emitted(5, 19) Source(1, 11) + SourceIndex(1)
4 >Emitted(5, 30) Source(3, 2) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(6, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(6, 19) Source(1, 11) + SourceIndex(2)
3 >Emitted(6, 20) Source(1, 12) + SourceIndex(2)
4 >Emitted(6, 21) Source(1, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(8, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(8, 19) Source(5, 11) + SourceIndex(2)
3 >Emitted(8, 20) Source(5, 12) + SourceIndex(2)
4 >Emitted(8, 21) Source(5, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(9, 2) Source(11, 2) + SourceIndex(2)
---
>>>declare class normalC {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^^
1->
  >
  >
2 >class 
3 >              normalC
1->Emitted(10, 1) Source(13, 1) + SourceIndex(2)
2 >Emitted(10, 15) Source(13, 7) + SourceIndex(2)
3 >Emitted(10, 22) Source(13, 14) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > {
  >    /**@internal*/ constructor() { }
  >    /**@internal*/ prop: string;
  >    /**@internal*/ method() { }
  >    /**@internal*/ get c() { return 10; }
  >    /**@internal*/ set c(val: number) { }
  >}
1 >Emitted(11, 2) Source(19, 2) + SourceIndex(2)
---
>>>declare namespace normalN {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^^^^^^^
4 >                         ^
1->
  >
2 >namespace 
3 >                  normalN
4 >                          
1->Emitted(12, 1) Source(20, 1) + SourceIndex(2)
2 >Emitted(12, 19) Source(20, 11) + SourceIndex(2)
3 >Emitted(12, 26) Source(20, 18) + SourceIndex(2)
4 >Emitted(12, 27) Source(20, 19) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >{
  >    /**@internal*/ export class C { }
  >    /**@internal*/ export function foo() {}
  >    /**@internal*/ export namespace someNamespace { export class C {} }
  >    /**@internal*/ export namespace someOther.something { export class someClass {} }
  >    /**@internal*/ export import someImport = someNamespace.C;
  >    /**@internal*/ export type internalType = internalC;
  >    /**@internal*/ export const internalConst = 10;
  >    /**@internal*/ export enum internalEnum { a, b, c }
  >}
1 >Emitted(13, 2) Source(29, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(14, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(14, 15) Source(1, 7) + SourceIndex(3)
3 >Emitted(14, 16) Source(1, 8) + SourceIndex(3)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(15, 5) Source(2, 5) + SourceIndex(3)
2 >Emitted(15, 16) Source(2, 16) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(16, 2) Source(5, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>declare var c: C;
1->
2 >^^^^^^^^
3 >        ^^^^
4 >            ^
5 >             ^^^
6 >                ^
7 >                 ^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >
3 >        var 
4 >            c
5 >              = new C()
6 >                ;
1->Emitted(17, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(17, 9) Source(1, 1) + SourceIndex(4)
3 >Emitted(17, 13) Source(1, 5) + SourceIndex(4)
4 >Emitted(17, 14) Source(1, 6) + SourceIndex(4)
5 >Emitted(17, 17) Source(1, 16) + SourceIndex(4)
6 >Emitted(17, 18) Source(1, 17) + SourceIndex(4)
---
>>>//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.js]
/**@internal*/ 

var s = "Hello, world";

console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
var N;
(function (N) {
    function f() {
        console.log('testing');
    }

    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /**@internal*/ function normalC() {}

    /**@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /**@internal*/ get: function () { return 10; },
        /**@internal*/ set: function (val) { },
        enumerable: false,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /**@internal*/ var C = /** @class */ (function () {
        function C() {}
        return C;
    }());
    normalN.C = C;
    /**@internal*/ function foo() { }
    normalN.foo = foo;
    /**@internal*/ var someNamespace;
    (function (someNamespace) {var C = /** @class */ (function () {
            function C() {}
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /**@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {var someClass = /** @class */ (function () {
                function someClass() {}
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /**@internal*/ normalN.someImport = someNamespace.C;

    /**@internal*/ normalN.internalConst = 10;
    /**@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/**@internal*/ var internalC = /** @class */ (function () {
    function internalC() {}
    return internalC;
}());
/**@internal*/ function internalfoo() { }
/**@internal*/ var internalNamespace;
(function (internalNamespace) {var someClass = /** @class */ (function () {
        function someClass() {}
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/**@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {var someClass = /** @class */ (function () {
            function someClass() {}
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/**@internal*/ var internalImport = internalNamespace.someClass;

/**@internal*/ var internalConst = 10;
/**@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
var c = new C();
c.doSomething();
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAAA,cAAc;;AAId,IAAM,CAAC,GAAG,cAAc,CAAC;;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IACI,cAAc,CAAC,oBAAgB,CAAC;;IAEhC,cAAc,CAAC,wBAAM,GAAN,cAAW,CAAC;IACZ,sBAAI,sBAAC;QAApB,cAAc,MAAC,cAAU,OAAO,EAAE,CAAC,CAAC,CAAC;QACrC,cAAc,MAAC,UAAM,GAAW,IAAI,CAAC;;;OADA;IAEzC,cAAC;AAAD,CAAC,AAND,IAMC;AACD,IAAU,OAAO,CAShB;AATD,WAAU,OAAO;IACb,cAAc,CAAC;QAAA,cAAiB,CAAC;QAAD,QAAC;IAAD,CAAC,AAAlB,IAAkB;IAAL,SAAC,IAAI,CAAA;IACjC,cAAc,CAAC,SAAgB,GAAG,KAAI,CAAC;IAAR,WAAG,MAAK,CAAA;IACvC,cAAc,CAAC,IAAiB,aAAa,CAAsB;IAApD,WAAiB,aAAa,GAAG;YAAA,cAAgB,CAAC;YAAD,QAAC;QAAD,CAAC,AAAjB,IAAiB;QAAJ,eAAC,IAAG,CAAA;IAAC,CAAC,EAAnC,aAAa,GAAb,qBAAa,KAAb,qBAAa,QAAsB;IACnE,cAAc,CAAC,IAAiB,SAAS,CAAwC;IAAlE,WAAiB,SAAS;QAAC,IAAA,SAAS,CAA8B;QAAvC,WAAA,SAAS,GAAG;gBAAA,sBAAwB,CAAC;gBAAD,gBAAC;YAAD,CAAC,AAAzB,IAAyB;YAAZ,mBAAS,YAAG,CAAA;QAAC,CAAC,EAAvC,SAAS,GAAT,mBAAS,KAAT,mBAAS,QAA8B;IAAD,CAAC,EAAjD,SAAS,GAAT,iBAAS,KAAT,iBAAS,QAAwC;IACjF,cAAc,CAAe,kBAAU,GAAG,aAAa,CAAC,CAAC,CAAC;;IAE1D,cAAc,CAAc,qBAAa,GAAG,EAAE,CAAC;IAC/C,cAAc,CAAC,IAAY,YAAwB;IAApC,WAAY,YAAY;QAAG,yCAAC,CAAE,yCAAC,CAAE,yCAAC,CAAA;IAAC,CAAC,EAAxB,YAAY,GAAZ,oBAAY,KAAZ,oBAAY,QAAY;AACvD,CAAC,EATS,OAAO,KAAP,OAAO,QAShB;AACD,cAAc,CAAC;IAAA,sBAAiB,CAAC;IAAD,gBAAC;AAAD,CAAC,AAAlB,IAAkB;AACjC,cAAc,CAAC,SAAS,WAAW,KAAI,CAAC;AACxC,cAAc,CAAC,IAAU,iBAAiB,CAA8B;AAAzD,WAAU,iBAAiB,GAAG;QAAA,sBAAwB,CAAC;QAAD,gBAAC;IAAD,CAAC,AAAzB,IAAyB;IAAZ,2BAAS,YAAG,CAAA;AAAC,CAAC,EAA/C,iBAAiB,KAAjB,iBAAiB,QAA8B;AACxE,cAAc,CAAC,IAAU,aAAa,CAAwC;AAA/D,WAAU,aAAa;IAAC,IAAA,SAAS,CAA8B;IAAvC,WAAA,SAAS,GAAG;YAAA,sBAAwB,CAAC;YAAD,gBAAC;QAAD,CAAC,AAAzB,IAAyB;QAAZ,mBAAS,YAAG,CAAA;IAAC,CAAC,EAAvC,SAAS,GAAT,uBAAS,KAAT,uBAAS,QAA8B;AAAD,CAAC,EAArD,aAAa,KAAb,aAAa,QAAwC;AAC9E,cAAc,CAAC,IAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;;AAEnE,cAAc,CAAC,IAAM,aAAa,GAAG,EAAE,CAAC;AACxC,cAAc,CAAC,IAAK,YAAwB;AAA7B,WAAK,YAAY;IAAG,yCAAC,CAAE,yCAAC,CAAE,yCAAC,CAAA;AAAC,CAAC,EAAxB,YAAY,KAAZ,YAAY,QAAY;ACpC5C;IAAA;IAIA,CAAC,AAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>/**@internal*/ 
1 >
2 >^^^^^^^^^^^^^^
1 >
2 >/**@internal*/
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 15) Source(1, 15) + SourceIndex(0)
---
>>>
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 > interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(3, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(3, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(3, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(3, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(3, 24) Source(5, 26) + SourceIndex(0)
---
>>>
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(5, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(5, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(5, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(5, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(5, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(5, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(5, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(5, 16) Source(11, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(6, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(6, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(6, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(6, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(6, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(6, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(6, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(6, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(6, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(7, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(7, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(7, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(8, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(8, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(8, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(8, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(9, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(9, 2) Source(3, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(10, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(10, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(10, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(10, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(11, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(11, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(11, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(12, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(12, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(12, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(13, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(13, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(13, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(13, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(13, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(13, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(13, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(13, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
1 >
  >    
2 >    }
1 >Emitted(14, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(14, 6) Source(8, 6) + SourceIndex(3)
---
>>>
>>>    f();
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1 >
  >
  >    
2 >    f
3 >     ()
4 >       ;
1 >Emitted(16, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(16, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(16, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(16, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(17, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(17, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(17, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(17, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(17, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(17, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(17, 19) Source(11, 2) + SourceIndex(3)
---
>>>var normalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(18, 1) Source(13, 1) + SourceIndex(3)
---
>>>    /**@internal*/ function normalC() {}
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^
5 >                                       ^
1->class normalC {
  >    
2 >    /**@internal*/
3 >                   
4 >                   constructor() { 
5 >                                       }
1->Emitted(19, 5) Source(14, 5) + SourceIndex(3)
2 >Emitted(19, 19) Source(14, 19) + SourceIndex(3)
3 >Emitted(19, 20) Source(14, 20) + SourceIndex(3)
4 >Emitted(19, 40) Source(14, 36) + SourceIndex(3)
5 >Emitted(19, 41) Source(14, 37) + SourceIndex(3)
---
>>>
>>>    /**@internal*/ normalC.prototype.method = function () { };
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^^^^^
5 >                                           ^^^
6 >                                              ^^^^^^^^^^^^^^
7 >                                                            ^
1 >
  >    /**@internal*/ prop: string;
  >    
2 >    /**@internal*/
3 >                   
4 >                   method
5 >                                           
6 >                                              method() { 
7 >                                                            }
1 >Emitted(21, 5) Source(16, 5) + SourceIndex(3)
2 >Emitted(21, 19) Source(16, 19) + SourceIndex(3)
3 >Emitted(21, 20) Source(16, 20) + SourceIndex(3)
4 >Emitted(21, 44) Source(16, 26) + SourceIndex(3)
5 >Emitted(21, 47) Source(16, 20) + SourceIndex(3)
6 >Emitted(21, 61) Source(16, 31) + SourceIndex(3)
7 >Emitted(21, 62) Source(16, 32) + SourceIndex(3)
---
>>>    Object.defineProperty(normalC.prototype, "c", {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^^^^^^^^^^^^^^^^^^^^^^
4 >                                                ^^^^^^^^->
1 >
  >    /**@internal*/ 
2 >    get 
3 >                          c
1 >Emitted(22, 5) Source(17, 20) + SourceIndex(3)
2 >Emitted(22, 27) Source(17, 24) + SourceIndex(3)
3 >Emitted(22, 49) Source(17, 25) + SourceIndex(3)
---
>>>        /**@internal*/ get: function () { return 10; },
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^^^^^^
4 >                            ^^^^^^^^^^^^^^
5 >                                          ^^^^^^^
6 >                                                 ^^
7 >                                                   ^
8 >                                                    ^
9 >                                                     ^
1->
2 >        /**@internal*/
3 >                       
4 >                            get c() { 
5 >                                          return 
6 >                                                 10
7 >                                                   ;
8 >                                                     
9 >                                                     }
1->Emitted(23, 9) Source(17, 5) + SourceIndex(3)
2 >Emitted(23, 23) Source(17, 19) + SourceIndex(3)
3 >Emitted(23, 29) Source(17, 20) + SourceIndex(3)
4 >Emitted(23, 43) Source(17, 30) + SourceIndex(3)
5 >Emitted(23, 50) Source(17, 37) + SourceIndex(3)
6 >Emitted(23, 52) Source(17, 39) + SourceIndex(3)
7 >Emitted(23, 53) Source(17, 40) + SourceIndex(3)
8 >Emitted(23, 54) Source(17, 41) + SourceIndex(3)
9 >Emitted(23, 55) Source(17, 42) + SourceIndex(3)
---
>>>        /**@internal*/ set: function (val) { },
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^^^^^^
4 >                            ^^^^^^^^^^
5 >                                      ^^^
6 >                                         ^^^^
7 >                                             ^
1 >
  >    
2 >        /**@internal*/
3 >                       
4 >                            set c(
5 >                                      val: number
6 >                                         ) { 
7 >                                             }
1 >Emitted(24, 9) Source(18, 5) + SourceIndex(3)
2 >Emitted(24, 23) Source(18, 19) + SourceIndex(3)
3 >Emitted(24, 29) Source(18, 20) + SourceIndex(3)
4 >Emitted(24, 39) Source(18, 26) + SourceIndex(3)
5 >Emitted(24, 42) Source(18, 37) + SourceIndex(3)
6 >Emitted(24, 46) Source(18, 41) + SourceIndex(3)
7 >Emitted(24, 47) Source(18, 42) + SourceIndex(3)
---
>>>        enumerable: false,
>>>        configurable: true
>>>    });
1 >^^^^^^^
2 >       ^^^^^^^^^^^^^->
1 >
1 >Emitted(27, 8) Source(17, 42) + SourceIndex(3)
---
>>>    return normalC;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
  >    /**@internal*/ set c(val: number) { }
  >
2 >    }
1->Emitted(28, 5) Source(19, 1) + SourceIndex(3)
2 >Emitted(28, 19) Source(19, 2) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^->
1 >
2 >}
3 > 
4 > class normalC {
  >     /**@internal*/ constructor() { }
  >     /**@internal*/ prop: string;
  >     /**@internal*/ method() { }
  >     /**@internal*/ get c() { return 10; }
  >     /**@internal*/ set c(val: number) { }
  > }
1 >Emitted(29, 1) Source(19, 1) + SourceIndex(3)
2 >Emitted(29, 2) Source(19, 2) + SourceIndex(3)
3 >Emitted(29, 2) Source(13, 1) + SourceIndex(3)
4 >Emitted(29, 6) Source(19, 2) + SourceIndex(3)
---
>>>var normalN;
1->
2 >^^^^
3 >    ^^^^^^^
4 >           ^
5 >            ^^^^^^^^^^->
1->
  >
2 >namespace 
3 >    normalN
4 >            {
  >               /**@internal*/ export class C { }
  >               /**@internal*/ export function foo() {}
  >               /**@internal*/ export namespace someNamespace { export class C {} }
  >               /**@internal*/ export namespace someOther.something { export class someClass {} }
  >               /**@internal*/ export import someImport = someNamespace.C;
  >               /**@internal*/ export type internalType = internalC;
  >               /**@internal*/ export const internalConst = 10;
  >               /**@internal*/ export enum internalEnum { a, b, c }
  >           }
1->Emitted(30, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(30, 5) Source(20, 11) + SourceIndex(3)
3 >Emitted(30, 12) Source(20, 18) + SourceIndex(3)
4 >Emitted(30, 13) Source(29, 2) + SourceIndex(3)
---
>>>(function (normalN) {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^
4 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >namespace 
3 >           normalN
1->Emitted(31, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(31, 12) Source(20, 11) + SourceIndex(3)
3 >Emitted(31, 19) Source(20, 18) + SourceIndex(3)
---
>>>    /**@internal*/ var C = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^->
1-> {
  >    
2 >    /**@internal*/
3 >                   
1->Emitted(32, 5) Source(21, 5) + SourceIndex(3)
2 >Emitted(32, 19) Source(21, 19) + SourceIndex(3)
3 >Emitted(32, 20) Source(21, 20) + SourceIndex(3)
---
>>>        function C() {}
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^
1->
2 >        export class C { 
3 >                      }
1->Emitted(33, 9) Source(21, 20) + SourceIndex(3)
2 >Emitted(33, 23) Source(21, 37) + SourceIndex(3)
3 >Emitted(33, 24) Source(21, 38) + SourceIndex(3)
---
>>>        return C;
1 >^^^^^^^^
2 >        ^^^^^^^^
1 >
2 >        }
1 >Emitted(34, 9) Source(21, 37) + SourceIndex(3)
2 >Emitted(34, 17) Source(21, 38) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class C { }
1 >Emitted(35, 5) Source(21, 37) + SourceIndex(3)
2 >Emitted(35, 6) Source(21, 38) + SourceIndex(3)
3 >Emitted(35, 6) Source(21, 20) + SourceIndex(3)
4 >Emitted(35, 10) Source(21, 38) + SourceIndex(3)
---
>>>    normalN.C = C;
1->^^^^
2 >    ^^^^^^^^^
3 >             ^^^^
4 >                 ^
5 >                  ^^^^^^^^^^^^^^^^^^^^->
1->
2 >    C
3 >              { }
4 >                 
1->Emitted(36, 5) Source(21, 33) + SourceIndex(3)
2 >Emitted(36, 14) Source(21, 34) + SourceIndex(3)
3 >Emitted(36, 18) Source(21, 38) + SourceIndex(3)
4 >Emitted(36, 19) Source(21, 38) + SourceIndex(3)
---
>>>    /**@internal*/ function foo() { }
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^
5 >                            ^^^
6 >                               ^^^^^
7 >                                    ^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export function 
5 >                            foo
6 >                               () {
7 >                                    }
1->Emitted(37, 5) Source(22, 5) + SourceIndex(3)
2 >Emitted(37, 19) Source(22, 19) + SourceIndex(3)
3 >Emitted(37, 20) Source(22, 20) + SourceIndex(3)
4 >Emitted(37, 29) Source(22, 36) + SourceIndex(3)
5 >Emitted(37, 32) Source(22, 39) + SourceIndex(3)
6 >Emitted(37, 37) Source(22, 43) + SourceIndex(3)
7 >Emitted(37, 38) Source(22, 44) + SourceIndex(3)
---
>>>    normalN.foo = foo;
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^^^^^^^->
1 >
2 >    foo
3 >               () {}
4 >                     
1 >Emitted(38, 5) Source(22, 36) + SourceIndex(3)
2 >Emitted(38, 16) Source(22, 39) + SourceIndex(3)
3 >Emitted(38, 22) Source(22, 44) + SourceIndex(3)
4 >Emitted(38, 23) Source(22, 44) + SourceIndex(3)
---
>>>    /**@internal*/ var someNamespace;
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^^^^^
6 >                                    ^
7 >                                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                       someNamespace
6 >                                     { export class C {} }
1->Emitted(39, 5) Source(23, 5) + SourceIndex(3)
2 >Emitted(39, 19) Source(23, 19) + SourceIndex(3)
3 >Emitted(39, 20) Source(23, 20) + SourceIndex(3)
4 >Emitted(39, 24) Source(23, 37) + SourceIndex(3)
5 >Emitted(39, 37) Source(23, 50) + SourceIndex(3)
6 >Emitted(39, 38) Source(23, 72) + SourceIndex(3)
---
>>>    (function (someNamespace) {var C = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^
4 >                            ^^^
1->
2 >    export namespace 
3 >               someNamespace
4 >                             { 
1->Emitted(40, 5) Source(23, 20) + SourceIndex(3)
2 >Emitted(40, 16) Source(23, 37) + SourceIndex(3)
3 >Emitted(40, 29) Source(23, 50) + SourceIndex(3)
4 >Emitted(40, 32) Source(23, 53) + SourceIndex(3)
---
>>>            function C() {}
1 >^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^
3 >                          ^
1 >
2 >            export class C {
3 >                          }
1 >Emitted(41, 13) Source(23, 53) + SourceIndex(3)
2 >Emitted(41, 27) Source(23, 69) + SourceIndex(3)
3 >Emitted(41, 28) Source(23, 70) + SourceIndex(3)
---
>>>            return C;
1 >^^^^^^^^^^^^
2 >            ^^^^^^^^
1 >
2 >            }
1 >Emitted(42, 13) Source(23, 69) + SourceIndex(3)
2 >Emitted(42, 21) Source(23, 70) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class C {}
1 >Emitted(43, 9) Source(23, 69) + SourceIndex(3)
2 >Emitted(43, 10) Source(23, 70) + SourceIndex(3)
3 >Emitted(43, 10) Source(23, 53) + SourceIndex(3)
4 >Emitted(43, 14) Source(23, 70) + SourceIndex(3)
---
>>>        someNamespace.C = C;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^
3 >                       ^^^^
4 >                           ^
5 >                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        C
3 >                        {}
4 >                           
1->Emitted(44, 9) Source(23, 66) + SourceIndex(3)
2 >Emitted(44, 24) Source(23, 67) + SourceIndex(3)
3 >Emitted(44, 28) Source(23, 70) + SourceIndex(3)
4 >Emitted(44, 29) Source(23, 70) + SourceIndex(3)
---
>>>    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^^^
7 >                                            ^^^^^
8 >                                                 ^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       someNamespace
5 >                    
6 >                       someNamespace
7 >                                            
8 >                                                 someNamespace
9 >                                                                       { export class C {} }
1->Emitted(45, 5) Source(23, 71) + SourceIndex(3)
2 >Emitted(45, 6) Source(23, 72) + SourceIndex(3)
3 >Emitted(45, 8) Source(23, 37) + SourceIndex(3)
4 >Emitted(45, 21) Source(23, 50) + SourceIndex(3)
5 >Emitted(45, 24) Source(23, 37) + SourceIndex(3)
6 >Emitted(45, 45) Source(23, 50) + SourceIndex(3)
7 >Emitted(45, 50) Source(23, 37) + SourceIndex(3)
8 >Emitted(45, 71) Source(23, 50) + SourceIndex(3)
9 >Emitted(45, 79) Source(23, 72) + SourceIndex(3)
---
>>>    /**@internal*/ var someOther;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^
6 >                                ^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                       someOther
6 >                                .something { export class someClass {} }
1 >Emitted(46, 5) Source(24, 5) + SourceIndex(3)
2 >Emitted(46, 19) Source(24, 19) + SourceIndex(3)
3 >Emitted(46, 20) Source(24, 20) + SourceIndex(3)
4 >Emitted(46, 24) Source(24, 37) + SourceIndex(3)
5 >Emitted(46, 33) Source(24, 46) + SourceIndex(3)
6 >Emitted(46, 34) Source(24, 86) + SourceIndex(3)
---
>>>    (function (someOther) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
1 >
2 >    export namespace 
3 >               someOther
1 >Emitted(47, 5) Source(24, 20) + SourceIndex(3)
2 >Emitted(47, 16) Source(24, 37) + SourceIndex(3)
3 >Emitted(47, 25) Source(24, 46) + SourceIndex(3)
---
>>>        var something;
1 >^^^^^^^^
2 >        ^^^^
3 >            ^^^^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >.
2 >        
3 >            something
4 >                      { export class someClass {} }
1 >Emitted(48, 9) Source(24, 47) + SourceIndex(3)
2 >Emitted(48, 13) Source(24, 47) + SourceIndex(3)
3 >Emitted(48, 22) Source(24, 56) + SourceIndex(3)
4 >Emitted(48, 23) Source(24, 86) + SourceIndex(3)
---
>>>        (function (something) {var someClass = /** @class */ (function () {
1->^^^^^^^^
2 >        ^^^^^^^^^^^
3 >                   ^^^^^^^^^
4 >                            ^^^
5 >                               ^^^^^^^^^->
1->
2 >        
3 >                   something
4 >                             { 
1->Emitted(49, 9) Source(24, 47) + SourceIndex(3)
2 >Emitted(49, 20) Source(24, 47) + SourceIndex(3)
3 >Emitted(49, 29) Source(24, 56) + SourceIndex(3)
4 >Emitted(49, 32) Source(24, 59) + SourceIndex(3)
---
>>>                function someClass() {}
1->^^^^^^^^^^^^^^^^
2 >                ^^^^^^^^^^^^^^^^^^^^^^
3 >                                      ^
1->
2 >                export class someClass {
3 >                                      }
1->Emitted(50, 17) Source(24, 59) + SourceIndex(3)
2 >Emitted(50, 39) Source(24, 83) + SourceIndex(3)
3 >Emitted(50, 40) Source(24, 84) + SourceIndex(3)
---
>>>                return someClass;
1 >^^^^^^^^^^^^^^^^
2 >                ^^^^^^^^^^^^^^^^
1 >
2 >                }
1 >Emitted(51, 17) Source(24, 83) + SourceIndex(3)
2 >Emitted(51, 33) Source(24, 84) + SourceIndex(3)
---
>>>            }());
1 >^^^^^^^^^^^^
2 >            ^
3 >             
4 >             ^^^^
5 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >            }
3 >             
4 >             export class someClass {}
1 >Emitted(52, 13) Source(24, 83) + SourceIndex(3)
2 >Emitted(52, 14) Source(24, 84) + SourceIndex(3)
3 >Emitted(52, 14) Source(24, 59) + SourceIndex(3)
4 >Emitted(52, 18) Source(24, 84) + SourceIndex(3)
---
>>>            something.someClass = someClass;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >            someClass
3 >                                {}
4 >                                           
1->Emitted(53, 13) Source(24, 72) + SourceIndex(3)
2 >Emitted(53, 32) Source(24, 81) + SourceIndex(3)
3 >Emitted(53, 44) Source(24, 84) + SourceIndex(3)
4 >Emitted(53, 45) Source(24, 84) + SourceIndex(3)
---
>>>        })(something = someOther.something || (someOther.something = {}));
1->^^^^^^^^
2 >        ^
3 >         ^^
4 >           ^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^
9 >                                                                  ^^^^^^^^
1-> 
2 >        }
3 >         
4 >           something
5 >                    
6 >                       something
7 >                                          
8 >                                               something
9 >                                                                   { export class someClass {} }
1->Emitted(54, 9) Source(24, 85) + SourceIndex(3)
2 >Emitted(54, 10) Source(24, 86) + SourceIndex(3)
3 >Emitted(54, 12) Source(24, 47) + SourceIndex(3)
4 >Emitted(54, 21) Source(24, 56) + SourceIndex(3)
5 >Emitted(54, 24) Source(24, 47) + SourceIndex(3)
6 >Emitted(54, 43) Source(24, 56) + SourceIndex(3)
7 >Emitted(54, 48) Source(24, 47) + SourceIndex(3)
8 >Emitted(54, 67) Source(24, 56) + SourceIndex(3)
9 >Emitted(54, 75) Source(24, 86) + SourceIndex(3)
---
>>>    })(someOther = normalN.someOther || (normalN.someOther = {}));
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^
7 >                                    ^^^^^
8 >                                         ^^^^^^^^^^^^^^^^^
9 >                                                          ^^^^^^^^
1 >
2 >    }
3 >     
4 >       someOther
5 >                
6 >                   someOther
7 >                                    
8 >                                         someOther
9 >                                                          .something { export class someClass {} }
1 >Emitted(55, 5) Source(24, 85) + SourceIndex(3)
2 >Emitted(55, 6) Source(24, 86) + SourceIndex(3)
3 >Emitted(55, 8) Source(24, 37) + SourceIndex(3)
4 >Emitted(55, 17) Source(24, 46) + SourceIndex(3)
5 >Emitted(55, 20) Source(24, 37) + SourceIndex(3)
6 >Emitted(55, 37) Source(24, 46) + SourceIndex(3)
7 >Emitted(55, 42) Source(24, 37) + SourceIndex(3)
8 >Emitted(55, 59) Source(24, 46) + SourceIndex(3)
9 >Emitted(55, 67) Source(24, 86) + SourceIndex(3)
---
>>>    /**@internal*/ normalN.someImport = someNamespace.C;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^
5 >                                     ^^^
6 >                                        ^^^^^^^^^^^^^
7 >                                                     ^
8 >                                                      ^
9 >                                                       ^
1 >
  >    
2 >    /**@internal*/
3 >                   export import 
4 >                   someImport
5 >                                      = 
6 >                                        someNamespace
7 >                                                     .
8 >                                                      C
9 >                                                       ;
1 >Emitted(56, 5) Source(25, 5) + SourceIndex(3)
2 >Emitted(56, 19) Source(25, 19) + SourceIndex(3)
3 >Emitted(56, 20) Source(25, 34) + SourceIndex(3)
4 >Emitted(56, 38) Source(25, 44) + SourceIndex(3)
5 >Emitted(56, 41) Source(25, 47) + SourceIndex(3)
6 >Emitted(56, 54) Source(25, 60) + SourceIndex(3)
7 >Emitted(56, 55) Source(25, 61) + SourceIndex(3)
8 >Emitted(56, 56) Source(25, 62) + SourceIndex(3)
9 >Emitted(56, 57) Source(25, 63) + SourceIndex(3)
---
>>>
>>>    /**@internal*/ normalN.internalConst = 10;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^^
5 >                                        ^^^
6 >                                           ^^
7 >                                             ^
1 >
  >    /**@internal*/ export type internalType = internalC;
  >    
2 >    /**@internal*/
3 >                   export const 
4 >                   internalConst
5 >                                         = 
6 >                                           10
7 >                                             ;
1 >Emitted(58, 5) Source(27, 5) + SourceIndex(3)
2 >Emitted(58, 19) Source(27, 19) + SourceIndex(3)
3 >Emitted(58, 20) Source(27, 33) + SourceIndex(3)
4 >Emitted(58, 41) Source(27, 46) + SourceIndex(3)
5 >Emitted(58, 44) Source(27, 49) + SourceIndex(3)
6 >Emitted(58, 46) Source(27, 51) + SourceIndex(3)
7 >Emitted(58, 47) Source(27, 52) + SourceIndex(3)
---
>>>    /**@internal*/ var internalEnum;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^^^^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export enum 
5 >                       internalEnum { a, b, c }
1 >Emitted(59, 5) Source(28, 5) + SourceIndex(3)
2 >Emitted(59, 19) Source(28, 19) + SourceIndex(3)
3 >Emitted(59, 20) Source(28, 20) + SourceIndex(3)
4 >Emitted(59, 24) Source(28, 32) + SourceIndex(3)
5 >Emitted(59, 36) Source(28, 56) + SourceIndex(3)
---
>>>    (function (internalEnum) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^
4 >                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    export enum 
3 >               internalEnum
1 >Emitted(60, 5) Source(28, 20) + SourceIndex(3)
2 >Emitted(60, 16) Source(28, 32) + SourceIndex(3)
3 >Emitted(60, 28) Source(28, 44) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
5 >                                                                                           ^
6 >                                                                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
7 >                                                                                                                                     ^
1-> { 
2 >        a
3 >                                                 , 
4 >                                                  b
5 >                                                                                           , 
6 >                                                                                            c
7 >                                                                                                                                     
1->Emitted(61, 9) Source(28, 47) + SourceIndex(3)
2 >Emitted(61, 50) Source(28, 48) + SourceIndex(3)
3 >Emitted(61, 51) Source(28, 50) + SourceIndex(3)
4 >Emitted(61, 92) Source(28, 51) + SourceIndex(3)
5 >Emitted(61, 93) Source(28, 53) + SourceIndex(3)
6 >Emitted(61, 134) Source(28, 54) + SourceIndex(3)
7 >Emitted(61, 135) Source(28, 54) + SourceIndex(3)
---
>>>    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^
5 >                   ^^^
6 >                      ^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^
9 >                                                                   ^^^^^^^^
1 > 
2 >    }
3 >     
4 >       internalEnum
5 >                   
6 >                      internalEnum
7 >                                          
8 >                                               internalEnum
9 >                                                                    { a, b, c }
1 >Emitted(62, 5) Source(28, 55) + SourceIndex(3)
2 >Emitted(62, 6) Source(28, 56) + SourceIndex(3)
3 >Emitted(62, 8) Source(28, 32) + SourceIndex(3)
4 >Emitted(62, 20) Source(28, 44) + SourceIndex(3)
5 >Emitted(62, 23) Source(28, 32) + SourceIndex(3)
6 >Emitted(62, 43) Source(28, 44) + SourceIndex(3)
7 >Emitted(62, 48) Source(28, 32) + SourceIndex(3)
8 >Emitted(62, 68) Source(28, 44) + SourceIndex(3)
9 >Emitted(62, 76) Source(28, 56) + SourceIndex(3)
---
>>>})(normalN || (normalN = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^
5 >          ^^^^^
6 >               ^^^^^^^
7 >                      ^^^^^^^^
8 >                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
3 > 
4 >   normalN
5 >          
6 >               normalN
7 >                       {
  >                          /**@internal*/ export class C { }
  >                          /**@internal*/ export function foo() {}
  >                          /**@internal*/ export namespace someNamespace { export class C {} }
  >                          /**@internal*/ export namespace someOther.something { export class someClass {} }
  >                          /**@internal*/ export import someImport = someNamespace.C;
  >                          /**@internal*/ export type internalType = internalC;
  >                          /**@internal*/ export const internalConst = 10;
  >                          /**@internal*/ export enum internalEnum { a, b, c }
  >                      }
1 >Emitted(63, 1) Source(29, 1) + SourceIndex(3)
2 >Emitted(63, 2) Source(29, 2) + SourceIndex(3)
3 >Emitted(63, 4) Source(20, 11) + SourceIndex(3)
4 >Emitted(63, 11) Source(20, 18) + SourceIndex(3)
5 >Emitted(63, 16) Source(20, 11) + SourceIndex(3)
6 >Emitted(63, 23) Source(20, 18) + SourceIndex(3)
7 >Emitted(63, 31) Source(29, 2) + SourceIndex(3)
---
>>>/**@internal*/ var internalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^^->
1->
  >
2 >/**@internal*/
3 >               
1->Emitted(64, 1) Source(30, 1) + SourceIndex(3)
2 >Emitted(64, 15) Source(30, 15) + SourceIndex(3)
3 >Emitted(64, 16) Source(30, 16) + SourceIndex(3)
---
>>>    function internalC() {}
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^
1->
2 >    class internalC {
3 >                          }
1->Emitted(65, 5) Source(30, 16) + SourceIndex(3)
2 >Emitted(65, 27) Source(30, 33) + SourceIndex(3)
3 >Emitted(65, 28) Source(30, 34) + SourceIndex(3)
---
>>>    return internalC;
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^
1 >
2 >    }
1 >Emitted(66, 5) Source(30, 33) + SourceIndex(3)
2 >Emitted(66, 21) Source(30, 34) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class internalC {}
1 >Emitted(67, 1) Source(30, 33) + SourceIndex(3)
2 >Emitted(67, 2) Source(30, 34) + SourceIndex(3)
3 >Emitted(67, 2) Source(30, 16) + SourceIndex(3)
4 >Emitted(67, 6) Source(30, 34) + SourceIndex(3)
---
>>>/**@internal*/ function internalfoo() { }
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^
5 >                        ^^^^^^^^^^^
6 >                                   ^^^^^
7 >                                        ^
1->
  >
2 >/**@internal*/
3 >               
4 >               function 
5 >                        internalfoo
6 >                                   () {
7 >                                        }
1->Emitted(68, 1) Source(31, 1) + SourceIndex(3)
2 >Emitted(68, 15) Source(31, 15) + SourceIndex(3)
3 >Emitted(68, 16) Source(31, 16) + SourceIndex(3)
4 >Emitted(68, 25) Source(31, 25) + SourceIndex(3)
5 >Emitted(68, 36) Source(31, 36) + SourceIndex(3)
6 >Emitted(68, 41) Source(31, 40) + SourceIndex(3)
7 >Emitted(68, 42) Source(31, 41) + SourceIndex(3)
---
>>>/**@internal*/ var internalNamespace;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^^^^^
6 >                                    ^
7 >                                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                   internalNamespace
6 >                                     { export class someClass {} }
1 >Emitted(69, 1) Source(32, 1) + SourceIndex(3)
2 >Emitted(69, 15) Source(32, 15) + SourceIndex(3)
3 >Emitted(69, 16) Source(32, 16) + SourceIndex(3)
4 >Emitted(69, 20) Source(32, 26) + SourceIndex(3)
5 >Emitted(69, 37) Source(32, 43) + SourceIndex(3)
6 >Emitted(69, 38) Source(32, 73) + SourceIndex(3)
---
>>>(function (internalNamespace) {var someClass = /** @class */ (function () {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^^^^^
4 >                            ^^^
5 >                               ^->
1->
2 >namespace 
3 >           internalNamespace
4 >                             { 
1->Emitted(70, 1) Source(32, 16) + SourceIndex(3)
2 >Emitted(70, 12) Source(32, 26) + SourceIndex(3)
3 >Emitted(70, 29) Source(32, 43) + SourceIndex(3)
4 >Emitted(70, 32) Source(32, 46) + SourceIndex(3)
---
>>>        function someClass() {}
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^
3 >                              ^
1->
2 >        export class someClass {
3 >                              }
1->Emitted(71, 9) Source(32, 46) + SourceIndex(3)
2 >Emitted(71, 31) Source(32, 70) + SourceIndex(3)
3 >Emitted(71, 32) Source(32, 71) + SourceIndex(3)
---
>>>        return someClass;
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^
1 >
2 >        }
1 >Emitted(72, 9) Source(32, 70) + SourceIndex(3)
2 >Emitted(72, 25) Source(32, 71) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class someClass {}
1 >Emitted(73, 5) Source(32, 70) + SourceIndex(3)
2 >Emitted(73, 6) Source(32, 71) + SourceIndex(3)
3 >Emitted(73, 6) Source(32, 46) + SourceIndex(3)
4 >Emitted(73, 10) Source(32, 71) + SourceIndex(3)
---
>>>    internalNamespace.someClass = someClass;
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^->
1->
2 >    someClass
3 >                                {}
4 >                                           
1->Emitted(74, 5) Source(32, 59) + SourceIndex(3)
2 >Emitted(74, 32) Source(32, 68) + SourceIndex(3)
3 >Emitted(74, 44) Source(32, 71) + SourceIndex(3)
4 >Emitted(74, 45) Source(32, 71) + SourceIndex(3)
---
>>>})(internalNamespace || (internalNamespace = {}));
1->
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^^^^^
5 >                    ^^^^^
6 >                         ^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^^^^
1-> 
2 >}
3 > 
4 >   internalNamespace
5 >                    
6 >                         internalNamespace
7 >                                           { export class someClass {} }
1->Emitted(75, 1) Source(32, 72) + SourceIndex(3)
2 >Emitted(75, 2) Source(32, 73) + SourceIndex(3)
3 >Emitted(75, 4) Source(32, 26) + SourceIndex(3)
4 >Emitted(75, 21) Source(32, 43) + SourceIndex(3)
5 >Emitted(75, 26) Source(32, 26) + SourceIndex(3)
6 >Emitted(75, 43) Source(32, 43) + SourceIndex(3)
7 >Emitted(75, 51) Source(32, 73) + SourceIndex(3)
---
>>>/**@internal*/ var internalOther;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^
6 >                                ^
1 >
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                   internalOther
6 >                                .something { export class someClass {} }
1 >Emitted(76, 1) Source(33, 1) + SourceIndex(3)
2 >Emitted(76, 15) Source(33, 15) + SourceIndex(3)
3 >Emitted(76, 16) Source(33, 16) + SourceIndex(3)
4 >Emitted(76, 20) Source(33, 26) + SourceIndex(3)
5 >Emitted(76, 33) Source(33, 39) + SourceIndex(3)
6 >Emitted(76, 34) Source(33, 79) + SourceIndex(3)
---
>>>(function (internalOther) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^
1 >
2 >namespace 
3 >           internalOther
1 >Emitted(77, 1) Source(33, 16) + SourceIndex(3)
2 >Emitted(77, 12) Source(33, 26) + SourceIndex(3)
3 >Emitted(77, 25) Source(33, 39) + SourceIndex(3)
---
>>>    var something;
1 >^^^^
2 >    ^^^^
3 >        ^^^^^^^^^
4 >                 ^
5 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >.
2 >    
3 >        something
4 >                  { export class someClass {} }
1 >Emitted(78, 5) Source(33, 40) + SourceIndex(3)
2 >Emitted(78, 9) Source(33, 40) + SourceIndex(3)
3 >Emitted(78, 18) Source(33, 49) + SourceIndex(3)
4 >Emitted(78, 19) Source(33, 79) + SourceIndex(3)
---
>>>    (function (something) {var someClass = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
4 >                        ^^^
5 >                           ^^^^^^^^^->
1->
2 >    
3 >               something
4 >                         { 
1->Emitted(79, 5) Source(33, 40) + SourceIndex(3)
2 >Emitted(79, 16) Source(33, 40) + SourceIndex(3)
3 >Emitted(79, 25) Source(33, 49) + SourceIndex(3)
4 >Emitted(79, 28) Source(33, 52) + SourceIndex(3)
---
>>>            function someClass() {}
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^^^^
3 >                                  ^
1->
2 >            export class someClass {
3 >                                  }
1->Emitted(80, 13) Source(33, 52) + SourceIndex(3)
2 >Emitted(80, 35) Source(33, 76) + SourceIndex(3)
3 >Emitted(80, 36) Source(33, 77) + SourceIndex(3)
---
>>>            return someClass;
1 >^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^
1 >
2 >            }
1 >Emitted(81, 13) Source(33, 76) + SourceIndex(3)
2 >Emitted(81, 29) Source(33, 77) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class someClass {}
1 >Emitted(82, 9) Source(33, 76) + SourceIndex(3)
2 >Emitted(82, 10) Source(33, 77) + SourceIndex(3)
3 >Emitted(82, 10) Source(33, 52) + SourceIndex(3)
4 >Emitted(82, 14) Source(33, 77) + SourceIndex(3)
---
>>>        something.someClass = someClass;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^
3 >                           ^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        someClass
3 >                            {}
4 >                                       
1->Emitted(83, 9) Source(33, 65) + SourceIndex(3)
2 >Emitted(83, 28) Source(33, 74) + SourceIndex(3)
3 >Emitted(83, 40) Source(33, 77) + SourceIndex(3)
4 >Emitted(83, 41) Source(33, 77) + SourceIndex(3)
---
>>>    })(something = internalOther.something || (internalOther.something = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       something
5 >                
6 >                   something
7 >                                          
8 >                                               something
9 >                                                                       { export class someClass {} }
1->Emitted(84, 5) Source(33, 78) + SourceIndex(3)
2 >Emitted(84, 6) Source(33, 79) + SourceIndex(3)
3 >Emitted(84, 8) Source(33, 40) + SourceIndex(3)
4 >Emitted(84, 17) Source(33, 49) + SourceIndex(3)
5 >Emitted(84, 20) Source(33, 40) + SourceIndex(3)
6 >Emitted(84, 43) Source(33, 49) + SourceIndex(3)
7 >Emitted(84, 48) Source(33, 40) + SourceIndex(3)
8 >Emitted(84, 71) Source(33, 49) + SourceIndex(3)
9 >Emitted(84, 79) Source(33, 79) + SourceIndex(3)
---
>>>})(internalOther || (internalOther = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^
5 >                ^^^^^
6 >                     ^^^^^^^^^^^^^
7 >                                  ^^^^^^^^
8 >                                          ^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 >   internalOther
5 >                
6 >                     internalOther
7 >                                  .something { export class someClass {} }
1 >Emitted(85, 1) Source(33, 78) + SourceIndex(3)
2 >Emitted(85, 2) Source(33, 79) + SourceIndex(3)
3 >Emitted(85, 4) Source(33, 26) + SourceIndex(3)
4 >Emitted(85, 17) Source(33, 39) + SourceIndex(3)
5 >Emitted(85, 22) Source(33, 26) + SourceIndex(3)
6 >Emitted(85, 35) Source(33, 39) + SourceIndex(3)
7 >Emitted(85, 43) Source(33, 79) + SourceIndex(3)
---
>>>/**@internal*/ var internalImport = internalNamespace.someClass;
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^^
6 >                                 ^^^
7 >                                    ^^^^^^^^^^^^^^^^^
8 >                                                     ^
9 >                                                      ^^^^^^^^^
10>                                                               ^
1->
  >
2 >/**@internal*/
3 >               
4 >               import 
5 >                   internalImport
6 >                                  = 
7 >                                    internalNamespace
8 >                                                     .
9 >                                                      someClass
10>                                                               ;
1->Emitted(86, 1) Source(34, 1) + SourceIndex(3)
2 >Emitted(86, 15) Source(34, 15) + SourceIndex(3)
3 >Emitted(86, 16) Source(34, 16) + SourceIndex(3)
4 >Emitted(86, 20) Source(34, 23) + SourceIndex(3)
5 >Emitted(86, 34) Source(34, 37) + SourceIndex(3)
6 >Emitted(86, 37) Source(34, 40) + SourceIndex(3)
7 >Emitted(86, 54) Source(34, 57) + SourceIndex(3)
8 >Emitted(86, 55) Source(34, 58) + SourceIndex(3)
9 >Emitted(86, 64) Source(34, 67) + SourceIndex(3)
10>Emitted(86, 65) Source(34, 68) + SourceIndex(3)
---
>>>
>>>/**@internal*/ var internalConst = 10;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^
6 >                                ^^^
7 >                                   ^^
8 >                                     ^
1 >
  >/**@internal*/ type internalType = internalC;
  >
2 >/**@internal*/
3 >               
4 >               const 
5 >                   internalConst
6 >                                 = 
7 >                                   10
8 >                                     ;
1 >Emitted(88, 1) Source(36, 1) + SourceIndex(3)
2 >Emitted(88, 15) Source(36, 15) + SourceIndex(3)
3 >Emitted(88, 16) Source(36, 16) + SourceIndex(3)
4 >Emitted(88, 20) Source(36, 22) + SourceIndex(3)
5 >Emitted(88, 33) Source(36, 35) + SourceIndex(3)
6 >Emitted(88, 36) Source(36, 38) + SourceIndex(3)
7 >Emitted(88, 38) Source(36, 40) + SourceIndex(3)
8 >Emitted(88, 39) Source(36, 41) + SourceIndex(3)
---
>>>/**@internal*/ var internalEnum;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^
1 >
  >
2 >/**@internal*/
3 >               
4 >               enum 
5 >                   internalEnum { a, b, c }
1 >Emitted(89, 1) Source(37, 1) + SourceIndex(3)
2 >Emitted(89, 15) Source(37, 15) + SourceIndex(3)
3 >Emitted(89, 16) Source(37, 16) + SourceIndex(3)
4 >Emitted(89, 20) Source(37, 21) + SourceIndex(3)
5 >Emitted(89, 32) Source(37, 45) + SourceIndex(3)
---
>>>(function (internalEnum) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^
4 >                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >enum 
3 >           internalEnum
1 >Emitted(90, 1) Source(37, 16) + SourceIndex(3)
2 >Emitted(90, 12) Source(37, 21) + SourceIndex(3)
3 >Emitted(90, 24) Source(37, 33) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
4 >                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
5 >                                                                                       ^
6 >                                                                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
7 >                                                                                                                                 ^
1-> { 
2 >    a
3 >                                             , 
4 >                                              b
5 >                                                                                       , 
6 >                                                                                        c
7 >                                                                                                                                 
1->Emitted(91, 5) Source(37, 36) + SourceIndex(3)
2 >Emitted(91, 46) Source(37, 37) + SourceIndex(3)
3 >Emitted(91, 47) Source(37, 39) + SourceIndex(3)
4 >Emitted(91, 88) Source(37, 40) + SourceIndex(3)
5 >Emitted(91, 89) Source(37, 42) + SourceIndex(3)
6 >Emitted(91, 130) Source(37, 43) + SourceIndex(3)
7 >Emitted(91, 131) Source(37, 43) + SourceIndex(3)
---
>>>})(internalEnum || (internalEnum = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^
5 >               ^^^^^
6 >                    ^^^^^^^^^^^^
7 >                                ^^^^^^^^
1 > 
2 >}
3 > 
4 >   internalEnum
5 >               
6 >                    internalEnum
7 >                                 { a, b, c }
1 >Emitted(92, 1) Source(37, 44) + SourceIndex(3)
2 >Emitted(92, 2) Source(37, 45) + SourceIndex(3)
3 >Emitted(92, 4) Source(37, 21) + SourceIndex(3)
4 >Emitted(92, 16) Source(37, 33) + SourceIndex(3)
5 >Emitted(92, 21) Source(37, 21) + SourceIndex(3)
6 >Emitted(92, 33) Source(37, 33) + SourceIndex(3)
7 >Emitted(92, 41) Source(37, 45) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = /** @class */ (function () {
1 >
2 >^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(93, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(94, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }C.prototype.doSomething = function () {
1->^^^^
2 >    ^
3 >     
4 >     ^^^^^^^^^^^^^^^^^^^^^^^
5 >                            ^^^
6 >                               ^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
3 >     
4 >     doSomething
5 >                            
1->Emitted(95, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(95, 6) Source(5, 2) + SourceIndex(4)
3 >Emitted(95, 6) Source(2, 5) + SourceIndex(4)
4 >Emitted(95, 29) Source(2, 16) + SourceIndex(4)
5 >Emitted(95, 32) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(96, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(96, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(96, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(96, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(96, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(96, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(96, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(96, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(97, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(97, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(98, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(98, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(99, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(99, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(99, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(99, 6) Source(5, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>var c = new C();
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1->
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1->Emitted(100, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(100, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(100, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(100, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(100, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(100, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(100, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(100, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(101, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(101, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(101, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(101, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(101, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(101, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "../..",
    "sourceFiles": [
      "../../third_part1.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 3418,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 0,
              "end": 3418,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 3418,
          "end": 3454,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 276,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 276,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 276,
          "end": 295,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prepend: (0-3418):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (0-3418)
/**@internal*/ 

var s = "Hello, world";

console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
var N;
(function (N) {
    function f() {
        console.log('testing');
    }

    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /**@internal*/ function normalC() {}

    /**@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /**@internal*/ get: function () { return 10; },
        /**@internal*/ set: function (val) { },
        enumerable: false,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /**@internal*/ var C = /** @class */ (function () {
        function C() {}
        return C;
    }());
    normalN.C = C;
    /**@internal*/ function foo() { }
    normalN.foo = foo;
    /**@internal*/ var someNamespace;
    (function (someNamespace) {var C = /** @class */ (function () {
            function C() {}
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /**@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {var someClass = /** @class */ (function () {
                function someClass() {}
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /**@internal*/ normalN.someImport = someNamespace.C;

    /**@internal*/ normalN.internalConst = 10;
    /**@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/**@internal*/ var internalC = /** @class */ (function () {
    function internalC() {}
    return internalC;
}());
/**@internal*/ function internalfoo() { }
/**@internal*/ var internalNamespace;
(function (internalNamespace) {var someClass = /** @class */ (function () {
        function someClass() {}
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/**@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {var someClass = /** @class */ (function () {
            function someClass() {}
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/**@internal*/ var internalImport = internalNamespace.someClass;

/**@internal*/ var internalConst = 10;
/**@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";internalEnum[internalEnum["b"] = 1] = "b";internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

----------------------------------------------------------------------
text: (3418-3454)
var c = new C();
c.doSomething();

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-276):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-276)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;
declare namespace N {
}
declare namespace N {
}
declare class normalC {
}
declare namespace normalN {
}
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
text: (276-295)
declare var c: C;

======================================================================

//// [/src/third/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": false,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "stripInternal": true,
    "outFile": "./thirdjs/output/third-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "third_part1.ts"
  ],
  "references": [
    
    { "path": "../second", "prepend": true },
  ]
}


