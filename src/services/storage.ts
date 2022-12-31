const setCounter = (counter: number) => browser.storage.local.set({ counter });

const getCounter = async () => {
  const { counter } = await browser.storage.local.get("counter");

  if (typeof counter !== "number") {
    throw new Error(`received an invalid value: ${JSON.stringify(counter)}`);
  }

  return counter;
};

export default { setCounter, getCounter };
