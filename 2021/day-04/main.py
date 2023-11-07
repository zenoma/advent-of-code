import copy

from aocd import get_data

data = get_data(day=4, year=2021).split('\n')

# data = ["7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1"
#     ,
#         "22 13 17 11  0",
#         " 8  2 23  4 24",
#         "21  9 14 16  7",
#         " 6 10  3 18  5",
#         " 1 12 20 15 19"
#     ,
#         " 3 15  0  2 22",
#         " 9 18 13 17  5",
#         "19  8  7 25 23",
#         "20 11 10 24  4",
#         "14 21 16 12  6"
#     ,
#         "14 21 17 24  4",
#         "10 16 15  9 19",
#         "18  8 23 26 20",
#         "22 11 13  6  5",
#         " 2  0 12  3  7"]

data = [line for line in data if line.strip()]


def split_data():
    numbers = data[0]
    boards = []
    board_size = 5

    numbers = [int(num) for num in numbers.split(',')]

    for i in range(1, len(data) - 1, board_size):
        board = []
        for line in data[i:i + board_size]:
            number_list = [int(num) for num in line.split()]
            board.append(number_list)
        boards.append(board)

    return numbers, boards


def check_bingo(board):
    for row in board:
        if all(element == -1 for element in row):
            return True

    num_columns = len(board[0])
    for col in range(num_columns):
        if all(row[col] == -1 for row in board):
            return True
    return False


def part_one():
    numbers, boards = split_data()
    bingo = False
    n, i, j = 0, 0, 0
    called_number = 0
    bingo_board = []
    while not bingo and n < (len(numbers)):
        number = numbers[n]
        while not bingo and i < (len(boards)):
            board = boards[i]
            while not bingo and j < (len(board)):
                row = board[j]
                if number in row:
                    row[row.index(number)] = -1
                bingo = check_bingo(board)
                called_number = numbers[n]
                bingo_board = boards[i]
                j += 1
            j = 0
            i += 1
        i = 0
        n += 1

    result = 0
    for bingo_row in bingo_board:
        for element in bingo_row:
            if element != -1:
                result += element

    return result * called_number


def part_two():
    numbers, boards = split_data()
    bingo = False
    n, i, j = 0, 0, 0
    called_number = 0
    list_of_bingo_boards = []

    while n < (len(numbers)):
        number = numbers[n]
        while i < (len(boards)):
            board = boards[i]
            while j < (len(board)):
                row = board[j]
                if number in row:
                    row[row.index(number)] = -1
                bingo = check_bingo(board)
                called_number = numbers[n]
                if bingo:
                    # Define the dictionary to append
                    board_data = {"board_index": i, "called_number": called_number,
                                  "bingo_board": copy.deepcopy(boards[i])}

                    # Check if the board_index is already in the list
                    is_already_bingo = False  # Initialize to False

                    for b in list_of_bingo_boards:
                        if b["board_index"] == board_data["board_index"]:
                            is_already_bingo = True
                            break  # No need to continue checking once we find a match

                    if not is_already_bingo:
                        list_of_bingo_boards.append(board_data)
                j += 1
            j = 0
            i += 1
        i = 0
        n += 1

    result = 0
    last_bingo_board = list_of_bingo_boards[(len(list_of_bingo_boards) - 1)]["bingo_board"]
    for bingo_row in last_bingo_board:
        for element in bingo_row:
            if element != -1:
                result += element

    return result * list_of_bingo_boards[(len(list_of_bingo_boards) - 1)]["called_number"]


print(part_one())
print(part_two())
