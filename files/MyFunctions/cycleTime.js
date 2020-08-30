
const start = new Date();
for( let i = 0; i< 1000000; i++){
    let some = i ** 3;
}
const end = new Date();
alert(`Цикл отработал за ${end - start} миллисекунд! `);

