f = open("input.txt", "r")
data = f.read().split("\n")


def part_one(data):
    acc, max_inventory = 0, 0
    for item in data:
        if item != '':
            acc += int(item)
        else:
            if acc > max_inventory:
                max_inventory = acc
            acc = 0
    return max_inventory


def part_two(data):
    acc = 0
    most_inventory = []
    for item in data:
        if item != '':
            acc += int(item)
        else:
            if len(most_inventory) < 3:
                most_inventory.append(acc)
            elif min(most_inventory) < acc:
                most_inventory[most_inventory.index(min(most_inventory))] = acc
            acc = 0
    return sum(most_inventory)


print(part_one(data))
print(part_two(data))
