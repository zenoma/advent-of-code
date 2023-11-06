f = open("input.txt", "r")
data = f.read().split("\n")


def part_one(data):
    count = 0
    for ranges in data:
        pair = ranges.split(",")
        range_a = [int(x) for x in pair[0].split("-")]
        range_b = [int(x) for x in pair[1].split("-")]
        # A inside B or B inside A
        if range_a[0] <= range_b[0] and range_a[1] >= range_b[1]:
            count += 1
        elif range_b[0] <= range_a[0] and range_b[1] >= range_a[1]:
            count += 1

    return count


def part_two(data):
    count = 0
    for ranges in data:
        pair = ranges.split(",")
        range_a = [int(x) for x in pair[0].split("-")]
        range_b = [int(x) for x in pair[1].split("-")]
        # A inside B or B inside A
        if (range_b[0] <= range_a[0] <= range_b[1]) or (range_a[0] <= range_b[0] <= range_a[1]):
            count += 1

    return count


print(part_one(data))
print(part_two(data))
