f = open("input.txt", "r")
data = f.read().split("\n")


def part_one(data):
    x, cycle = 1, 1
    acc = 0
    for instruction in data:
        if instruction == "noop":
            cycle += 1
        else:
            cycle += 1
            if cycle == 20 or (cycle - 20) % 40 == 0:
                acc += (cycle * x)
            cycle += 1
            command, value = instruction.split(" ")
            x += int(value)
        if cycle == 20 or (cycle - 20) % 40 == 0:
            acc += (cycle * x)
    return acc


def screen_display(screen):
    for line in screen:
        for char in line:
            print(char, end=' ')
        print()


def sprite_middle_position(cycle, screen, x):
    i = cycle // 40
    j = x % 40
    result = []
    return cycle // 40, x % 40


def add_pixel(screen, cycle, x):
    if cycle <= 240:
        column = (cycle - 1) % 40
        row = (cycle - 1) // 40
        if column % 40 - sprite_middle_position(cycle, screen, x)[1] in range(-1, 2):
            screen[row][column] = "#"
        else:
            screen[row][column] = "."

    return screen


def part_two(data):
    screen = [[""] * 40 for i in range(6)]

    x, cycle = 1, 1
    screen = add_pixel(screen, cycle, x)
    for instruction in data:
        if instruction == "noop":
            cycle += 1
            screen = add_pixel(screen, cycle, x)
        else:
            command, value = instruction.split(" ")
            cycle += 1
            screen = add_pixel(screen, cycle, x)
            cycle += 1
            x += int(value)
            screen = add_pixel(screen, cycle, x)

    screen_display(screen)


print(part_one(data))
print(part_two(data))
