import numpy as np

f = open("input.txt", "r")
data = f.read().split("\n")


def move_rope(head, tail, direction):
    if direction == "R":
        head_movement = [0, 1]
    elif direction == "L":
        head_movement = [0, -1]
    elif direction == "U":
        head_movement = [-1, 0]
    elif direction == "D":
        head_movement = [1, 0]
    else:
        print(direction)

    head = np.add(head, head_movement)

    diff = np.subtract(head, tail)

    if diff[0] > 1 or -1 > diff[0] or diff[1] > 1 or -1 > diff[-1]:
        tail_movement = [1 if i != 0 else 0 for i in diff]
        tail_movement = np.sign(diff) * tail_movement
        tail = np.add(tail, tail_movement).tolist()

    return head, tail


def get_unique_values(list1):
    # initialize a null list
    unique_list = []

    # traverse for all elements
    for x in list1:
        # check if exists in unique_list or not
        if x not in unique_list:
            unique_list.append(x)
    return unique_list


def part_one(data):
    tail_pos = []
    head, tail = [0, 0], [0, 0]

    for i in data:
        direction, num = i.split()
        num = int(num)
        for j in range(num):
            head, tail = move_rope(head, tail, direction)
            tail_pos.append(tail)

    return len(get_unique_values(tail_pos))


def move_longer_rope(rope_list, direction):
    if direction == "R":
        head_movement = [0, 1]
    elif direction == "L":
        head_movement = [0, -1]
    elif direction == "U":
        head_movement = [-1, 0]
    elif direction == "D":
        head_movement = [1, 0]
    else:
        print(direction)

    rope_list[0].append(np.add(rope_list[0][-1], head_movement).tolist())

    for i, j in enumerate(rope_list):
        if i != 9:
            head, tail = j[-1], rope_list[i + 1][-1]
            diff = np.subtract(head, tail)

            if diff[0] > 1 or -1 > diff[0] or diff[1] > 1 or -1 > diff[-1]:
                tail_movement = [1 if i != 0 else 0 for i in diff]
                tail_movement = np.sign(diff) * tail_movement
                tail = np.add(tail, tail_movement).tolist()
            rope_list[i + 1].append(tail)

    return rope_list


def part_two(data):
    rope_list = [[(0, 0)] for i in range(10)]

    for i in data:
        direction, num = i.split()
        num = int(num)
        for i in range(num):
            rope_list = move_longer_rope(rope_list, direction)

    # The -1 it's because is counting the [0,0] as unique value
    return len(get_unique_values(rope_list[-1])) - 1


print(part_one(data))
print(part_two(data))
