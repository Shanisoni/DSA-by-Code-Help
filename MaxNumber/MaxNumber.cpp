#include<iostream>

using namespace std;

int main (){
    cout<<"Enter num1"<<endl;
    int num1 ;

    cin>>num1;

    int num2;
     cout<<"Enter num2"<<endl;
    cin>>num2;
    int num3;
     cout<<"Enter num3"<<endl;

    cin>>num3;

    if(num1>num2 && num1>num3){
        cout<< "num1 is bigger";
    }
    else if(num2>num1 && num2>num3){
        cout<< "num2 is bigger";
    }
    else{
        cout<< "num3 is bigger" ;
    }
}