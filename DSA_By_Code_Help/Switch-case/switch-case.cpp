#include<iostream>

using namespace std;

int main(){

    int a ;

    int b ; 
    int op;
    
    cin>>a>>b;

    cout<<"What you want to operate";

    cin>>op;

    // if(op==0){
    //     cout<<(a*a);
        
    // }
    // else if(op==1){

    //     cout<<(a+a);
        
    // }
    // else if(op==2){

    // }
    // else if(op==3){
    //     cout<<(a/b);

    // }

    // else{
    //     return 0;
    // }


switch(op){
    
    case 0:
    cout<<a+b;

    case 1:

    cout<<a*b;

    case 2:

    cout<<a/b;
    cout<<endl;

    case 3:
    cout<<a-b;

}


    
}
