from aocd import get_data

board_size = 1000


def get_treated_data():
    data = get_data(day=5, year=2021).split('\n')
    # data = ["0,9 -> 5,9",
    # "8,0 -> 0,8",
    # "9,4 -> 3,4",
    # "2,2 -> 2,1",
    # "7,0 -> 7,4",
    # "6,4 -> 2,0",
    # "0,9 -> 2,9",
    # "3,4 -> 1,4",
    # "0,0 -> 8,8",
    # "5,5 -> 8,2"]

    pairs = []
    data = [x.split(" -> ") for x in data]
    # Loop through each pair string
    for pair_string in data:
        # Split the pair string into individual numbers using a comma
        x, y = pair_string
        x1, y1 = x.split(',')
        x2, y2 = y.split(',')
        # Convert the numbers to integers and add them to the pairs array
        pairs.append([(int(x1), int(y1)), (int(x2), int(y2))])

    return pairs


def get_board(filtered_pairs):
    board = [[0 for _ in range(board_size)] for _ in range(board_size)]
    for pair1, pair2 in filtered_pairs:
        x1, y1 = pair1
        x2, y2 = pair2
        x_range = range(min(x1, x2), max(x1, x2) + 1)
        y_range = range(min(y1, y2), max(y1, y2) + 1)
        for x in x_range:
            for y in y_range:
                board[y][x] += 1
    return board


def part_one():
    pairs = get_treated_data()
    filtered_pairs = []
    for pair1, pair2 in pairs:
        x1, y1 = pair1
        x2, y2 = pair2
        if x1 == x2 or y1 == y2:
            filtered_pairs.append([pair1, pair2])

    board = get_board(filtered_pairs)

    acc = 0
    for row in board:
        for element in row:
            if element >= 2:
                acc += 1

    return acc


def get_board_two(pairs):
    board = [[0 for _ in range(board_size)] for _ in range(board_size)]

    def draw_line(x1, y1, x2, y2):
        if x1 == x2:
            # Vertical line
            for y in range(min(y1, y2), max(y1, y2) + 1):
                board[y][x1] += 1
        elif y1 == y2:
            # Horizontal line
            for x in range(min(x1, x2), max(x1, x2) + 1):
                board[y1][x] += 1
        else:
            # Diagonal line
            if x1 > x2:
                start = x2, y2
                finish = x1, y1
            else:
                start = x1, y1
                finish = x2, y2
            x1, y1 = start
            x2, y2 = finish
            while x1 <= x2:
                board[x1][y1] += 1
                x1 += 1
                if y1 > y2:
                    y1 -= 1
                else:
                    y1 += 1

    for pair in pairs:
        pair1, pair2 = pair
        x1, y1 = pair1
        x2, y2 = pair2
        draw_line(x1, y1, x2, y2)

    return board


def part_two():
    pairs = get_treated_data()
    board = get_board_two(pairs)

    acc = 0
    for row in board:
        for element in row:
            if element >= 2:
                acc += 1

    return acc


print(part_one())
print(part_two())
