#include<iostream>

using namespace std;

float kmToMiles(float km){
       float OneMile = 0.621371;

       km = OneMile * km;

       return km;

       
    }

 int main(){

    float km;
    cout<<"Tell me how km";
    cout<<endl;
    cin>>km;

   float start = kmToMiles(km);

   cout<<start;


    



 }
