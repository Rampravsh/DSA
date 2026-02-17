# Function to get the bit at the
# ith position
def getBit(num, i):
  
    # Return true if the bit is
    # set. Otherwise return false
    return ((num & (1 << i)) != 0)
    