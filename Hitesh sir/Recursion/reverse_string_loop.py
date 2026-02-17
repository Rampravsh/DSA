def reverse_string(s):
    ans_string=""

    for char in s:
        ans_string=char + ans_string
    return ans_string

print(reverse_string('hello'))