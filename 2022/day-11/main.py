class Monkey:
    def __init__(self, items, operation, test: dict):
        self.items = items
        self.operation = operation
        self.test = test
        self.items_inspected = 0

    def throw(self):

        items = list()

        for old in self.items:
            self.items_inspected += 1
            old = eval(self.operation) // 3

            if old % self.test['value'] == 0:
                items.append((self.test['true'], old))
            else:
                items.append((self.test['false'], old))

        self.items.clear()
        return items

    def throw2(self, monkey_mod):

        items = list()

        for old in self.items:
            self.items_inspected += 1
            # Monkey_mod it's the Greatest Common Factor (m.c.m.) of all the divisions of the input
            old = eval(self.operation) % monkey_mod

            if old % self.test['value'] == 0:
                items.append((self.test['true'], old))
            else:
                items.append((self.test['false'], old))

        self.items.clear()
        return items

    def catch(self, item):
        self.items.append(item)

    def __str__(self):
        return f"Monkey: \n" \
               f"   Items: {self.items} \n" \
               f"   Operation: {self.operation} \n" \
               f"   Test: \n" \
               f"       value: {self.test['value']} \n" \
               f"       true:  {self.test['true']}\n" \
               f"       false: {self.test['false']}"


def parse_input():
    f = open("input.txt", "r")
    data = f.read().split("\n\n")
    monkeys = []
    items = []
    operation, value, true, false = "", "", "", ""
    for block in data:
        block = block.split("\n")
        for line in block:
            if line.startswith("  Starting"):
                items = [int(x) for x in line.split(": ")[1].split(",")]
            if line.startswith("  Operation"):
                operation = line.split(": ")[1].split("=")[1]
            if line.startswith("  Test"):
                value = int(line.split(": ")[1].split("by")[1])
            if line.startswith("    If true"):
                true = int(line.split("monkey")[1])
            if line.startswith("    If false"):
                false = int(line.split("monkey")[1])
        monkeys.append(Monkey(items, operation, {"value": value, "true": true, "false": false}))

    return monkeys


def part_one(monkeys):
    for i in range(20):
        for monkey in monkeys:
            throws = monkey.throw()
            for throw in throws:
                monkeys[throw[0]].catch(throw[1])

    acc = []
    for monkey in monkeys:
        acc.append(monkey.items_inspected)

    result = max(acc)
    acc.remove(max(acc))
    return result * max(acc)


def part_two(monkeys):
    monkey_mod = 1

    # Monkey_mod it's the Greatest Common Factor (m.c.m.) of all the divisions of the input
    # This help ups to keep in low values the Worry Levels of the items
    for monkey in monkeys:
        monkey_mod *= monkey.test["value"]

    for i in range(10000):
        for monkey in monkeys:
            throws = monkey.throw2(monkey_mod)
            for throw in throws:
                monkeys[throw[0]].catch(throw[1])

    acc = []
    for monkey in monkeys:
        acc.append(monkey.items_inspected)

    result = max(acc)
    acc.remove(max(acc))
    return result * max(acc)


print(part_one(parse_input()))
print(part_two(parse_input()))
