from aocd import get_data

data = get_data(day=1, year=2023).split('\n')


def part_one():
    first_digit, last_digit, acc = 0, 0, 0
    for line in data:
        for first_char in line:
            if first_char.isdigit():
                first_digit = first_char
                break
        line = line[::-1]
        for second_char in line:
            if second_char.isdigit():
                last_digit = second_char
                break
        acc += int(first_digit + last_digit)
        first_digit, last_digit = 0, 0
    return acc


def part_two():
    spelled_numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    first_digit, last_digit, acc = 0, 0, 0
    for line in data:
        for i in range(len(spelled_numbers)):
            if spelled_numbers[i] in line:
                line = line.replace(spelled_numbers[i], spelled_numbers[i][0] + str(i + 1) + spelled_numbers[i][-1])

        for first_char in line:
            if first_char.isdigit():
                first_digit = first_char
                break
        line = line[::-1]
        for second_char in line:
            if second_char.isdigit():
                last_digit = second_char
                break
        acc += int(first_digit + last_digit)
        first_digit, last_digit = 0, 0
    return acc


print(part_one())
print(part_two())
