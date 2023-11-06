from aocd import get_data

data = get_data(day=1, year=2021).split('\n')
numbers = [int(x) for x in data]


def part_one():
    acc = 0
    for i in range(len(numbers) - 1):
        if numbers[i + 1] > numbers[i]:
            acc += 1
    return acc


def part_two():
    acc = 0
    window = 3

    for i in range(len(numbers) - window):
        window_sum, next_window_sum = 0, 0
        for window_it in range(window):
            window_sum += numbers[window_it + i]
        for next_window_it in range(window):
            next_window_sum += numbers[next_window_it + i + 1]
        if next_window_sum > window_sum:
            acc += 1
    return acc


print(part_one())
print(part_two())
