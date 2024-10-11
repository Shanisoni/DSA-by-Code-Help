#include<iostream>

using namespace std;


int getQuotient( int divisor , int dividend) {
    int s = 0;

    int e = 29;

    int mid = s + (e - s )/2 ;

    int ans = -1 ;

    while(s <= e) {
        if(mid*divisor == dividend)
        {
            return mid;

        }

        if( mid * divisor < dividend){
            ans = mid;
            s = mid + 1;
        }

        else{
            e = mid - 1;
        }

        mid = s + (e -s )/2;
    }
    return ans;

}


int main() {

    int divisor = 7 ;

    int dividend = 29 ;

    int ans = getQuotient( divisor , dividend);

    cout << "Final ans is :" << ans << endl;

}