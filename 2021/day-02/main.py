from aocd import get_data

data = get_data(day=2, year=2021).split('\n')
commands = []
for element in data:
    commands.append(element.split(" "))


def part_one():
    horizontal_pos, depth = 0, 0
    for command in commands:
        if command[0] == "forward":
            horizontal_pos += int(command[1])
        if command[0] == "down":
            depth += int(command[1])
        if command[0] == "up":
            depth -= int(command[1])
    return horizontal_pos * depth


def part_two():
    horizontal_pos, depth, aim = 0, 0, 0
    for command in commands:
        if command[0] == "forward":
            horizontal_pos += int(command[1])
            depth += aim * int(command[1])
        if command[0] == "down":
            aim += int(command[1])
        if command[0] == "up":
            aim -= int(command[1])
    return horizontal_pos * depth


print(part_one())
print(part_two())
