function cb() {
  console.log(`processing on the next event loop tick`);
}

setTimeout(() => {
  console.log(`Procssing after set time out`);
}, 0);

process.nextTick(cb);


function evaluate(value) {
  return Promise.resolve(value*5);
}

async function go() {
  const result = await evaluate(10);
  console.log(result);
}

go()

console.log(`I'm sync op`)
