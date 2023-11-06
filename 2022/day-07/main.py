def read_file():
    data = open("input.txt", 'r').read().split("\n")
    return data


def change_directory(s, cd):
    match s:
        case '/':
            cd = ['root']
        case '..':
            cd.pop()
        case _:
            cd.append(s)

    return cd


def get_dict_path(d, path):
    if len(path) == 1:
        return d[path[0]]
    else:
        return get_dict_path(d[path[0]], path[1:])


def directory_size(d):
    return sum(directory_size(v) if isinstance(v, dict) else v for v in d.values())


def get_directory_sizes(d, sizes=None):
    if not sizes:
        sizes = []

    for k, v in d.items():
        if not isinstance(v, dict):
            continue
        sizes.append(directory_size(v))
        get_directory_sizes(v, sizes)

    return sizes


def get_file_system(instructions):
    file_system = {'root': {}}
    cd = ['root']

    for line in instructions:
        if '$ cd' in line:
            cd = change_directory(line.split()[-1], cd=cd)
        elif '$ ls' in line:
            continue
        else:
            marker, name = line.split()
            if marker.isnumeric():
                get_dict_path(file_system, cd)[name] = int(marker)
            else:
                get_dict_path(file_system, cd)[name] = {}
    return file_system


def part_one(file_system):
    return sum(n for n in get_directory_sizes(file_system) if n <= 100_000)


def part_two(file_system):
    directory_sizes = get_directory_sizes(file_system)

    used = max(directory_sizes)
    total_size = 70000000
    need_at_least = 30000000
    unused = total_size - used
    target = need_at_least - unused

    return min(n for n in directory_sizes if n >= target)


print(part_one(get_file_system(read_file())))
print(part_two(get_file_system(read_file())))
