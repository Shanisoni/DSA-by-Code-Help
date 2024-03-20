#include <iostream>
using namespace std;

int main() {

	int n;
	cin >> n;

	for(int row=0; row<n; row=row+1) {
        cout<<" ";
        }
        for(int i = 0 ; i<n; i++){
            cout<< "*";
        }
        cout<<endl;

        for(int i = 0; i < n ; i++){
                if(i==14){
                        cout<<"*";
                }
                else{
                        cout<<" ";

                }
        }
    
}