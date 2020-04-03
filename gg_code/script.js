let test_number = 1;

const buy = (b, tab) => {
  let y = 0;
  tab = tab.sort();

  tab.forEach((item, i) => {
    if (b >= item) {
      y++;
      b -= item;
    }
  });

  console.log(`Case #${test_number++}: ${y}`);
};

buy(100, [20, 90, 40, 90]);
buy(50, [30, 30, 10, 10]);
buy(300, [999, 999, 999]);
