#include<iostream>

using namespace std;


void Maxnumber(int n1, int n2 , int n3){
        int ans = max(n1,n2);

        int finalans = max(ans,n3);

        cout<<"this is the bigest Number" <<endl;

        cout<<finalans;

    }



int main (){
    Maxnumber(8,9,900);
}
