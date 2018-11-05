let DIARY = [];

// Function that adds item to the diary. Item is an array and octupus is a boolean.
function addEntry(item, octopus) {
  DIARY.push({item, octopus});
}


// Returns journal.
function printJournal(journal) {
  return journal;
}

// Calculates the correlation of each entry of the diary.
function correlation(table) {
  let upper = table[3] * table[0] - table[2] * table[1];
  let lower = Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
  return upper / lower;
}

// Rounds the correlation numbers down to two decimals for enhanced readability.
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}


// Creates the table, used for the calculation of correlation.
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i=0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.item.includes(event)) index += 1;
    if (entry.octopus) index += 2;
    table[index] += 1;
  }

  return table;
}


// Creating a list in which we store all the different item.
function journalitem(journal) {
  let item = [];
  for (let entry of journal) {
    for (let event of entry.item) {
      if (!item.includes(event)) {
        item.push(event);
      }
    }
  }
  return item;
}

// Creates a list in which we add all the item and their corresponding correlation.
function showCorrelation(journal) {
  let item = [];
  for (let event of journalitem(journal)) {
    let corr = correlation(tableFor(event, journal));
    item.push({event, corr});
  }

  return item;
}

// Tells us the reason why Mariano transforms and the exception to the rule.
function whenOctopus() {
  let highest = 0;
  let lowest = 0;
  let reason;
  for (let event of showCorrelation(DIARY)) {
    if (event['corr'] > highest) {
      highest = event['corr'];
      highest_reason = event['event'];
    }

    if (event['corr'] < lowest) {
      lowest = event['corr'];
      lowest_reason = event['event'];
    }
  }

  if (lowest_reason == "brushed teeth") {
  	lowest_reason = "brushes his teeth.";
  } 

  return [highest_reason + ".", lowest_reason]
}

// Adding all the test cases from David into the diary.
addEntry(["carrot","exercise","weekend"], false);
addEntry(["bread","pudding","brushed teeth","weekend","touched tree"], false);
addEntry(["carrot","nachos","brushed teeth","cycling","weekend"], false);
addEntry(["brussel sprouts","ice cream","brushed teeth","computer","weekend"], false);
addEntry(["potatoes","candy","brushed teeth","exercise","weekend","dentist"], false);
addEntry(["brussel sprouts","pudding","brushed teeth","running","weekend"], false);
addEntry(["pizza","brushed teeth","computer","work","touched tree"], false);
addEntry(["bread","beer","brushed teeth","cycling","work"], false);
addEntry(["cauliflower","brushed teeth","work"], false);
addEntry(["pizza","brushed teeth","cycling","work"], false);
addEntry(["lasagna","nachos","brushed teeth","work"], false);
addEntry(["brushed teeth","weekend","touched tree"], false);
addEntry(["lettuce","brushed teeth","television","weekend"], false);
addEntry(["spaghetti","brushed teeth","work"], false);
addEntry(["brushed teeth","computer","work"], false);
addEntry(["lettuce","nachos","brushed teeth","work"], false);
addEntry(["carrot","brushed teeth","running","work"], false);
addEntry(["brushed teeth","work"], false);
addEntry(["cauliflower","reading","weekend"], false);
addEntry(["bread","brushed teeth","weekend"], false);
addEntry(["lasagna","brushed teeth","exercise","work"], false);
addEntry(["spaghetti","brushed teeth","reading","work"], false);
addEntry(["carrot","ice cream","brushed teeth","television","work"], false);
addEntry(["spaghetti","nachos","work"], false);
addEntry(["cauliflower","ice cream","brushed teeth","cycling","work"], false);
addEntry(["spaghetti","peanuts","computer","weekend"], true);
addEntry(["potatoes","ice cream","brushed teeth","computer","weekend"], false);
addEntry(["potatoes","ice cream","brushed teeth","work"], false);
addEntry(["peanuts","brushed teeth","running","work"], false);
addEntry(["potatoes","exercise","work"], false);
addEntry(["pizza","ice cream","computer","work"], false);
addEntry(["lasagna","ice cream","work"], false);
addEntry(["cauliflower","candy","reading","weekend"], false);
addEntry(["lasagna","nachos","brushed teeth","running","weekend"], false);
addEntry(["potatoes","brushed teeth","work"], false);
addEntry(["carrot","work"], false);
addEntry(["pizza","beer","work","dentist"], false);
addEntry(["lasagna","pudding","cycling","work"], false);
addEntry(["spaghetti","brushed teeth","reading","work"], false);
addEntry(["spaghetti","pudding","television","weekend"], false);
addEntry(["bread","brushed teeth","exercise","weekend"], false);
addEntry(["lasagna","peanuts","work"], true);
addEntry(["pizza","work"], false);
addEntry(["potatoes","exercise","work"], false);
addEntry(["brushed teeth","exercise","work"], false);
addEntry(["spaghetti","brushed teeth","television","work"], false);
addEntry(["pizza","cycling","weekend"], false);
addEntry(["carrot","brushed teeth","weekend"], false);
addEntry(["carrot","beer","brushed teeth","work"], false);
addEntry(["pizza","peanuts","candy","work"], true);
addEntry(["carrot","peanuts","brushed teeth","reading","work"], false);
addEntry(["potatoes","peanuts","brushed teeth","work"], false);
addEntry(["carrot","nachos","brushed teeth","exercise","work"], false);
addEntry(["pizza","peanuts","brushed teeth","television","weekend"], false);
addEntry(["lasagna","brushed teeth","cycling","weekend"], false);
addEntry(["cauliflower","peanuts","brushed teeth","computer","work","touched tree"], false);
addEntry(["lettuce","brushed teeth","television","work"], false);
addEntry(["potatoes","brushed teeth","computer","work"], false);
addEntry(["bread","candy","work"], false);
addEntry(["potatoes","nachos","work"], false);
addEntry(["carrot","pudding","brushed teeth","weekend"], false);
addEntry(["carrot","brushed teeth","exercise","weekend","touched tree"], false);
addEntry(["brussel sprouts","running","work"], false);
addEntry(["brushed teeth","work"], false);
addEntry(["lettuce","brushed teeth","running","work"], false);
addEntry(["candy","brushed teeth","work"], false);
addEntry(["brussel sprouts","brushed teeth","computer","work"], false);
addEntry(["bread","brushed teeth","weekend"], false);
addEntry(["cauliflower","brushed teeth","weekend"], false);
addEntry(["spaghetti","candy","television","work","touched tree"], false);
addEntry(["carrot","pudding","brushed teeth","work"], false);
addEntry(["lettuce","brushed teeth","work"], false);
addEntry(["carrot","ice cream","brushed teeth","cycling","work"], false);
addEntry(["pizza","brushed teeth","work"], false);
addEntry(["spaghetti","peanuts","exercise","weekend"], true);
addEntry(["bread","beer","computer","weekend","touched tree"], false);
addEntry(["brushed teeth","running","work"], false);
addEntry(["lettuce","peanuts","brushed teeth","work","touched tree"], false);
addEntry(["lasagna","brushed teeth","television","work"], false);
addEntry(["cauliflower","brushed teeth","running","work"], false);
addEntry(["carrot","brushed teeth","running","work"], false);
addEntry(["carrot","reading","weekend"], false);
addEntry(["carrot","peanuts","reading","weekend"], true);
addEntry(["potatoes","brushed teeth","running","work"], false);
addEntry(["lasagna","ice cream","work","touched tree"], false);
addEntry(["cauliflower","peanuts","brushed teeth","cycling","work"], false);
addEntry(["pizza","brushed teeth","running","work"], false);
addEntry(["lettuce","brushed teeth","work"], false);
addEntry(["bread","brushed teeth","television","weekend"], false);
addEntry(["cauliflower","peanuts","brushed teeth","weekend"], false);

// Final outputs
console.log("The reason why Mariano becomes an octopus is: eating", whenOctopus()[0], "He transforms every time except when he", whenOctopus()[1]);
console.log("");
console.log("List of item and their correlation:")
for (let event of showCorrelation(DIARY)) {
  console.log(event['event'] + ": " + roundToTwo(event['corr']));
}
// console.log("");
// console.log("Diario:");
// console.log(DIARY);
