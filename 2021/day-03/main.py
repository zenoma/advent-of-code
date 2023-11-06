from aocd import get_data

data = get_data(day=3, year=2021).split('\n')


def part_one():
    zeros, ones = 0, 0
    gamma_rate, epsilon_rate = "", ""
    for i in range(len(data[0])):
        for number in data:
            n_byte = number[i]
            if n_byte == "0":
                zeros += 1
            else:
                ones += 1
        if zeros > ones:
            gamma_rate += "0"
            epsilon_rate += "1"
        else:
            gamma_rate += "1"
            epsilon_rate += "0"
        zeros, ones = 0, 0
    return int(gamma_rate, 2) * int(epsilon_rate, 2)


def part_two():
    zeros, ones = 0, 0
    oxygen_data, co2_data = data, data

    # oxygen_generator_rating
    i = 0
    while len(oxygen_data) > 1:
        for element in oxygen_data:
            if element[i] == "0":
                zeros += 1
            elif element[i] == "1":
                ones += 1
        if zeros > ones:
            oxygen_data = [x for x in oxygen_data if x[i] == "0"]
        if ones >= zeros:
            oxygen_data = [x for x in oxygen_data if x[i] == "1"]

        if len(oxygen_data) == 1:
            break
        zeros, ones = 0, 0
        i += 1

    # co2_rating
    i = 0
    while len(co2_data) > 1:
        for element in co2_data:
            if element[i] == "0":
                zeros += 1
            elif element[i] == "1":
                ones += 1
        if zeros > ones:
            co2_data = [x for x in co2_data if x[i] == "1"]
        if ones >= zeros:
            co2_data = [x for x in co2_data if x[i] == "0"]
        zeros, ones = 0, 0
        i += 1

    return int(oxygen_data[0], 2) * int(co2_data[0], 2)


print(part_one())
print(part_two())
