var a=10;
let b=20;
const c=30;

function print(){
    var a=`ten`;
    let b=`twenty`;
    console.log('Inside print');
    console.log(a,b,c);

    function innerPrint(){
        var a='TEN';
        console.log('Inside Innerprint');
        console.log(a,b,c);
    }
    innerPrint();

}
print();
console.log('global');
console.log(a,b,c);
