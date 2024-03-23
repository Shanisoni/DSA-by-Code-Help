#include<iostream>

using namespace std;


// Here since we dont need a return type hence we will use void type 

//  If there were was a condition to return a return type then in this case we will use any return type data type 
// void Operation(int a, int b , int c){

//     int answer = a+b+c;
//     cout<<"The answer is :" <<answer<<endl;
// }

// int main(){
//     Operation(5,5,5);

// }



// When we use return type data type 


int operation(int a , int b , int c){
    int answer = a+b+c;

    return answer;
}


int main(){
    int sum = operation(4,8,9);

    cout<<sum;
    
}