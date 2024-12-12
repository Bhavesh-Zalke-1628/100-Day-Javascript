#include <iostream>
using namespace std;
float convertor()
{
    float inr, ch;
    float inrToUsd(float);
    float inrToJpy(float);
    float inrToRub(float);

    while (true)
    {
        int ch;
        cout << "\n 1.INR TO USD \n 2.INR TO JPY \n 3.INR TO RUB \n 4.Exit\n";
        cout << "Select the convertor:-";
        cin >> ch;
        switch (ch)
        {
        case 1:
            cout << "Enter the amout of INR:-";
            cin >> inr;
            inrToUsd(inr);
            break;
        case 2:
            cout << "Enter the amout of INR:-";
            cin >> inr;
            inrToJpy(inr);
            break;
        case 3:
            cout << "Enter the amout of INR:-";
            cin >> inr;
            inrToRub(inr);
            break;
        case 4:
            exit(0);
            break;
        default:
            break;
        }
    }
}

float inrToUsd(float inr)
{
    cout << "The converion for INR to USD:- \n";
    float value = inr / 85;
    cout << "The amount of the USD is " << value;
}

float inrToJpy(float inr)
{
    cout << "\nThe converion for INR to JPY";
    float value = inr * 0.56;
    cout << "\nThe amount of the USD is " << value;
}

float inrToRub(float inr)
{
    cout << "\nThe converion for INR to RUB";
    float value = inr * 1.24;
    cout << "\nThe amount of the RUB is " << value;
}

int main(int argc, char const *argv[])
{
    convertor();
    return 0;
}
