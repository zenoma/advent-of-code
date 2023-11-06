def read_input():
    f = open("input.txt", "r")
    return f.read().split("\n")


def part_one(data):
    acc = 0
    for item in data:
        half = len(item) // 2
        first_half = item[0:half]
        second_half = item[half:]

        common_char = ""
        for char in first_half:
            if char in second_half:
                common_char = char
        number = ord(common_char)
        if (number >= 65) and (number < 97):
            acc += number - 38
        elif number >= 97:
            acc += number - 96
    return acc


def part_two(data):
    acc = 0
    for index in range(0, len(data), 3):
        for char in data[index]:
            if char in data[index + 1]:
                if char in data[index + 2]:
                    number = ord(char)
                    if (number >= 65) and (number < 97):
                        acc += number - 38
                        break
                    elif number >= 97:
                        acc += number - 96
                        break
    return acc


print(part_one(read_input()))
print(part_two(read_input()))
