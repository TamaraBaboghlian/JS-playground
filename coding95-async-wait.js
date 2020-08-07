const timeoutPromise = (timeout, number) =>
  new Promise((resolve) => setTimeout(resolve(number), timeout));

const z = async () => {
  for (var i = 0; i < 10; i++) {
    const number = await timeoutPromise(i * 10, i);
    console.log(number);
  }
};

z();

const y = async () => {
  const answer = await timeoutPromise(1000, "Million");
  console.log(answer);
};

y();

const q = async () => {
  const promises = [];
  for (let i = 0; i < 10; i++) {
    const p = timeoutPromise(i * 10, i);
    promises.push(p);
  }
  console.log(promises);
  const result = await Promise.all(promises);
  console.log(result);
};

q();
