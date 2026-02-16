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

int binaryToDecimal(string binary){
    int decimal=0;
    int p=1;
    int n=binary.size();
    for(int i =n-1;i>=0;i--){
        if(binary[i]=='1'){
            decimal+=p;
        }
        p*=2;
    }
    return decimal;

}

int main()
{
    // int n;
    // cout<<"Enter number: ";
    // cin >> n;
    // cout<<decimalToBinary(n)<<endl;

    string binary;
    cout << "enter your binary: ";
    cin>>binary;
    cout<<binaryToDecimal(binary)<<endl;
    return 0;
}