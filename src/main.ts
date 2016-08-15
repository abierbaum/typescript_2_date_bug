function klsDec(params: Object) {
   return function(constructor: Function) {
      // do nothing
   }
}

function propDec() {
   return function(proto: any, name: string) {
      console.log('prop decorated: ' + name);
   };
}

class BaseClass {
   var: string;
}


@klsDec({
   typeId: 'test_date',
})
class TestDate extends BaseClass {
   @propDec() myDate: Date;
}

