f = open("input.txt", "r")
data = f.read()


def part_one(data):
    acc = ""
    for index in range(0, len(data)):
        char = data[index]
        if char in acc:
            acc = ""
        else:
            acc += data[index]
        if len(acc) == 4:
            return index


def part_two(data):
    acc = ""
    for index in range(0, len(data)):
        char = data[index]
        if char in acc:
            pivot = acc.find(char) + 1
            acc = acc[pivot:]
        acc += data[index]
        if len(acc) == 14:
            return index + 1


print(part_one(data))
print(part_two(data))
