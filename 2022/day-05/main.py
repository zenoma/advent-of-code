def read_file():
    input_text = open("input.txt", 'r').read()
    rows, moves = input_text.split('\n\n')
    rows = rows.splitlines()
    stacks = {int(digit): [] for digit in rows[-1].replace(" ", "")}
    rows = rows[:-1]

    # Parse input to stacks
    for column in rows:
        column = column.replace("    ", "[-] ")
        column = column.split(" ")
        count = 1
        for crate in column:
            if crate != "[-]":
                stacks[count].append(crate)
            count += 1

    for index in range(1, len(stacks) + 1):
        stacks[index] = stacks[index][::-1]

    moves = moves.replace("move ", "").replace("from ", "").replace("to ", "").strip().split("\n")
    instructions = []

    for instruction in moves:
        instructions.append(instruction.split(" "))

    return stacks,  instructions


def part_one(data):
    stacks, instructions = data

    # move x from y to z
    for instruction in instructions:
        number = int(instruction[0])
        origin = int(instruction[1])
        destination = int(instruction[2])
        while number > 0:
            extract = stacks[origin].pop()
            while extract == '':
                extract = stacks[origin].pop()

            stacks[destination].append(extract)
            number -= 1

    message = ''
    for index in range(1, len(stacks) + 1):
        message += stacks[index].pop()

    return message.replace("[", "").replace("]", "")


def part_two(data):
    stacks, instructions = data

    # move x from y to z
    for instruction in instructions:
        number = int(instruction[0])
        origin = int(instruction[1])
        destination = int(instruction[2])
        group = []
        while number > 0:
            extract = stacks[origin].pop()
            while extract == '':
                extract = stacks[origin].pop()
            group.append(extract)
            number -= 1
        group = group[::-1]
        for item in group:
            stacks[destination].append(item)

    message = ''
    for index in range(1, len(stacks) + 1):
        message += stacks[index].pop()

    return message.replace("[", "").replace("]", "")


print(part_one(read_file()))
print(part_two(read_file()))
