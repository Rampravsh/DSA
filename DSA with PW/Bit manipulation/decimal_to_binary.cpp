#include <iostream>
#include <bits/stdc++.h>
using namespace std;

string decimalToBinary(int n)
{
    string binary = "";
    while (n > 0)
    {
        int rem = n % 2;
        binary = to_string(rem) + binary;
        n /= 2;
    }
    return binary;
}



int main()
{
    int n;
    cout<<"Enter number: ";
    cin >> n;
    cout<<decimalToBinary(n)<<endl;


    return 0;
}