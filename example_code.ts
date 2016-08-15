function klsDec() {
   return function(constructor: Function) {
      // do nothing
   }
}

function propDec() {
   return function(proto: any, name: string) {
      console.log('prop decorated: ' + name);
   }
}

class BaseClass {
   var: string;
}

class ChildClass {
   var2: string;
}


class Blah {
   @propDec()
   myString: string;

   @propDec()
   myObject: Object;

   @propDec()
   myNum: number;

   @propDec()
   myBase: BaseClass;

   @propDec()
   myChild: ChildClass;

   @propDec()
   myDate: Date;
}

console.log('Hello World');
