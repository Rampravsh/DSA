#include <iostream>
using namespace std;

int binaryToDecimal(string binary)
{
    int decimal = 0;
    int p = 1;
    int n = binary.size();
    for (int i = n - 1; i >= 0; i--)
    {
        if (binary[i] == '1')
        {
            decimal += p;
        }
        p *= 2;
    }
    return decimal;
}

int main()
{
    string binary;
    cout << "enter your binary: ";
    cin >> binary;
    cout << binaryToDecimal(binary) << endl;
    return 0;
}