#include <iostream>
#include <vector>

using namespace std;

int main() {
    // vector<int> v;
//   this will create a vector of size 5 with all elements as -1
     vector<int> v(5 , -1);
     cout << "size :" << v.size() << endl;

     for( int i = 0 ; i < v.size() ; i++) {
        cout << v[i] << endl; 
     }


    //  How to copy one vector to another vector

    vector<int> v1 = {1,2,3,4,5};

    vector<int> v2(v1);

    //  New Shortcut to write print the code 

    for ( auto it : v2){
        cout << it << endl;
    }
    // for( int i = 0 ; i < v2.size() ; i++) {
    //     cout << v2[i] << endl; 
    //  }

    // v.push_back(1);
    // v.push_back(2);
    // v.push_back(3);
    
    // cout << "Element at index 2: " << v[2] << endl;
    
    // v.clear();
    
    // // Check if vector is empty before accessing elements
    // if (!v.empty()) {
    //     cout << "Element at index 0: " << v.at(0) << endl;
    // } else {
    //     cout << "Vector is empty, cannot access element at index 0." << endl;
    // }

    // if (!v.empty()) {
    //     cout << "Element at index 1: " << v[1] << endl;
    // } else {
    //     cout << "Vector is empty, cannot access element at index 1." << endl;
    // }




    // return 0;
}
