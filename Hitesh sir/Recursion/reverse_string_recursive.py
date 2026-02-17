def recursive_reverse_string(s):
    if len(s)<=1:
        return s
    return recursive_reverse_string(s[1:])+s[0]
    

print(recursive_reverse_string("hello"))