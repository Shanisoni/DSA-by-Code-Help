#include <bits/stdc++.h>
using namespace std;
class Solution{
public:	
	
int countPairs(vector<vector<int>> &mat1, vector<vector<int>> &mat2, int n, int x)
	{
	    // Your code goes here
	    int ans=0;
	    int i=0,j=0,a=n-1,b=n-1;
	    bool flag=true;
	    while(flag){
	        if(mat1[i][j]+mat2[a][b]==x){
	            ans++;
	            j++;b--;
	            if(j==n){
	                i++;j=0;
	            }
	            if(b==-1){
	                a--;b=n-1;
	            }
	        }
	        else if(mat1[i][j]+mat2[a][b]>x){
	            b--;
	            if(b==-1){
	                a--; b=n-1;
	            }
	        }
	        else {
	            j++;
	            if(j==n){
	                i++;j=0;
	            }
	        }
	        if(a==-1||i==n)flag=false;
	    }
	    return ans;
	}
};

int main() 
{

   	ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);
   
   	int t;
    cin >> t;
    while (t--)
    {
        int n, x;
        cin >> n >> x;

        vector<vector<int>> mat1(n, vector<int>(n, -1));
        vector<vector<int>> mat2(n, vector<int>(n, -1));

        for(int i = 0; i < n; i++)
        {
        	for(int j = 0; j < n; j++)
        	{
        		cin >> mat1[i][j];
        	}
        }

        for(int i = 0; i < n; i++)
        {
        	for(int j = 0; j < n; j++)
        	{
        		cin >> mat2[i][j];
        	}
        }

        Solution ob;

        cout << ob.countPairs(mat1, mat2, n, x) << "\n";

    }

    return 0;
}