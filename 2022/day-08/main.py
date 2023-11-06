f = open("input.txt", "r")
grid = f.read().split("\n")


def visible_from_top(i, j):
    tree_height = int(grid[i][j])
    result = True
    while i > 0:
        # Compare heights
        i -= 1
        if tree_height <= int(grid[i][j]):
            return False
    return result


def visible_from_bottom(i, j):
    tree_height = int(grid[i][j])
    result = True
    while i < len(grid) - 1:
        # Compare heights
        i += 1
        if tree_height <= int(grid[i][j]):
            return False
    return result


def visible_from_left(i, j):
    tree_height = int(grid[i][j])
    result = True
    while j > 0:
        # Compare heights
        j -= 1
        if tree_height <= int(grid[i][j]):
            return False
    return result


def visible_from_right(i, j):
    tree_height = int(grid[i][j])
    result = True
    while j < len(grid[0]) - 1:
        # Compare heights
        j += 1
        if tree_height <= int(grid[i][j]):
            return False
    return result


def part_one(data):
    acc = 0
    for i in range(0, len(grid)):
        for j in range(0, len(grid[i])):
            if visible_from_top(i, j) \
                    or visible_from_bottom(i, j) \
                    or visible_from_left(i, j) \
                    or visible_from_right(i, j):
                acc += 1
    return acc


def score_from_top(i, j):
    tree_height = int(grid[i][j])
    score = 0
    while i > 0:
        # Compare heights
        i -= 1
        score += 1
        if tree_height <= int(grid[i][j]):
            return score
    return score


def score_from_bottom(i, j):
    tree_height = int(grid[i][j])
    score = 0
    while i < len(grid) - 1:
        # Compare heights
        i += 1
        score += 1
        if tree_height <= int(grid[i][j]):
            return score
    return score


def score_from_left(i, j):
    tree_height = int(grid[i][j])
    score = 0
    while j > 0:
        # Compare heights
        j -= 1
        score += 1
        if tree_height <= int(grid[i][j]):
            return score
    return score


def score_from_right(i, j):
    tree_height = int(grid[i][j])
    score = 0
    while j < len(grid[0]) - 1:
        # Compare heights
        j += 1
        score += 1
        if tree_height <= int(grid[i][j]):
            return score
    return score


def part_two(data):
    scores = []
    for i in range(0, len(grid)):
        for j in range(0, len(grid[i])):
            scores.append(
                score_from_top(i, j) * score_from_bottom(i, j) * score_from_left(i, j) * score_from_right(i, j))

    return max(scores)


print(part_one(grid))
print(part_two(grid))
