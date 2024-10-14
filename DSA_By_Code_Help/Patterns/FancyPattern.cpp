#include<iostream>

using namespace std ; 

int main(){

    int n;

    cin>>n;

    for(int i =0; i<n; i++){
        int start_num_index = 8 -i;
        int num =  i+1;
        int count_num = num;
        for(int j=0; j<19; j++){
            if(j== start_num_index &&  count_num >0){
                cout<<num;
                start_num_index += 2;
                count_num--;
            }
            else{
                cout<<"*";
            }
        }cout<<endl;
    } 
   
}