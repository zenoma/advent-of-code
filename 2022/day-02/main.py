# def read_input():
#     f = open("input.txt", "r")
#     data = f.read().split("\n")
#     games = []
#     for game in data:
#         games.append(game.split(" "))
#     return games
#
def read_input():
    data = [x.strip() for x in open("input.txt").read().split("\n")]
    return data


# A for Rock, B for Paper, and C for Scissors
# X for Rock, Y for Paper, and Z for Scissors
# 1 for Rock, 2 for Paper, and 3 for Scissors
# 0 lost, 3 draw, and 6 won

# def match_score(hand_1, hand_2):
#     acc = 0
#     score = 0
#
#     # Your choices
#     if hand_2 == "X":
#         acc += 1
#     if hand_2 == "Y":
#         acc += 2
#     if hand_2 == "Z":
#         acc += 3
#
#     # Draws
#     if (hand_1 == "A" and hand_2 == "X") or (hand_1 == "B" and hand_2 == "Y") or (hand_1 == "C" and hand_2 == "Z"):
#         score = 3
#     # Wins
#     if (hand_1 == "A" and hand_2 == "Y") or (hand_1 == "B" and hand_2 == "Z") or (hand_1 == "C" and hand_2 == "X"):
#         score = 6
#     return score + acc
#
#
# def part_one(games):
#     result = []
#     for game in games:
#         result.append(match_score(game[0], game[1]))
#     return sum(result)


# X means you need to lose,
# Y means you need to draw,
# Z means you need to win

# def part_two(games):
#     result = []
#     for game in games:
#         if game[1] == "Y":
#             if game[0] == "A":
#                 result.append(match_score(game[0], "X"))
#             if game[0] == "B":
#                 result.append(match_score(game[0], "Y"))
#             if game[0] == "C":
#                 result.append(match_score(game[0], "Z"))
#         elif game[1] == "Z":
#             if game[0] == "A":
#                 result.append(match_score(game[0], "Y"))
#             if game[0] == "B":
#                 result.append(match_score(game[0], "Z"))
#             if game[0] == "C":
#                 result.append(match_score(game[0], "X"))
#         elif game[1] == "X":
#             if game[0] == "A":
#                 result.append(match_score(game[0], "Z"))
#             if game[0] == "B":
#                 result.append(match_score(game[0], "X"))
#             if game[0] == "C":
#                 result.append(match_score(game[0], "Y"))
#     return sum(result)


scores_p1 = {"A X": 4, "A Y": 8, "B X": 1, "A Z": 3, "C X": 7, "B Y": 5, "B Z": 9, "C Y": 2, "C Z": 6}


def part_one(games):
    total_score_p1 = sum(scores_p1[x] for x in games)
    return total_score_p1


scores_p2 = {"A Y": 4, "A Z": 8, "B X": 1, "A X": 3, "C Z": 7, "B Y": 5, "B Z": 9, "C X": 2, "C Y": 6}


def part_two(games):
    total_score_p2 = sum(scores_p2[x] for x in games)
    return total_score_p2


print(part_one(read_input()))
print(part_two(read_input()))
