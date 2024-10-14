#include<iostream>

using namespace std;


void sum (int n){
    int result = 0 ;
    for(int i = 0 ; i<=n; i++){

        result = result + i;
        
    }
    cout<<"Here is the result"<<endl<<result<<endl;


}

int main(){
       sum(5);
}


// #include<iostream>

// using namespace std;\\\


// void sum (int n){
//     int result = 0 ;
//     for(int i = 0 ; i<=n; i++){

//         result = result + i;
        
//     }
//     cout<<"Here is the result"<<endl<<result<<endl;


// }

// int main(){
//        sum(5);
// }