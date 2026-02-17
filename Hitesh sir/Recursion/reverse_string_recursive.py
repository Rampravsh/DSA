# def recursive_reverse_string(s):
#     if len(s)<=1:
#         return s
#     return recursive_reverse_string(s[1:])+s[0]
    

# print(recursive_reverse_string("hello"))

# secong method 

new_string = ''

def recursive_reverse_string(s, i):
    global new_string
    # बेस केस: जब स्ट्रिंग खत्म हो जाए
    if i == len(s):
        return

    # पहले आगे की रिकर्सिव कॉल करें
    recursive_reverse_string(s, i + 1)
    
    # रिकर्शन से लौटते समय कैरेक्टर जोड़ें
    new_string += s[i]

recursive_reverse_string("hello", 0)
print(new_string) # अब आउटपुट आएगा: olleh
